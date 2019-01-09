import { actionTypes } from './index';
import axios from 'axios';

const getCarouselList = data => {
  return {
    type: actionTypes.GET_CAROUSEL_LIST,
    data
  }
}
export const getListAction = () => {
  return dispatch => {
    axios.get('http://127.0.0.1:3001/api/carouselList').then(res => {
      dispatch(getCarouselList(res.data));
    }).catch(() => {
      console.log('error');
    })  
  }
}