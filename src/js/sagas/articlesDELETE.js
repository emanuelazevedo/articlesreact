import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_ARTICLES, ARTICLES_FETCH_SUCCESS, ARTICLES_FETCH_ERROR, DELETE_ARTICLE } from '../constants/action-types-articles';

function deleteThisArticle(id){
  return fetch('http://tdi-api.test:8080/api/article/'+id,{
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(response => response.json(), );
}

function* deleteArticle(action){
  const id = action.payload.id;
  console.log('DELETE', id);
  try{
    const articles = yield call(deleteThisArticle, id);
    // yield put({type: ARTICLES_FETCH_SUCCESS, payload: articles});
    console.log('success DELETE');
  } catch(e){
    console.log('Error', e);
    yield put({type: ARTICLES_FETCH_ERROR, message: e.message});
  }
}

function* mySagaArticleDELETE(){
  console.log('article saga DELETE');
  yield takeLatest(DELETE_ARTICLE, deleteArticle);
}

export default mySagaArticleDELETE;
