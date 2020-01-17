import React from 'react';
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
import './index.css'
import Input from './component/Input'
import List from './component/List'
import TodoList from './context/TodoList'

function App() {
  return (
    <TodoList>
      <Input />
      <List />
    </TodoList>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))