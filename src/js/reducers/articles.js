// src/js/reducers/index.js
import { ADD_ARTICLE, DELETE_ARTICLE, ARTICLES_FETCH_SUCCESS } from "../constants/action-types-articles";

const initialState = {
  articles: []
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      console.log('criar artigo');
      window.location.reload();
      // return { ...state, articles: [...state.articles, action.payload] };
    case DELETE_ARTICLE:
      console.log('eliminar artigo');
      
      return { ...state, articles: [...state.articles.filter((x) => x !== action.payload)] };
    case ARTICLES_FETCH_SUCCESS:
      console.log('success', action.payload);
      return { ...state, articles: [...state.articles, ...action.payload] };
    default:
      return state;
  }
};

export default rootReducer;
