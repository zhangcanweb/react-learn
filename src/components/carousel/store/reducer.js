import { fromJS } from 'immutable';
import { actionTypes } from './index';
const defaultState = fromJS({
  list: []
})

export default (state=defaultState, action) => {
  if (action.type === actionTypes.GET_CAROUSEL_LIST ) {
    return state.set('list', fromJS(action.data))
  }
  return state
}
