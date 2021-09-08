import { takeLatest } from "redux-saga/effects";

import * as TYPES from "redux/actionTypes";

import { fetchData, postData } from "./fetchData";

export default function* rootSaga(): any {
  yield takeLatest(TYPES.FETCH_DATA_START, fetchData);
  yield takeLatest(TYPES.POST_DATA_START, postData);
}
