// src/js/store/index.js
import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import articles from "../reducers/articles";
import users from "../reducers/users";
import userInfo from "../reducers/userData";
import articleInfo from "../reducers/articleData";
import commentInfo from "../reducers/commentData";
import comments from "../reducers/comments";

import userAuth from "../reducers/userAuth";

import mySagas from "../sagas/index";

import auth from "../reducers/auth";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    users, articles, comments, userInfo, articleInfo, commentInfo, auth, userAuth,
  }),
  applyMiddleware(sagaMiddleware),
  // rootReducer
);

sagaMiddleware.run(mySagas);
// mySagas.registerWithMiddleware(sagaMiddleware);
export default store;
