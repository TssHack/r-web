import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; // فایل استایل‌های عمومی
import App from "./App"; // کامپوننت اصلی اپلیکیشن
import { BrowserRouter as Router } from "react-router-dom"; // برای استفاده از مسیریابی
import { ChakraProvider } from "@chakra-ui/react"; // برای استفاده از کامپوننت‌های UI مدرن

// رندر کردن اپلیکیشن داخل div با id root
ReactDOM.render(
  <ChakraProvider>
    <Router>
      <App />
    </Router>
  </ChakraProvider>,
  document.getElementById("root")
);
