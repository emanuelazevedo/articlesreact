// src/js/actions/index.js
import { FETCH_ARTICLE } from "../constants/action-types-articles";

export const fetchArticle = article => ({ type: FETCH_ARTICLE, payload: article });
