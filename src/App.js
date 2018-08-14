import React, { Component } from 'react';
import Auth from './component/Auth/Auth';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Nav from './component/Nav/Nav';


class App extends Component {
  render() {
    return (
      <div>
        <Auth />
        <Dashboard />
        <Form />
        <Nav />
      </div>
    );
  }
}

export default App;
