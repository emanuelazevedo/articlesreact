import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_COMMENTS, COMMENTS_FETCH_SUCCESS, COMMENTS_FETCH_ERROR, DELETE_COMMENT } from '../constants/action-types-comments';

function deleteThisComment(id){
  return fetch('http://tdi-api.test:8080/api/comment/'+id,{
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(response => response.json(), );
}

function* deleteComment(action){
  const id = action.payload.id;
  console.log('DELETE', id);
  try{
    const comments = yield call(deleteThisComment, id);
    // yield put({type: COMMENTS_FETCH_SUCCESS, payload: comments});
    console.log('success DELETE');
  } catch(e){
    console.log('Error', e);
    yield put({type: COMMENTS_FETCH_ERROR, message: e.message});
  }
}

function* mySagaCommentDELETE(){
  console.log('comment saga DELETE');
  yield takeLatest(DELETE_COMMENT, deleteComment);
}

export default mySagaCommentDELETE;
