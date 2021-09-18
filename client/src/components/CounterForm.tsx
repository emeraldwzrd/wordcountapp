import React, { useState } from 'react'

type Props = { 
  countWordsFromURL: (e: React.FormEvent, formData: IURL | any) => void 
}

const CounterForm: React.FC<Props> = ({ countWordsFromURL }) => {
  const [formData, setFormData] = useState<string | {}>()

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      formData,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  return (
    <form className='Form' onSubmit={(e) => countWordsFromURL(e, formData)}>
      <div>
        <label htmlFor='url'>Enter URL</label>
      </div>
      <input onChange={handleForm} type='text' id='url' />
      <div>
        <button disabled={formData === undefined ? true: false} >Count Words</button>
      </div>
    </form>
  )
}

export default CounterForm
