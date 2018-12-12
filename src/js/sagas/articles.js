import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_ARTICLES, ARTICLES_FETCH_SUCCESS, ARTICLES_FETCH_ERROR } from '../constants/action-types-articles';

function fetchAll(){
  return fetch('http://tdi-api.test:8080/api/article').then(response => response.json(), );
}

function* fetchArticles(){
  try{
    const articles = yield call(fetchAll);
    yield put({type: ARTICLES_FETCH_SUCCESS, payload: articles});
    console.log('success try catch');
  } catch(e){
    console.log(e);
    yield put({type: ARTICLES_FETCH_ERROR, message: e.message});
  }
}

function* mySagaArticle(){
  console.log('article saga init');
  yield takeLatest(FETCH_ARTICLES, fetchArticles);
}

export default mySagaArticle;
