// src/js/reducers/index.js
import { ADD_COMMENT, DELETE_COMMENT, COMMENTS_FETCH_SUCCESS } from "../constants/action-types-comments";

const initialState = {
  comments: []
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      console.log('criar artigo');
      window.location.reload();
      // return { ...state, comments: [...state.comments, action.payload] };
    case DELETE_COMMENT:
      console.log('eliminar artigo');
      return { ...state, comments: [...state.comments.filter((x) => x !== action.payload)] };
    case COMMENTS_FETCH_SUCCESS:
      console.log('success', action.payload);
      return { ...state, comments: [...state.comments, ...action.payload] };
    default:
      return state;
  }
};

export default rootReducer;
