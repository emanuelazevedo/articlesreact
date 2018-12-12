// src/js/reducers/index.js
import { ARTICLE_FETCH_SUCCESS } from "../constants/action-types-articles";

const initialState = {
  articleInfo: []
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // case ADD_ARTICLE:
    //   console.log('criar utilizador');
    //   return { ...state, articles: [...state.articles, action.payload] };
    // case DELETE_ARTICLE:
    //   console.log('eliminar utilizador');
    //   return { ...state, articles: [...state.articles.filter((x) => x !== action.payload)] };
    case ARTICLE_FETCH_SUCCESS:
      console.log('Success info article', action.payload);
      return { ...state, articleInfo: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
