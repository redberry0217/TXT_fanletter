import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import FanletterContextProvider from "context/FanletterContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FanletterContextProvider>
    <App />
  </FanletterContextProvider>
);
