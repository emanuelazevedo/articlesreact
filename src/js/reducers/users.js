// src/js/reducers/index.js
import { ADD_USER, DELETE_USER, USERS_FETCH_SUCCESS } from "../constants/action-types-users";

const initialState = {
  users: []
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      console.log('criar utilizador');
      return { ...state, users: [...state.users, action.payload] };
    case DELETE_USER:
      console.log('eliminar utilizador');
      return { ...state, users: [...state.users.filter((x) => x !== action.payload)] };
    case USERS_FETCH_SUCCESS:
      console.log('success all users', action.payload);
      return { ...state, users: [...state.users, ...action.payload] };
    default:
      return state;
  }
};

export default rootReducer;
