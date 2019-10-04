import React, {Component} from 'react';
import TodolistUI from './TodolistUI';
import store from './store/index.js';
import {getBtnClickAction, getInputChangeAction, getLiClickAction, getTodolistAction} from './store/actionCreator';
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
      <TodolistUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        inputChange={this.inputChange}
        btnClick={this.btnClick}
        LiClick={this.LiClick}
      />
    )
  }

  componentDidMount() {
    const action = getTodolistAction();
    store.dispatch(action);
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


/*
* UI组件直接导出不行
* index变成class问题
* bind函数问题
* */