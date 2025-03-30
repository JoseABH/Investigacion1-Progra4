import React from 'react';
import useExpensiveCalculation from '../hook/useExpensiveCalculation';

const ExpensiveCalculation = ({ number }) => {
  const result = useExpensiveCalculation(number);

  return (
    <div>
      <h2>Resultado del cálculo costoso: {result}</h2>
    </div>
  );
};

export default ExpensiveCalculation;
