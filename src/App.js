import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import routes from './component/routes';
import Nav from './component/Nav/Nav';

class App extends Component {
  render() {
    return (

      <div>
        {routes}
        <Nav child={this.props.location.pathname} />
      </div>

    );
  }
}

export default withRouter(App);
