import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MotDePasse from './MotDePasse'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MotDePasse/>
    </>
  )
}

export default App
