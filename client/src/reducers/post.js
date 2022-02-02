import { UPDATEPOST, CLEARPOST } from "../constants/postActionTypes";

export default (post = null, action) => {
  switch (action.type) {
    case UPDATEPOST:
      return action.payload;
    case CLEARPOST:
      return action.payload;
    default:
      return post;
  }
};
