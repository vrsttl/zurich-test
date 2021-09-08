import { DBItemType, InteractionType } from "types";

import * as TYPES from "../actionTypes";

type Actions = {
  [TYPES.FETCH_DATA_START]: string;
  [TYPES.FETCH_DATA_REQUEST]: Record<string, never>;
  [TYPES.FETCH_DATA_SUCCESS]: InteractionType[];
  [TYPES.FETCH_DATA_ERROR]: unknown;
  [TYPES.FETCH_DATA_FINISH]: Record<string, never>;

  [TYPES.POST_DATA_START]: PostDataPayloadType;
  [TYPES.POST_DATA_REQUEST]: Record<string, never>;
  [TYPES.POST_DATA_SUCCESS]: 204 | 400;
  [TYPES.POST_DATA_ERROR]: unknown;
  [TYPES.POST_DATA_FINISH]: Record<string, never>;
};

export type PostDataPayloadType = {
  url: string;
  data: DBItemType[];
};

export type FetchAction<T extends keyof Actions> = {
  type: T;
  payload: Actions[T];
};

export type FetchActions = {
  [A in keyof Actions]: FetchAction<A>;
}[keyof Actions];
