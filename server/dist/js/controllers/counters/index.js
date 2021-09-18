"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.countWords = void 0;
const cheerio_1 = __importDefault(require("cheerio"));
const puppeteer_1 = __importDefault(require("puppeteer"));
function parseWordsIntoMap(s) {
    const chars = [...s];
    var nextWord = "";
    let wordMap = new Map();
    chars.forEach((c, i) => {
        if (nextWord !== "") {
            if (c.toUpperCase() != c.toLowerCase() || c.codePointAt(0) > 127 || c == "'") {
                nextWord += c;
            }
            else {
                var lowerCaseWord = nextWord.toLowerCase();
                if (wordMap.get(lowerCaseWord) !== undefined) {
                    wordMap.set(lowerCaseWord, wordMap.get(lowerCaseWord) + 1);
                }
                else {
                    wordMap.set(lowerCaseWord, 1);
                }
                nextWord = "";
            }
        }
        else {
            if (c.toUpperCase() != c.toLowerCase() || c.codePointAt(0) > 127) {
                nextWord = c;
            }
        }
    });
    return wordMap;
}
const countWords = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    try {
        const browser = yield puppeteer_1.default.launch();
        const [page] = yield browser.pages();
        yield page.goto(body.url, { waitUntil: 'networkidle0' });
        const data = yield page.content();
        yield browser.close();
        const $ = cheerio_1.default.load(data);
        const wordMap = parseWordsIntoMap(cheerio_1.default.text($('body')));
        let wordCounts = [];
        for (let entry of wordMap.entries()) {
            let wordCount = {
                word: entry[0],
                count: entry[1]
            };
            wordCounts.push(wordCount);
        }
        res
            .status(201)
            .json({ message: "Words counted", wordCounts: wordCounts });
    }
    catch (error) {
        throw error;
    }
});
exports.countWords = countWords;
