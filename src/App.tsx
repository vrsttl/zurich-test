import axios from "axios";
import React, { ReactElement, useEffect, useState } from "react";

import Chatbox from "components/ChatBox";

import { InteractionType } from "types";

import { API_URL } from "./constants";

function App(): ReactElement<HTMLDivElement> {
  const [userFlow, setUserFlow] = useState<InteractionType[] | null>(null);
  useEffect(() => {
    const getFlow = async () => {
      const fetchedUserFlow = (await axios.get(API_URL)).data
        .result as InteractionType[];
      setUserFlow(fetchedUserFlow);
    };
    getFlow();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <Chatbox flow={userFlow} />
      </header>
    </div>
  );
}

export default App;
