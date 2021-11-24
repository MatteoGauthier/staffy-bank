import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Hero from './components/Hero'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Hero/>
      <Card/>
    </div>
  )
}

export default App
