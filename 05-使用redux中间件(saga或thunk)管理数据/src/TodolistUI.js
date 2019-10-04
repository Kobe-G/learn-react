import React from 'react';
import {Button, Input, List} from 'antd';

const TodolistUI = (props) => {
  return (
    <>
    <div>
      <Input
        placeholder="Todolist"
        style={{width: '300px', margin: '10px'}}
        value={props.inputValue}
        onChange={props.inputChange}

      />
      <Button type="primary"
              onClick={props.btnClick}
      >提交
      </Button>
    </div>
    <div style={{width: '500px', margin: '10px'}}>
      <List
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (
          <List.Item onClick={() => {
            props.LiClick(index)
          }}>
            {item}
          </List.Item>
        )}
      />
    </div>
    </>
  )
};

export default TodolistUI;