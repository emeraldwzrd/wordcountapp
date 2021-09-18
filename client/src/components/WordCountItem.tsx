import React from "react"

const WordCountItem: React.FC<WordCountProps> = ({ wordCount }) => {
  return (
    <div className="WordCountItem">
      <div className="WordCountItem--text">
        <h1>{wordCount.word}</h1>
      </div>
      <div className="WordCountItem--text">
        <h1>{wordCount.count}</h1>
      </div>
    </div>
  )
}

export default WordCountItem 
