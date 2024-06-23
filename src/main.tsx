import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import WagmiConfig from "./components/WagmiConfig.tsx";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <WagmiConfig>
      <ToastContainer draggable={true} />
      <App />
    </WagmiConfig>
  </React.StrictMode>
);
