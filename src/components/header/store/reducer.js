import { actionTypes } from './index';
import { fromJS } from 'immutable';
const defaultState = fromJS({
  focused: false,
  list: [],
  totalPages: 1,
  page: 1,
  mouseIn: false
})

export default (state=defaultState, action) => {
  if (action.type === actionTypes.SEARCH_FOCUS) {
    return state.set('focused', true);
  }
  if (action.type === actionTypes.SEARCH_BLUR) {
    return state.set('focused', false);
  }
  if (action.type === actionTypes.INFO_LIST) {
    return state.merge({
      list: action.data,
      totalPages: action.totalPages
    })
  }
  if (action.type === actionTypes.MOUSE_IN) {
    return state.set('mouseIn', true)
  }
  if (action.type === actionTypes.MOUSE_OUT) {
    return state.set('mouseIn', false)
  }
  if (action.type === actionTypes.CHANGE_PAGE) {
    return state.set('page', action.page)
  }
  return state
}