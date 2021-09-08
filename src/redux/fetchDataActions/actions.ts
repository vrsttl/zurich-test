import * as TYPES from "redux/actionTypes";
import { InteractionType } from "types";

import { FetchActions, PostDataPayloadType } from "./actionTypes";

export function fetchDataRequest(payload: string): FetchActions {
  return {
    type: TYPES.FETCH_DATA_START,
    payload,
  };
}

export function fetchDataFlowStart(): FetchActions {
  return {
    type: TYPES.FETCH_DATA_REQUEST,
    payload: {},
  };
}

export function fetchDataFlowSuccess(payload: InteractionType[]): FetchActions {
  return {
    type: TYPES.FETCH_DATA_SUCCESS,
    payload,
  };
}

export function fetchDataFlowError(payload: unknown): FetchActions {
  return {
    type: TYPES.FETCH_DATA_ERROR,
    payload,
  };
}

export function fetchDataFlowFinish(): FetchActions {
  return {
    type: TYPES.FETCH_DATA_FINISH,
    payload: {},
  };
}

export function postDataRequest(payload: PostDataPayloadType): FetchActions {
  return {
    type: TYPES.POST_DATA_START,
    payload,
  };
}

export function postDataFlowStart(): FetchActions {
  return {
    type: TYPES.POST_DATA_REQUEST,
    payload: {},
  };
}

export function postDataFlowSuccess(payload: string): FetchActions {
  return {
    type: TYPES.POST_DATA_SUCCESS,
    payload,
  };
}

export function postDataFlowError(payload: unknown): FetchActions {
  return {
    type: TYPES.POST_DATA_ERROR,
    payload,
  };
}

export function postDataFlowFinish(): FetchActions {
  return {
    type: TYPES.POST_DATA_FINISH,
    payload: {},
  };
}
