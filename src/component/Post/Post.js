import React, { Component } from 'react';
import axios from 'axios'

class Post extends Component {

    constructor() {
        super()
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        const { postid } = this.props.match.params
        axios.get(`/api/single/${postid}`).then(response => {
            this.setState({
                posts: response.data
            });
        })
    }



    render() {
        console.log(this.props)
        let post = this.state.posts.map((e, i) => {
            return <div key={i}>{e.title} {e.content}</div>
        })

        return (
            <div>
                Post
                {post}

            </div>
        );
    }
}

export default Post;