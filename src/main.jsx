import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";  // ตรวจสอบว่า path นี่ถูกต้อง
import "./styles.scss";  // ถ้าใช้ SCSS

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

