import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_ARTICLE, ARTICLE_FETCH_SUCCESS, ARTICLE_FETCH_ERROR } from '../constants/action-types-articles';


function fetchDetail(id){
  console.log(id);
  return fetch('http://tdi-api.test:8080/api/article/'+id).then(response => response.json(), );
}

function* fetchArticle(action){
  const id = action.payload.article;
  try{
    const article = yield call(fetchDetail, id);
    yield put({type: ARTICLE_FETCH_SUCCESS, payload: article});
    console.log('success try catch of one article');
  } catch(e){
    console.log(e);
    yield put({type: ARTICLE_FETCH_ERROR, message: e.message});
  }
}

function* mySagaArticleDetail(){
  console.log('article saga init of one article');
  yield takeLatest(FETCH_ARTICLE, fetchArticle);
}

export default mySagaArticleDetail;
