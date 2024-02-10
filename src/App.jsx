import "./styles.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserListPage from "./UserListPage";
import UserDetailsPage from "./UserDetailsPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<UserListPage />} />
          <Route path="/user/:username" element={<UserDetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
