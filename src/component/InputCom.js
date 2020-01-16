import React from 'react';
import { Input, Button, List } from 'antd'

function InputCom(props) {
  return (
    <>
      <Input
        type="text"
        value={props.inputValue}
        onChange={() => {
          props.inputChange()
        }}
        ref={props.inputEl}
        style={{ 'width': '300px', marginRight: '5px' }}
      />
      <Button
        type='primary'
        onClick={() => {
          props.addClick()
        }}
      >
        添加
      </Button>
    </>
  )
}

export default InputCom