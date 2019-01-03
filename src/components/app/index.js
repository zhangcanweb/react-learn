import React, { Component } from 'react';
// import TodoList from '../todo-list';
import { Provider } from 'react-redux';
import store from '../../store';
import Header from '../header'
import { CommonStyle } from '../../assets/style/common';
import { FontIcon } from '../../assets/fonticon/iconfont';

export default class App extends Component{
    render () {
        return (
            <Provider store={store}>
                <CommonStyle />
                <FontIcon />
                <Header />
            </Provider>
        )
    }
}