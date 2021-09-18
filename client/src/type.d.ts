interface IURL {
  url: string
}

interface ICounter {
  word: string
  count: number
}

type WordCountProps = {
   wordCount: ICounter
}

type ApiRequestDataType = {
  message: string
  status: string
  url: IURL
}

type ApiResponseDataType = {
  message: string
  status: string
  wordCounts: ICounter[]
}

