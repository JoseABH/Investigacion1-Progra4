import React from 'react';

const Counter = ({ count, increment, decrement }) => {
  console.log('Counter rendered');
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
    </div>
  );
};

export default Counter;
