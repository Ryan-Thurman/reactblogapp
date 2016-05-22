import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions/action_index'
import {Link} from 'react-router'
const url = 'https://reduxblog.herokuapp.com/api'
const api_key = '?key=12353466cji7689p0'
import axios from 'axios'

const PostsIndex = React.createClass({
  componentWillMount() {
    this.props.fetchPosts()
  },
  renderPosts () {
    return this.props.posts.map((post) => {
      return (
        <li className='list-group-item' key={post.id}>
          <Link to={`posts/${post.id}`}>
          <span className='pull-xs-right'>
            {post.categories}
          </span>
          <strong>{post.title}</strong>
          </Link>
        </li>
      )
    })
  },
  render() {
    return (
      <div>
        <div className='text-xs-right'>
          <Link to='posts/new' className='btn btn-primary'>
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className='list-group'>
          {this.renderPosts()}
        </ul>
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return { posts: state.posts.all}
}

export default connect(mapStateToProps, {fetchPosts})(PostsIndex)
