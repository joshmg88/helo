import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from 'axios'

class Dashboard extends Component {

    constructor() {
        super()
        this.state = {
            userposts: true,
            search: '',
            posts: []
        };
    }

    componentDidMount() {
        this.handlePosts()
    }


    togglePosts = () => {
        this.state.userposts ? this.setState({ userposts: false }) :
            this.setState({ userposts: true });
    }

    handlePosts = () => {
        let { userposts, search } = this.state
        axios.get(`/api/posts?search=${search}&userposts=${userposts}`)
            .then(response => {
                this.setState({
                    posts: response
                });
            })
    }

    handleSearch = (val) => {
        this.setState({
            search: val
        })
    }




    render() {
        console.log(this.state)

        // const { userPosts } = this.state
        // let post = userPosts.map((e, i) => {
        //     return <div key={i}> {e.title} {e.content}</div>
        // })

        return (
            <div>

                <input type="text" placeholder="search" onChange={(e) => this.handleSearch(e.target.value)} />

                <button onClick={this.handlePosts} >search</button>
                <button type="reset">Reset</button>
                <div className="checkbox">
                    <input checked={this.state.userposts} type="checkbox" id="myPosts" onChange={() => this.togglePosts()} />
                    <label htmlFor="myPosts">My Posts</label>
                </div>



            </div>
        );
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, null)(Dashboard);