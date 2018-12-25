import {INPUT_CHANGE_VALUE, LIST_ADD_ITEM, DELETE_ITEM} from './actionTypes';

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