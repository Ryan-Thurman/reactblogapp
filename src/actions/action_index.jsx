import axios from 'axios'

export const FETCH_POSTS = 'FETCH_POSTS'
export const CREATE_POST = 'CREATE_POST'
export const SINGLE_POST = 'SINGLE_POST'
export const DELETE_POST = 'DELETE_POST'

const url = 'https://reduxblog.herokuapp.com/api'
const api_key = '?key=12353466cji7689p0'

export function fetchPosts() {
  const request = axios.get(`${url}/posts${api_key}`)

  return {
    type: FETCH_POSTS,
    payload: request
  }
}

export function createPost(props) {
  const request = axios.post(`${url}/posts${api_key}`, props)

  return {
    type: CREATE_POST,
    payload: request
  }
}

export function singlePost(id) {
  const request = axios.get(`${url}/posts/${id}${api_key}`)

  return {
    type: SINGLE_POST,
    payload: request
  }
}

export function deletePost(id) {
  const request = axios.delete(`${url}/posts/${id}${api_key}`)

  return {
    type: DELETE_POST,
    paylod: request
  }
}
