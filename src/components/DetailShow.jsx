import React from 'react'
import {connect} from 'react-redux'
import {singlePost , deletePost} from '../actions/action_index'
import {Link} from 'react-router'


const DetailShow = React.createClass({
  contextTypes: {
    router: React.PropTypes.object
  },
  onDeleteClick(){
    this.props.deletePost(this.props.params.id)
  },
  componentWillMount(){
    this.props.singlePost(this.props.params.id)
  },
  render () {
    const {details} = this.props

    if(!details) {
      return (
        <div>Loading</div>
      )
    }
    return (
      <div>
        <Link to='/' className="btn btn-primary">Home</Link>
        <button className='pull-xs-right btn btn-danger' onClick={this.onDeleteClick}>Delete Post</button>
        <h3>{details.title}</h3>
        <h6>Categories: {details.categories}</h6>
        <p>{details.content}</p>
      </div>
    )
  }
})

function mapStateToProps(state) {
  return {details: state.posts.details}
}

export default connect(mapStateToProps, {singlePost , deletePost})(DetailShow)
