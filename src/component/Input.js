import React, { useContext, useEffect } from 'react';
import { Input, Button } from 'antd'
import { ListContext } from '../context/TodoList'
import Axios from 'axios'

function MyInput(props) {
  const { data, dispatch } = useContext(ListContext)
  const { inputValue } = data

  useEffect(() => {
    Axios.get('./api.json')
      .then((res) => {
        const newState = {
          inputValue: res.data.inputValue,
          list: res.data.list
        }
        dispatch({ type: 'init', value: newState })
      })
  }, [dispatch])
  function onInputChange(e) {
    dispatch({
      type: 'inputChange',
      value: e.target.value
    })
  }
  function onAddClick() {
    dispatch({
      type: 'addClick'
    })
  }
  return (
    <>
      <Input
        type="text"
        value={inputValue}
        onChange={(e) => {
          onInputChange(e)
        }}
        style={{ 'width': '300px', marginRight: '5px' }}
      />
      <Button
        type='primary'
        onClick={() => {
          onAddClick()
        }}
      >
        添加
      </Button>
    </>
  )
}

export default MyInput