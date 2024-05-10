import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { CssBaseline } from "@mui/material";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { PocketProvider } from "contexts/PocketContext.jsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
        <CssBaseline />
        <PocketProvider>
          <App />
        </PocketProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
