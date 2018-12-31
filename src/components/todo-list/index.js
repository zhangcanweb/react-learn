import React, { Component } from 'react';
import store from '../../store';
import {getHandleInput, getHandleBtn, getHandleItem, getListAction } from '../../store/actionCreator';
import TodoListUi from './indexUI';
import { connect } from 'react-redux';
// import axios from 'axios';

//容器组件
class TodoList extends Component{
  render () {
    const { inputValue, list, handleChang, handleBtnClick, handleDeleteClick} = this.props;
    return (
			<TodoListUi
        inputValue={inputValue}
        list={list}
        handleChang={handleChang}
        handleBtnClick={handleBtnClick}
        handleDeleteClick={handleDeleteClick}
      />
    )
  }
  componentDidMount () {
    const action = getListAction();
    store.dispatch(action);
  }
}

const mapStateToProps = state => {
  return {
    ...state
  }
}
const mapDispatchToProps = dispatch => {
  return {
    handleChang (e) {
      const action = getHandleInput(e.target.value);
      store.dispatch(action);
    },
    handleBtnClick () {
      const action = getHandleBtn()
      store.dispatch(action);
    },
    handleDeleteClick (index) {
      const action = getHandleItem(index)
      store.dispatch(action);
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)