// src/js/actions/index.js
import { ADD_COMMENT, DELETE_COMMENT, FETCH_COMMENTS } from "../constants/action-types-comments";
export const addComment = comment => ({ type: ADD_COMMENT, payload: comment });
export const deleteComment = comment => ({ type: DELETE_COMMENT, payload: comment });

export const fetchComments = () => ({type: FETCH_COMMENTS});
