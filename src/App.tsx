import React from 'react';
import './App.css';
import { RelayEnvironmentProvider } from "@umk-stat/statistic-client-relay";
import { System } from "@umk-stat/statistic-client-components";
import { WS_URL, URL } from "./config";

function App(): JSX.Element {
  return (
    <RelayEnvironmentProvider socketUrl={WS_URL} apiUrl={URL}>
      <React.Suspense fallback="loading...">
        <System />
      </React.Suspense>
    </RelayEnvironmentProvider>
  )
}

export default App;
