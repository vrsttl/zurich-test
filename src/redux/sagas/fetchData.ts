import axios, { AxiosResponse } from "axios";
import { put, call } from "redux-saga/effects";

import { FetchAction } from "redux/fetchDataActions/actionTypes";

import {
  fetchDataFlowStart,
  fetchDataFlowSuccess,
  fetchDataFlowError,
  fetchDataFlowFinish,
  postDataFlowStart,
  postDataFlowSuccess,
  postDataFlowError,
  postDataFlowFinish,
} from "redux/fetchDataActions/actions";

export function* fetchData({
  payload,
}: FetchAction<"FETCH_DATA_START">): Generator<any, any, any> {
  try {
    yield put(fetchDataFlowStart());
    const { data }: AxiosResponse<any> = yield call(() => axios.get(payload));
    yield put(fetchDataFlowSuccess(data.result));
  } catch (error) {
    yield put(fetchDataFlowError(true));
  } finally {
    yield put(fetchDataFlowFinish());
  }
}

export function* postData({
  payload,
}: FetchAction<"POST_DATA_START">): Generator<any, any, any> {
  const { url, data } = payload;
  try {
    yield put(postDataFlowStart());
    const { status } = yield call(() => axios.post(url, data));
    yield put(postDataFlowSuccess(status));
  } catch (error) {
    yield put(postDataFlowError(error));
  } finally {
    yield put(postDataFlowFinish());
  }
}
