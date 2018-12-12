import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_COMMENTS, COMMENTS_FETCH_SUCCESS, COMMENTS_FETCH_ERROR } from '../constants/action-types-comments';

function fetchAll(){
  return fetch('http://tdi-api.test:8080/api/comment').then(response => response.json(), );
}

function* fetchComments(){
  try{
    const comments = yield call(fetchAll);
    yield put({type: COMMENTS_FETCH_SUCCESS, payload: comments});
    console.log('success try catch');
  } catch(e){
    console.log(e);
    yield put({type: COMMENTS_FETCH_ERROR, message: e.message});
  }
}

function* mySagaComment(){
  console.log('comment saga init');
  yield takeLatest(FETCH_COMMENTS, fetchComments);
}

export default mySagaComment;
