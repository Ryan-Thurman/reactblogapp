import React from 'react'
import {Route, IndexRoute} from 'react-router'

import App from './components/app'
import PostsIndex from './components/post_index'
import NewPost from "./components/newPost"
import DetailShow from './components/DetailShow'


export default (
  <Route path="/" component={App} >
    <IndexRoute component={PostsIndex} />
    <Route path="posts/new" component={NewPost} />
    <Route path='posts/:id' component={DetailShow} />
  </Route>
)
