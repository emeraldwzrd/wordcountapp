import React, { useState } from 'react'
import CounterForm from './components/CounterForm'
import WordCountItem from './components/WordCountItem'
import { countWords } from './API'

const App: React.FC = () => {
  const [wordCounts, setWordCounts] = useState<ICounter[]>([])

  const handleCountWords = (e: React.FormEvent, formData: IURL): void => {
    e.preventDefault()
    countWords(formData)
    .then(({ status, data }) => {
     if (status !== 201) {
       throw new Error('Error! Could not count words from URL')
     }
     setWordCounts(data.wordCounts)
   })
   .catch((err) => console.log(err))
  }

  return (
    <main className='App'>
      <h1>URL Word Count</h1>
      <CounterForm countWordsFromURL={handleCountWords} />
      {wordCounts.map((wordCount: ICounter) => (
        <WordCountItem
          key={wordCount.word}
          wordCount={wordCount}
        />
      ))}
    </main>
  )
}

export default App
