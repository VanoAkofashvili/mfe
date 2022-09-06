import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory, createBrowserHistory } from "history";
import App from "./App";

// Mount function to start up the app
function mount(el, { onNavigate, defaultHistory, initialPath, onSignIn }) {
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    });

  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(<App history={history} onSignIn={onSignIn} />, el);

  return {
    onParentNavigate({ pathname: nextPathname }) {
      console.log("onParentNavigate");
      const { pathname } = history.location;
      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
}

// Development in isolation
if (process.env.NODE_ENV === "development") {
  const el = document.getElementById("_auth-dev-root");

  if (el) {
    mount(el, { defaultHistory: createBrowserHistory() });
  }
}

// Running in container
export { mount };
