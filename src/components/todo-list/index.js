import React, { Component } from 'react';
import store from '../../store';
import {getHandleInput, getHandleBtn, getHandleItem} from '../../store/actionCreator';
import TodoListUi from './indexUI';

//容器组件
export default class TodoList extends Component{    
	
	constructor (props) {
		super(props);
		this.state = store.getState();
    this.handleChang = this.handleChang.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleDeleteClick=this.handleDeleteClick.bind(this);
    store.subscribe(this.handleStoreChange);
	}

  render () {
    return (
			<TodoListUi
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleChang={this.handleChang}
        handleBtnClick={this.handleBtnClick}
        handleDeleteClick={this.handleDeleteClick}
      />
    )
  }
  handleChang (e) {
    const action = getHandleInput(e.target.value);
    store.dispatch(action);
  }
  handleStoreChange () {
    this.setState(store.getState());
  }
  handleBtnClick () {
    const action = getHandleBtn()
    store.dispatch(action);
  }
  handleDeleteClick (index) {
    const action = getHandleItem(index)
    store.dispatch(action);
  }
}