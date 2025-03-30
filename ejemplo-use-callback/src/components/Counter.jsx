import React from 'react';

const Counter = React.memo(({ increment, count }) => {
  console.log('Counter rendered');
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
});

export default Counter;
