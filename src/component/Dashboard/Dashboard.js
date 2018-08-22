import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Dashboard extends Component {

    constructor() {
        super()
        this.state = {
            userposts: true,
            search: '',
            posts: [],
            content: ''
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
        axios.get(`/api/posts?search=${search}&userposts=${userposts}&${this.props.id}`)
            .then(response => {
                this.setState({
                    posts: response.data
                });
            })
    }

    handleSearch = (val) => {
        this.setState({
            search: val
        })
    }

    handleEdit = () => {
        const { content, id } = this.state.posts[0]
        axios.put('/api/content', { content, id })
    }
    handleContent = (val) => {
        this.setState({
            content: val
        });
    }



    render() {
        console.log(this.state)

        // const posts = this.state.posts.data[0]
        let post = this.state.posts.map((e, i) => {
            return <Link to={`/post/${e.id}`} key={i}>
                <div key={i}> {e.title} {e.content}</div>
            </Link>
        })

        return (
            <div>

                <input type="text" placeholder="search" onChange={(e) => this.handleSearch(e.target.value)} />

                <button onClick={this.handlePosts} >search</button>
                <button type="reset">Reset</button>
                <div className="checkbox">
                    <input checked={this.state.userposts} type="checkbox" id="myPosts" onChange={() => this.togglePosts()} />
                    <label htmlFor="myPosts">My Posts</label>
                </div>

                {post}

                <input placeholder="edit content" onChange={(e) => this.handleContent(e.target.value)} />
                <button onClick={this.handleEdit}>Submit</button>



            </div>
        );
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, null)(Dashboard);