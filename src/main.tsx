import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// # Styled
import "./index.css";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { lightTheme } from "./constants/theme";

// # Pages
import HomePage from "./pages/HomePage";
import WorkPage from "./pages/WorkPage";
import ListPage from "./pages/blog/ListPage";
import DetailPage from "./pages/blog/DetailPage";
import BlogTemplate from "./pages/blog/BlogTemplate";
import reset from "styled-reset";

// # Routes
const routes = createBrowserRouter(
  [
    {
      path: "/",
      element: <HomePage />
    },
    {
      path: "/work",
      element: <WorkPage />
    },
    {
      path: "/blog",
      element: <BlogTemplate />,
      children: [
        { path: "list", element: <ListPage /> },
        { path: "detail", element: <DetailPage /> }
      ]
    }
  ],
  {
    basename: import.meta.env.BASE_URL
  }
);

// Global Style
const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, html {
    width: 100%;
    height: 100%;
    font-family: 'Outfit', 'Noto Sans KR', sans-serif;
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }

  a:hover,
  a:focus,
  a:active {
    color: inherit;
  }

  button {
    border-radius: 8px;
    font-family: inherit;
    cursor: pointer;
    outline: none;
  }
  
  ul,
  ol {
    list-style: none;
  }

  /* other styles */
`;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={lightTheme}>
      <RouterProvider router={routes} />
    </ThemeProvider>
  </React.StrictMode>
);
