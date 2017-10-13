import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Login from './Login';
//var userReducers=require('../reducers/user');

import userReducers from '../reducers/user';

import{createStore,combineReducers} from 'redux';
import{Provider} from 'react-redux';

let store=createStore(combineReducers({userReducers}));

class App extends Component{
    render(){
        return (<Login/>);
    }
}

export default class AppMovies extends Component {
    render() {
      return (
        <Provider store={store}>
            <App/>
        </Provider>
      );
    }
  }