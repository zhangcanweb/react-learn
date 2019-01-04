import { actionTypes } from './index';
import axios from 'axios';
import { fromJS } from 'immutable';

const getInfoList = data => {
  return {
    type: actionTypes.INFO_LIST,
    data: fromJS(data),
    totalPages: Math.ceil(data.length / 10)
  }
}
export const searchFocus = () => {
  return {
    type: actionTypes.SEARCH_FOCUS
  }
}
export const searchBlur = () => {
  return {
    type: actionTypes.SEARCH_BLUR
  }
}
export const getInfoAction = () => {
  return dispatch => {
    axios.get('http://127.0.0.1:3001/api/headerList').then(res => {
      dispatch(getInfoList(res.data))
    }).catch(() => {
      console.log('error')
    })
  }
}
export const mouseIn = () => {
  return {
    type: actionTypes.MOUSE_IN
  }
}
export const mouseOut = () => {
  return {
    type: actionTypes.MOUSE_OUT
  }
}
export const changePage = page => {
  return {
    type: actionTypes.CHANGE_PAGE,
    page
  }
}