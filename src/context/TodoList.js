import React, { createContext, useReducer } from 'react';
export const ListContext = createContext()

function reducer(state, action) {
  const newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case 'init':
      return action.value
    case 'inputChange':
      newState.inputValue = action.value
      return newState
    case 'addClick':
      if (newState.inputValue === '') return newState
      newState.list.push({ text: newState.inputValue, finished: false })
      newState.inputValue = ''
      return newState
    case 'itemClick':
      newState.list[action.value].finished = !newState.list[action.value].finished
      return newState
    default:
      return state

  }
}

function TodoList(props) {
  const [data, dispatch] = useReducer(reducer, { inputValue: '', list: [] })
  return (
    <ListContext.Provider value={{ data, dispatch }
    }>
      {props.children}
    </ListContext.Provider >
  )
}

export default TodoList
