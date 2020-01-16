import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import './index.css'
import Axios from 'axios'

function App() {
  const [list, setList] = useState()
  const [inputValue, setInputValue] = useState()
  const inputEl = useRef()

  useEffect(() => {
    Axios.get('./api.json')
      .then((res) => {
        console.log(res.data)
        setInputValue(res.data.inputValue)
        setList(res.data.list)
      })
  }, [])

  function inputChange() {
    setInputValue(inputEl.current.input.value)
  }
  function addClick() {

    if (inputValue != '') {
      setList([...list, { text: inputValue, finished: false }])
      setInputValue('')
    }
  }
  function handleClick(index) {

    console.log(index)
    let newList = [...list]
    newList[index].finished = !list[index].finished
    setList(newList)
  }
  return (
    <>
      <Input
        type="text"
        value={inputValue}
        onChange={() => {
          inputChange()
        }}
        ref={inputEl}
        style={{ 'width': '300px', marginRight: '5px' }}
      />
      <Button
        type='primary'
        onClick={() => {
          addClick()
        }}
      >
        添加
      </Button>
      <List
        className='list'
        style={{ width: '350px' }}
        dataSource={list}
        bordered
        renderItem={(item, index) => (
          <List.Item
            className={`listItem ${item.finished ? 'finished' : 'unfinished'}`}
            key={index}
          >
            <div>{item.text}</div>
            <div
              onClick={() => {
                handleClick(index)
              }}
              className='btn'
            >{item.finished ? '已完成' : '完成'}</div>
          </List.Item>
        )}
      />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))