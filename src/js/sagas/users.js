import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_USERS, USERS_FETCH_SUCCESS, USERS_FETCH_ERROR } from '../constants/action-types-users';

function fetchAll(){
  return fetch('http://tdi-api.test:8080/api/user').then(response => response.json(), );
}

function* fetchUsers(){
  try{

    const users = yield call(fetchAll);
    yield put({type: USERS_FETCH_SUCCESS, payload: users});
    console.log('success try catch of all users');
  } catch(e){
    console.log(e);
    yield put({type: USERS_FETCH_ERROR, message: e.message});
  }
}

function* mySagaUser(){
  console.log('user saga init of all users');
  yield takeLatest(FETCH_USERS, fetchUsers);
}

export default mySagaUser;
