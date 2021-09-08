import { FetchActions } from "redux/fetchDataActions/actionTypes";

import { PostingStateType } from "../../types";

import * as TYPES from "../actionTypes";

export const initialState: PostingStateType = {
  isLoading: false,
  result: undefined,
  error: undefined,
};

const dataPosting = (
  state = initialState,
  action: FetchActions
): PostingStateType => {
  switch (action.type) {
    case TYPES.POST_DATA_START:
      return {
        ...state,
        isLoading: true,
      };
    case TYPES.POST_DATA_SUCCESS:
      return {
        ...state,
        result: action.payload,
      };
    case TYPES.POST_DATA_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case TYPES.POST_DATA_FINISH:
      return {
        ...state,
        isLoading: false,
      };
    default: {
      return state;
    }
  }
};

export default dataPosting;
