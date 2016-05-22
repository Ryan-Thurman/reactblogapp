import {FETCH_POSTS , SINGLE_POST} from '../actions/action_index'

let INITIAL_STATE = { all:[], details: null}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SINGLE_POST:
      return {...state, details: action.payload.data}
    case FETCH_POSTS :
      return {...state, all: action.payload.data}
  }
  return state
}
