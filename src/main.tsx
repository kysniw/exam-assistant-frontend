import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.tsx'
// import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout.tsx";
import HomePage from "./pages/HomePage.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import ExampleTestPage from "./pages/ExampleTestPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/example",
        element: <ExampleTestPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
