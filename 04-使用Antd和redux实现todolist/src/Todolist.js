import React, {Component} from 'react';
import {Button, Input, List} from 'antd';
import store from './store/index.js';
import {getBtnClickAction, getInputChangeAction, getLiClickAction} from './store/actionCreator';
import 'antd/dist/antd.css';


class Todolist extends Component {

  constructor(props) {
    super(props);
    this.state = store.getState();
    this.inputChange = this.inputChange.bind(this);
    this.storeChange = this.storeChange.bind(this);
    this.btnClick = this.btnClick.bind(this);
    this.LiClick = this.LiClick.bind(this);
    store.subscribe(this.storeChange);
  }


  render() {
    return (
      <>
      <div>
        <Input
          placeholder="Todolist"
          style={{width: '300px', margin: '10px'}}
          value={this.state.inputValue}
          onChange={this.inputChange}

        />
        <Button type="primary"
                onClick={this.btnClick}
        >提交
        </Button>
      </div>
      <div style={{width: '500px', margin: '10px'}}>
        <List
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (
            <List.Item onClick={this.LiClick.bind(this, index)} index={index}>
              {item}
            </List.Item>
          )}
        />
      </div>
      </>
    )
  }

  inputChange(e) {
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);
  }

  storeChange() {
    this.setState(store.getState())
  }

  btnClick() {
    const action = getBtnClickAction();
    store.dispatch(action);
  }

  LiClick(index) {
    const action = getLiClickAction(index);
    store.dispatch(action);
  }


}

export default Todolist;
