// src/js/actions/index.js
import { ADD_USER, DELETE_USER, FETCH_USERS } from "../constants/action-types-users";
export const addUser = user => ({ type: ADD_USER, payload: user });
export const deleteUser = user => ({ type: DELETE_USER, payload: user });

export const fetchUsers = () => ({type: FETCH_USERS});
