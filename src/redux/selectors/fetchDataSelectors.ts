import { createSelector } from "reselect";

import { ApplicationState } from "../../types";

const flowData = (state: ApplicationState) => state.dataFetching;

export const getFlowData = createSelector(flowData, (data) => data.result);

export const flowDataLoading = createSelector(
  flowData,
  (data) => data.isLoading
);
