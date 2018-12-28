import { put, takeEvery } from 'redux-saga/effects';
import { initListAction } from './actionCreator';
import { GET_LIST_ACTION } from './actionTypes';
import axios from 'axios';

function* getInitList () {
  const res = yield axios('http://127.0.0.1:3001');
  const action =  initListAction(res.data);
  yield put(action);
}
function* mySaga() {
  yield takeEvery(GET_LIST_ACTION, getInitList);
}

export default mySaga;