import React, { Component } from 'react';
import { connect } from 'react-redux'

class Dashboard extends Component {
    render() {
        return (
            <div>

                Dashboard
            </div>
        );
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, null)(Dashboard);