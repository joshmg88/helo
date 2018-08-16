import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


const Nav = (props) => {
    console.log(props)

    if (props.child !== '/') {
        return (
            <nav>
                {props.username}
                {props.profilePicture}
                <Link to='/dashboard'>Home</Link>
                <Link to='/new'>New Post</Link>
                <Link to='/'>Logout</Link>

            </nav>
        )
    } else {
        return null
    }
};

const mapStateToProps = state => state;

export default connect(mapStateToProps, null)(Nav);