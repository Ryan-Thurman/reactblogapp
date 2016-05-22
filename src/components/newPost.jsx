import React from 'react'
import {reduxForm} from 'redux-form'
import {createPost} from '../actions/action_index'
import {Link} from 'react-router'

const NewPost = React.createClass({
  contextTypes: {
       router: React.PropTypes.object
   },
   onSumbit(props) {
     this.props.createPost(props)
     .then(()=> {
       //After promise is resolved successfully navigate back to home
       this.context.router.push('/')
     })
   },
  render() {
    const { fields: {title, categories, content}, handleSubmit} = this.props

    return (
      <form onSubmit={handleSubmit(this.onSumbit)}>
        <h3>Create a New Post</h3>

        <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`} >
          <label>Title</label>
          <input type='text' className='form-control' {...title}/>
          <div className='text-help'>
            {title.touched ? title.error : ''}
          </div>
        </div>

        <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
          <label>Categories</label>
          <input type='text' className='form-control' {...categories}/>
          <div className="text-help">
            {categories.touched ? categories.error : ''}
          </div>
        </div>

        <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
          <label>Content</label>
          <textarea className='form-control' {...content}/>
          <div className="text-help">
            {content.touched ? content.error : ''}
          </div>
        </div>

        <button type='submit' className='btn btn-primary'>Submit</button>
        <Link to='/' className='btn btn-danger'>Cancel</Link>

      </form>
    )
  }
})

const validate = (values) => {
  const errors = {}

  if (!values.title) {
    errors.title = 'Enter a username'
  }
  if (!values.categories) {
    errors.categories = 'Enter a categories'
  }
  if (!values.content) {
    errors.content = 'Please enter a description'
  }

  return errors
}

export default reduxForm({
  //this is wher you define the form and the fields to be entered
  form: 'NewForm',
  fields: ['title', 'categories', 'content'],
  validate
}, null, {createPost})(NewPost)
