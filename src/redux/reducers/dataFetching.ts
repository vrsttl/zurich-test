import { FetchActions } from "redux/fetchDataActions/actionTypes";

import { DataStateType } from "../../types";

import * as TYPES from "../actionTypes";

export const initialState: DataStateType = {
  isLoading: false,
  result: [],
  error: undefined,
};

const dataFetching = (
  state = initialState,
  action: FetchActions
): DataStateType => {
  switch (action.type) {
    case TYPES.FETCH_DATA_START:
      return {
        ...state,
        isLoading: true,
        result: [],
      };
    case TYPES.FETCH_DATA_SUCCESS:
      return {
        ...state,
        result: action.payload,
      };
    case TYPES.FETCH_DATA_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case TYPES.FETCH_DATA_FINISH:
      return {
        ...state,
        isLoading: false,
      };
    default: {
      return state;
    }
  }
};

export default dataFetching;
