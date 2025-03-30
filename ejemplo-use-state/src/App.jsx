import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Counter } from "./components/Counter";
function App() {


  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen gap-10 ">
        <h1>Ejemplo useState</h1>
        <Counter />
      </div>
    </>
  )
}

export default App
