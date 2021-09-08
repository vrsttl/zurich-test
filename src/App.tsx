import React, { ReactElement, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Chatbox from "components/ChatBox";

import { fetchDataRequest } from "redux/fetchDataActions/actions";
import { getFlowData } from "redux/selectors/fetchDataSelectors";
import { InteractionType } from "types";

import { API_URL } from "./constants";

function App(): ReactElement<HTMLDivElement> {
  const [userFlow, setUserFlow] = useState<InteractionType[] | null>(null);
  const dispatch = useDispatch();
  const flowData = useSelector(getFlowData);

  useEffect(() => {
    dispatch(fetchDataRequest(API_URL));
  }, [dispatch]);

  useEffect(() => {
    flowData && setUserFlow(flowData);
  }, [flowData]);

  return (
    <div className="App">
      <header className="App-header">
        <Chatbox flow={userFlow} />
      </header>
    </div>
  );
}

export default App;
