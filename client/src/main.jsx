import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { ThemeProvider } from "@mui/material";
import { CssBaseline } from "@mui/material";
import Theme from "theme/Theme.js";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { PocketProvider } from "contexts/PocketContext.jsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={Theme}>
          <CssBaseline />
            <PocketProvider>
              <App />
            </PocketProvider>
          <ReactQueryDevtools />
        </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
