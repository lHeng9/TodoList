import React, { useContext } from 'react';
import { List } from 'antd'
import { ListContext } from '../context/TodoList'


function MyList(props) {
  const { data, dispatch } = useContext(ListContext)
  const { list } = data

  function onHandleClick(index) {
    dispatch({ type: 'itemClick', value: index })
  }
  return (
    <List
      className='list'
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
              onHandleClick(index)
            }}
            className='btn'
          >{item.finished ? '已完成' : '完成'}</div>
        </List.Item>
      )}
    />
  )
}

export default MyList