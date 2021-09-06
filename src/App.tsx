import axios from "axios";
import React, { ReactElement, useEffect, useState } from "react";

import Chatbox from "./components/ChatBox";

import { API_URL } from "./constants";

import { InteractionType } from "./types";

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
  useEffect(() => {
    console.log("userFlow", userFlow);
  }, [userFlow]);
  return (
    <div className="App">
      <header className="App-header">
        <Chatbox />
      </header>
    </div>
  );
}

export default App;
