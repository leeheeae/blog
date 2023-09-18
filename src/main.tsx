import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Styled
import "./index.css";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./constants/theme";

// Pages
import HomePage from "./pages/HomePage";
import WorkPage from "./pages/WorkPage";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/work",
      element: <WorkPage />,
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
