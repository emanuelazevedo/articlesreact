// src/js/reducers/index.js
import { COMMENT_FETCH_SUCCESS } from "../constants/action-types-comments";

const initialState = {
  commentInfo: []
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // case ADD_COMMENT:
    //   console.log('criar utilizador');
    //   return { ...state, comments: [...state.comments, action.payload] };
    // case DELETE_COMMENT:
    //   console.log('eliminar utilizador');
    //   return { ...state, comments: [...state.comments.filter((x) => x !== action.payload)] };
    case COMMENT_FETCH_SUCCESS:
      console.log('Success info comment', action.payload);
      return { ...state, commentInfo: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
