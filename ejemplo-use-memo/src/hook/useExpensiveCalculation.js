import { useMemo } from 'react';

const useExpensiveCalculation = (number) => {
  // Simulación de un cálculo costoso
  const expensiveCalculation = (num) => {
    console.log('Calculando...');
    let result = 0;
    for (let i = 0; i < 100000; i++) {
      result += num;
    }
    return result;
  };

  // useMemo memoriza el resultado y solo lo recalcula si 'number' cambia
  const memoizedResult = useMemo(() => expensiveCalculation(number), [number]);

  return memoizedResult;
};

export default useExpensiveCalculation;
