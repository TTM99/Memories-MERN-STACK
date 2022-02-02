import { UPDATEPOST, CLEARPOST } from "../constants/postActionTypes";

export const updatePost = (id) => (dispatch) => {
  dispatch({ type: UPDATEPOST, payload: id });
};

export const clearPost = (id) => (dispatch) => {
  dispatch({ type: CLEARPOST, payload: id });
};
