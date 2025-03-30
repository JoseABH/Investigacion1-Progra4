
import './App.css'
import useCounter from './hook/useCounter';
import Counter from './components/Counter';

function App() {
  const { count, increment } = useCounter();
  return (
    <>
     <div>
      <h1>Ejemplo useCallback</h1>
      <Counter increment={increment} count={count} />
    </div>
      
    </>
  )
}

export default App
