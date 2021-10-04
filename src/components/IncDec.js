import React, { useReducer } from 'react'

const initialState = 0

const reducer = (state, action) => {
  if (action.type === 'INCREMENT') {
    return state + 1
  }
  if (action.type === 'DECREMENT') {
    return state - 1
  }
  return state
}

const IncDec = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  )
}

export default IncDec
