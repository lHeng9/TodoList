import React from 'react';
import { List } from 'antd'


function ListCom(props) {
  const { list, handleClick } = props
  return (
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
  )
}

export default ListCom