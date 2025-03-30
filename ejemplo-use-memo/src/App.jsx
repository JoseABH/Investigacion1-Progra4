import { useState } from 'react'
import ExpensiveCalculation from './components/ExpensiveCalculation';

import './App.css'

function App() {
  const [number, setNumber] = useState(1);

  return (
    <>
     <div>
      <h1> Ejemplo useMemo</h1>
      <button onClick={() => setNumber(number + 1)}>Increment Number</button>
      <ExpensiveCalculation number={number} />
    </div>
    </>
  )
}

export default App
