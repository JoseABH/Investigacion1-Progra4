import { useReducer } from 'react';

// Definimos las acciones
const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
};

// Estado inicial
const initialState = { count: 0 };

// Reducer que maneja las acciones
function counterReducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const useCounterReducer = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  // Funciones que despachan acciones
  const increment = () => dispatch({ type: ACTIONS.INCREMENT });
  const decrement = () => dispatch({ type: ACTIONS.DECREMENT });

  return { count: state.count, increment, decrement };
};

export default useCounterReducer;
