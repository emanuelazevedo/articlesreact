// src/js/actions/index.js
import { FETCH_COMMENT } from "../constants/action-types-comments";

export const fetchComment = comment => ({ type: FETCH_COMMENT, payload: comment });
