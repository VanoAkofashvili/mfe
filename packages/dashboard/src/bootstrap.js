import { createApp } from "vue";
import Dashboard from "./components/Dashboard.vue";

// Mount function to start up the app
function mount(el) {
  const app = createApp(Dashboard);
  app.mount(el);
}

// Development in isolation
if (process.env.NODE_ENV === "development") {
  const el = document.getElementById("_dashboard-dev-root");

  if (el) {
    mount(el);
  }
}

// Running in container
export { mount };
