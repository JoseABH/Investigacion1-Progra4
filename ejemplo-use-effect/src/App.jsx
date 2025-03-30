import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CatFact } from "./components/CatFact";
function App() {
  

  return (
    <>
      <div >
      <h1>Ejemplo useEffect</h1>
        <h3 >Hecho sobre un gato:</h3>
        <CatFact />
      </div>
    </>
  )
}

export default App
