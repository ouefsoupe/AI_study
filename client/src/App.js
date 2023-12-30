import React, {useEffect, useState} from 'react'
import ImageUpload from './imageUpload';

function App() {

  const [backendData, setBackendData]= useState([{}])

  useEffect(() => {
    fetch("/api").then(
      response =>response.json()
      .then(
        data => {
          setBackendData(data)
        }
      )
    )
  }, [])

  return (
  <div>
    <ImageUpload />
  </div>
  )
}

export default App 