import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Styled
import reset from "styled-reset";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "@/constants/theme";

// Pages
import Home_page from "@/pages/home_page.tsx";
import List_page from "@/pages/blog/list_page.tsx";
import Detail_page from "@/pages/blog/detail_page.tsx";
import Blog_template from "@/pages/blog/blog_template.tsx";

// Store
import useUiStore from "@/store/ui.store.ts";

// Routes
const routes = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home_page />
    },
    {
      path: "/work",
      // element: <WorkPage />
      element: null
    },
    {
      path: "/blog",
      element: <Blog_template />,
      children: [
        { path: "list", element: <List_page /> },
        { path: "detail", element: <Detail_page /> }
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
    font-family: 'SUITE', 'Outfit', 'Noto Sans KR', sans-serif;
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
    border: inherit;
  }
  
  button:focus,
  button:focus-visible {
    border: inherit;
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
