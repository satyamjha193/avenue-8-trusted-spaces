import React from "react";
import ReactDOM from "react-dom/client";

import {
  RouterProvider,
  createRouter,
} from "@tanstack/react-router";

import { QueryClient } from "@tanstack/react-query";

import { routeTree } from "./routeTree.gen";

const queryClient = new QueryClient();

const router = createRouter({
  routeTree,
  context: {
    queryClient,
  },
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  console.log("APP STARTED");

  return <RouterProvider router={router} />;
}

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element missing");
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);