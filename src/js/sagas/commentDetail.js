import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_COMMENT, COMMENT_FETCH_SUCCESS, COMMENT_FETCH_ERROR } from '../constants/action-types-comments';

function fetchDetail(id){
  console.log(id);
  return fetch('http://tdi-api.test:8080/api/comment/'+id).then(response => response.json(), );
}

function* fetchComment(action){
  const id = action.payload.comment;
  try{
    const comment = yield call(fetchDetail, id);
    yield put({type: COMMENT_FETCH_SUCCESS, payload: comment});
    console.log('success try catch of one comment');
  } catch(e){
    console.log(e);
    yield put({type: COMMENT_FETCH_ERROR, message: e.message});
  }
}

function* mySagaCommentDetail(){
  console.log('comment saga init of one comment');
  yield takeLatest(FETCH_COMMENT, fetchComment);
}

export default mySagaCommentDetail;
