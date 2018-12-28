import {INPUT_CHANGE_VALUE, LIST_ADD_ITEM, DELETE_ITEM,INIT_LIST_ACTION} from './actionTypes';
import axios from 'axios';
export const getHandleInput = value => (
  {
    type: INPUT_CHANGE_VALUE,
    value
  }
)
export const getHandleBtn = () => (
  {
    type: LIST_ADD_ITEM,
  }
)
export const getHandleItem = index => (
  {
    type: DELETE_ITEM,
    index
  }
)
export const initListAction = data => {
  return {
    type: INIT_LIST_ACTION,
    data
  }
}
export const getListAction = () => {
  return dispatch => {
    axios.get('http://127.0.0.1:3001').then(res => {
      const action = initListAction(res.data);
      dispatch(action);
    })
  }
}