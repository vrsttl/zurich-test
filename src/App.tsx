import axios from "axios";
import React, { ReactElement, useEffect, useState } from "react";

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
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
