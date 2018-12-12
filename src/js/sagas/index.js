import mySagaUser from './users';
import mySagaComment from './comments';
import mySagaArticle from './articles';
import mySagaUserDetail from './userDetail';
import mySagaArticleDetail from './articleDetail';
import mySagaCommentDetail from './commentDetail';
import mySagaArticlePOST from './articlesPOST';
import mySagaArticleDELETE from './articlesDELETE';
import mySagaCommentPOST from './commentsPOST';
import mySagaCommentDELETE from './commentsDELETE';


import tokenSaga from './auth';


import { fork } from 'redux-saga/effects';


function* rootSaga() {
  yield [
    fork(mySagaUser),
    fork(mySagaArticle),
    fork(mySagaComment),
    fork(mySagaUserDetail),
    fork(mySagaArticleDetail),
    fork(mySagaCommentDetail),
    fork(mySagaArticlePOST),
    fork(mySagaArticleDELETE),
    fork(mySagaCommentPOST),
    fork(mySagaCommentDELETE),

    fork(tokenSaga),
  ]
}

export default rootSaga;
