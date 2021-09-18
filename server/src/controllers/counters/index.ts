import { Response, Request } from "express"
import { ICounter, IURL } from "./../../types/counter"
import cheerio from 'cheerio';
import puppeteer from 'puppeteer';

function parseWordsIntoMap(s: string): Map<string, number> {
  const chars = [...s];
  var nextWord: string = "";
  let wordMap = new Map<string, number>();

  chars.forEach((c, i) => {
       if(nextWord !== "") {
         if(c.toUpperCase() != c.toLowerCase() || c.codePointAt(0) > 127 || c == "'") {
           nextWord += c;
         } else {
           var lowerCaseWord : string = nextWord.toLowerCase()
           if(wordMap.get(lowerCaseWord) !== undefined) {
             wordMap.set(lowerCaseWord, wordMap.get(lowerCaseWord) + 1);
           } else {
             wordMap.set(lowerCaseWord, 1)
           }
           nextWord = "";
         }
       } else {
         if(c.toUpperCase() != c.toLowerCase() || c.codePointAt(0) > 127) {
           nextWord = c; 
         }
       }
  }); 
  return wordMap;
}

const countWords = async (req: Request, res: Response): Promise<void> => {
  const body = req.body as IURL
  try {
    const browser = await puppeteer.launch();
    const [page] = await browser.pages();
    await page.goto(body.url, { waitUntil: 'networkidle0' });
    const data = await page.content();
    await browser.close();
    const $ = cheerio.load(data);
    const wordMap = parseWordsIntoMap(cheerio.text($('body')));
    let wordCounts = [];
    for (let entry of wordMap.entries()) {
      let wordCount: ICounter =   {
        word: entry[0],
        count: entry[1]
      }
      wordCounts.push(wordCount);
    }
    res
      .status(201)
      .json({ message: "Words counted", wordCounts: wordCounts})
  } catch (error) {
    throw error
  }
}

export { countWords }
