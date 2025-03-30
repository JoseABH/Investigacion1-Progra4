import React from "react";
import { useCounter } from "../hooks/useCounter";

export function Counter() {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div className="p-4 border rounded">
      <h2 className="text-xl font-bold">Contador: {count}</h2>
      <div className="mt-2 flex gap-2">
        <button className="px-4 py-2 bg-blue-500 text-white" onClick={increment}>
          +
        </button>
        <button className="px-4 py-2 bg-red-500 text-white" onClick={decrement}>
          -
        </button>
        <button className="px-4 py-2 bg-gray-500 text-white" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}
