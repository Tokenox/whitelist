import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import WagmiConfig from "./components/WagmiConfig.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <WagmiConfig>
      <App />
    </WagmiConfig>
  </React.StrictMode>
);
