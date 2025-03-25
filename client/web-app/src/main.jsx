import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import App from "./App.jsx";
import fetchTrendingData from "./action/fetchTrendingData.js";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: fetchTrendingData,
    },
  },
});
createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <StrictMode>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </StrictMode>
    </BrowserRouter>
  </QueryClientProvider>
);
