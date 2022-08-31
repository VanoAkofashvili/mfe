import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Mount function to start up the app
function mount(el) {
  ReactDOM.render(<App />, el);
}

// Development in isolation
if (process.env.NODE_ENV === "development") {
  const el = document.getElementById("_marketing-dev-root");
  console.log(el);
  if (el) {
    mount(el);
  }
}

// Running in container
export { mount };
