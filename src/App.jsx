import { useEffect, useState } from 'react'
import shortenUrl from './api.js'
import Input from './components/Input.jsx'

import './App.css'
import Output from './components/Output.jsx'

function App() {
  const [output, setOutput] = useState('')
  const returnShortened = async (urlToShorten) => {
    const shortUrl = await shortenUrl(urlToShorten)
    setOutput(shortUrl) 
  }

  return (
    <div className="App">
      <h1>Shorten it!</h1>
      <p>Enter a URL: </p>
      <Input onSubmit={returnShortened} />
      <Output output={output} />
    </div>
  )
}

export default App
