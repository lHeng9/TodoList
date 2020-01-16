import React from 'react';
import { Input, Button } from 'antd'

function InputCom(props) {
  const { inputValue, inputChange, inputEl, addClick } = props
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
    </>
  )
}

export default InputCom