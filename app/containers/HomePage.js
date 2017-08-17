// @flow
import React, { Component } from 'react';
import Home from '../components/Home';
import Login from '../containers/Login';

export default class HomePage extends Component {
  render() {
    let HomeComponents = <Home />;
    if(!localStorage.getItem('token')) {
      HomeComponents = <Login />;
    }

    return (
      HomeComponents
    );
  }
}
