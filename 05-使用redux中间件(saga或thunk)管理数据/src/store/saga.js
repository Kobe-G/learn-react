import {put, takeEvery} from 'redux-saga/effects';
import {GET_TODO_LEST_ACTION} from './actionTypes';
import {initListAction} from './actionCreator';
import axios from 'axios';

function* getInitList() {
  try {
    const res = yield axios.get('data.json');
    const action = initListAction(res.data);
    yield put(action);
  } catch (e) {
    console.log("json数据请求失败！");
  }

}


function* mySaga() {
  yield takeEvery(GET_TODO_LEST_ACTION, getInitList);
}

export default mySaga;