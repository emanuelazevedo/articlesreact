import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_USER, USER_FETCH_SUCCESS, USER_FETCH_ERROR } from '../constants/action-types-users';

function fetchDetail(id){
  console.log(id);
  return fetch('http://tdi-api.test:8080/api/user/'+id).then(response => response.json(), );
}

function* fetchUser(action){
  const id = action.payload.user;
  try{
    const user = yield call(fetchDetail, id);
    yield put({type: USER_FETCH_SUCCESS, payload: user});
    console.log('success try catch of one user');
  } catch(e){
    console.log(e);
    yield put({type: USER_FETCH_ERROR, message: e.message});
  }
}

function* mySagaUserDetail(){
  console.log('user saga init of one user');
  yield takeLatest(FETCH_USER, fetchUser);
}

export default mySagaUserDetail;
