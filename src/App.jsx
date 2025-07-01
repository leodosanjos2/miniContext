import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      React context API
      <Login/>
      <Profile/>
    </>
  )
}

export default App
