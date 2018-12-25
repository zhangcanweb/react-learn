import React, { Component, Fragment } from 'react';
import { Input, Button, List } from 'antd';
import store from '../../store';
import {getHandleInput, getHandleBtn, getHandleItem} from '../../store/actionCreator';

export default class TodoList extends Component{    
	
	constructor (props) {
		super(props);
		this.state = store.getState();
		console.log(this.state);
    this.handleChang = this.handleChang.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    store.subscribe(this.handleStoreChange);
	}

  render () {
    return (
			<Fragment>
        <div style={{marginTop: '10px', marginLeft: '20px'}}>
            <Input 
              placeholder="todo info" 
              value={this.state.inputValue} 
              style={{width: '500px', marginRight: '20px'}}
              onChange={this.handleChang}
            />
            <Button 
              type="primary"
              onClick={this.handleBtnClick}
            >
              提交
            </Button>
        </div>
        <List
					style={{width: '500px', marginTop: '10px', marginLeft: '20px'}}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (<List.Item onClick={this.handleDeleteClick.bind(this, index)}>{item}</List.Item>)}
        />
			</Fragment>
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