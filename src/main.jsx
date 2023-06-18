import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { DataProvider } from "./context/data-context.jsx";
import { HabitProvider } from "./context/habit-context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <HabitProvider>
      <DataProvider>
        
          <App />
     
      </DataProvider>
      </HabitProvider>
    </BrowserRouter>
  </React.StrictMode>
);
