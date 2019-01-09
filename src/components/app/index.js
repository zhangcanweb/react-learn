import React, { Component } from 'react';
// import TodoList from '../todo-list';
import { Provider } from 'react-redux';
import store from '../../store';
import Header from '../header'
import { CommonStyle } from '../../assets/style/common';
import { FontIcon } from '../../assets/fonticon/iconfont';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../../pages/home';
import Detail from '../../pages/detail';
export default class App extends Component{
    render () {
        return (
          <Provider store={store}>
            <div>
              <CommonStyle />
              <FontIcon />
              <Header />
							<BrowserRouter>
								<div>
                  <Route path='/' exact component={Home}></Route>								
                  <Route path='/detail' exact component={Detail}></Route>
                </div>								
							</BrowserRouter>
            </div>
          </Provider>
        )
    }
}