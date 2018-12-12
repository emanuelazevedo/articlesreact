// src/js/actions/index.js
import { ADD_ARTICLE, DELETE_ARTICLE, FETCH_ARTICLES } from "../constants/action-types-articles";
export const addArticle = article => ({ type: ADD_ARTICLE, payload: article });
export const deleteArticle = article => ({ type: DELETE_ARTICLE, payload: article });

export const fetchArticles = () => ({type: FETCH_ARTICLES});
