// src/js/reducers/index.js
import { USER_FETCH_SUCCESS } from "../constants/action-types-users";

const initialState = {
  userInfo: []
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // case ADD_USER:
    //   console.log('criar utilizador');
    //   return { ...state, users: [...state.users, action.payload] };
    // case DELETE_USER:
    //   console.log('eliminar utilizador');
    //   return { ...state, users: [...state.users.filter((x) => x !== action.payload)] };
    case USER_FETCH_SUCCESS:
      console.log('Success info user', action.payload);
      return { ...state, userInfo: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
