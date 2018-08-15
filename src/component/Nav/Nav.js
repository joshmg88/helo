import React from 'react';
import { Link } from 'react-router-dom'
const Nav = (props) => {
    console.log(props)

    if (props.child !== '/') {
        return (
            <nav>

                <Link to='/dashboard'>Home</Link>
                <Link to='/new'>New Post</Link>
                <Link to='/'>Logout</Link>

            </nav>
        )
    } else {
        return null
    }
};

export default Nav;