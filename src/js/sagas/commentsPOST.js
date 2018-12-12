import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_COMMENTS, COMMENTS_FETCH_SUCCESS, COMMENTS_FETCH_ERROR, ADD_COMMENT } from '../constants/action-types-comments';

function addCommentPOST(comment){
  console.log('response', JSON.stringify({
    commentText: comment.payload.commentText,
    article_id: comment.payload.article_id,
    user_id: 2,
  }));
  return fetch('http://tdi-api.test:8080/api/comment',{
    method:'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      commentText: comment.payload.commentText,
      article_id: comment.payload.article_id,
      user_id: 2,
    })
  }).then(response => response.json(), );
}

function* addComment(comment){
  console.log('POSTComment', comment);
  try{
    const comments = yield call(addCommentPOST, comment);
    // yield put({type: COMMENTS_FETCH_SUCCESS, payload: comments});
    console.log('success try catch');
  } catch(e){
    console.log(e);
    yield put({type: COMMENTS_FETCH_ERROR, message: e.message});
  }
}

function* mySagaCommentPOST(){
  console.log('comment saga POST');
  yield takeLatest(ADD_COMMENT, addComment);
}

export default mySagaCommentPOST;
