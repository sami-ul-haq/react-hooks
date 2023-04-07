import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import DataContextProvider from "./context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <DataContextProvider>
    <App />
  </DataContextProvider>
);
