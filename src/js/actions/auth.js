// GET AUTH TOKEN
import {FETCH_TOKEN, FETCH_USER, USER_FETCH_SUCCEEDED} from "../constants/action-types-auth";

export const fetchToken = token => ({type: FETCH_TOKEN, payload: token});

export const fetchUserSuccess = userAuth => ({type: USER_FETCH_SUCCEEDED, payload: userAuth});
