import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/routes/App";
import Resume from "./components/Resume";
import { createHashRouter, HashRouter } from "react-router-dom";
import RootLayOut from "./components/routes/RootLayout";
import Works from "./components/Works";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import About from "./components/About";
import AboutComment from "./components/AboutComment";

const router = createHashRouter([
  {
    path: "/",
    element: <RootLayOut />,
    children: [
      { path: "/", element: <App /> },
      { path: "/resume", element: <Resume /> },
      { path: "/works", element: <Works /> },
      { path: "/skills", element: <Skills /> },
      { path: "/achievements", element: <Achievements /> },
      { path: "/about", element: <About /> },
      { path: "/about/comment", element: <AboutComment /> },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter type="noslash" router={router} />
  </React.StrictMode>
);
