import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Styled
import reset from "styled-reset";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "@/constants/theme";

// Pages
import HomePage from "@/pages/home-page.tsx";
import ListPage from "@/pages/blog/list-page.tsx";
import DetailPage from "@/pages/blog/detail-page.tsx";
import BlogTemplate from "@/pages/blog/blog-template.tsx";

// Store
import useUiStore from "@/store/ui.store.ts";
import WritePage from "@/pages/blog/write-page.tsx";

// Routes
const routes = createBrowserRouter(
  [
    {
      path: "/",
      element: <HomePage />
    },
    {
      path: "/work",
      // element: <WorkPage />
      element: null
    },
    {
      path: "/blog",
      element: <BlogTemplate />,
      children: [
        { index: true, element: <ListPage /> },
        { path: "detail", element: <DetailPage /> },
        { path: "write", element: <WritePage /> }
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
    font-family: 'Outfit', 'SUITE', 'Noto Sans KR', sans-serif;
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
    font-family: inherit;
    cursor: pointer;
    outline: none;
    border: none;
    background: transparent;
  }

  button:hover {
    outline: none;
    border: none;
  }

  button:focus,
  button:focus-visible {
    outline: none;
    border: none;
  }

  ul,
  ol {
    list-style: none;
  }

  /* other styles */
`;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RootComponent />
  </React.StrictMode>
);

function RootComponent() {
  const isDarkMode = useUiStore((state) => state.isDarkMode);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <RouterProvider router={routes} />
    </ThemeProvider>
  );
}
