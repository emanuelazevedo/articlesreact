// src/js/actions/index.js
import { FETCH_USER } from "../constants/action-types-users";

export const fetchUser = user => ({ type: FETCH_USER, payload: user });
