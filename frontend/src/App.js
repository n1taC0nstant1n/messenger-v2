import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/messenger/login" element={<Login />} />
          <Route path="/messenger/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
