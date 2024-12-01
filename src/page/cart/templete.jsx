import {useReducer} from 'react';

const reducer = (state, action) => {
  console.log('state', state, 'action', action);
  switch (action.type) {
    case 'increase':
      return {...state, [action.id]: state[action.id] + 1};
    case 'decrease':
      if (state[action.id] - 1 === 0) {
        const {[action.id]: _, ...rest} = state;
        return rest;
      }
      return {...state, [action.id]: state[action.id] - 1};
    default:
      return state;
  }
};

export const Counter = () => {
  const initialState = {1: 1, 2: 2, 3: 3, 4: 4};
  // const [myCartFromLocalStorage, setMyCartFromLocalStorage] = useAtom(myCart);

  const [state, dispatch] = useReducer(reducer, initialState);
  // const [state, dispatch] = useReducer(reducer, myCartDetail);

  return (
    <>
      {Object.entries(state).map(([productId, volumn]) => (
        <div
          key={productId}
          className='flex items-center justify-center'>
          <button
            className='border p-3'
            onClick={() => dispatch({type: 'decrease', id: productId})}>
            -
          </button>
          <div className='p-3'>{state[productId]}</div>
          <button
            className='border p-3'
            onClick={() => dispatch({type: 'increase', id: productId})}>
            +
          </button>
        </div>
      ))}
    </>
  );
};
