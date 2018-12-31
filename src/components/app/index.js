import React, { Component } from 'react';
import TodoList from '../todo-list'
import { Provider } from 'react-redux';
import store from '../../store';

export default class App extends Component{
    render () {
        return (
            <Provider store={store}>
                <TodoList />
            </Provider>
        )
    }
}