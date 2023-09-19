import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// # Styled
import "./index.css";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./constants/theme";

// # Pages
import HomePage from "./pages/HomePage";
import WorkPage from "./pages/WorkPage";
import ListPage from "./pages/blog/ListPage";
import DetailPage from "./pages/blog/DetailPage";
import BlogTemplate from "./pages/blog/BlogTemplate";

// # Routes
const routes = createBrowserRouter(
  [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/work",
      element: <WorkPage />,
    },
    {
      path: "/blog",
      element: <BlogTemplate />,
      children: [
        { path: "list", element: <ListPage /> },
        { path: "detail", element: <DetailPage /> },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <RouterProvider router={routes} />
    </ThemeProvider>
  </React.StrictMode>
);
