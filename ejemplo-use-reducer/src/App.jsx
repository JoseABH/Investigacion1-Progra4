import Counter from './components/Counter';
import useCounterReducer from './hook/useCounterReducer';
import './App.css'

function App() {
  
  const { count, increment, decrement } = useCounterReducer();
  return (
    <>
      <div>
      <h1>Ejemplo useReducer</h1>
      <Counter count={count} increment={increment} decrement={decrement} />
    </div>
    </>
  )
}

export default App
