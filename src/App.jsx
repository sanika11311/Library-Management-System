import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./assets/Home";
import Registration from "./assets/Registration";
import Dashboard from "./assets/Dashboard";
import Login from "./assets/Login";
import Navbar from "./component/Navbar";
import NotFound from "./assets/Notfound";

function App() {

  const [issuedBooks, setIssuedBooks] = useState([]);
  const [allBooks, setAllBooks] = useState([]);

  // Auth
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState("");

  //Title
  useEffect(() => {
    document.title = "Library Management System";
  }, []);

  // LOAD DATA (LocalStorage)
  useEffect(() => {
    const savedIssued = JSON.parse(localStorage.getItem("issuedBooks"));
    const savedAll = JSON.parse(localStorage.getItem("allBooks"));

    if (savedIssued) setIssuedBooks(savedIssued);
    if (savedAll) setAllBooks(savedAll);
  }, []);

  //SAVE DATA
  useEffect(() => {
    localStorage.setItem("issuedBooks", JSON.stringify(issuedBooks));
  }, [issuedBooks]);

  useEffect(() => {
    localStorage.setItem("allBooks", JSON.stringify(allBooks));
  }, [allBooks]);

  //LOGIN PAGE
  if (!isAuthenticated) {
    return (
      <Login
        setIsAuthenticated={setIsAuthenticated}
        setUserRole={setUserRole}
      />
    );
  }

  return (
    <BrowserRouter>

      {/*NAVBAR */}
      <Navbar setIsAuthenticated={setIsAuthenticated} />

      {/*ROUTES */}
      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={
            <Home
              allBooks={allBooks}
              setAllBooks={setAllBooks}
            />
          }
        />

        {/* REGISTRATION */}
        <Route
          path="/registration"
          element={
            <Registration
              issuedBooks={issuedBooks}
              setIssuedBooks={setIssuedBooks}
              userRole={userRole}
              allBooks={allBooks}
            />
          }
        />

        {/* DASHBOARD */}
        <Route
          path="/dashboard"
          element={
            <Dashboard
              issuedBooks={issuedBooks}
              setIssuedBooks={setIssuedBooks}
              userRole={userRole}
              allBooks={allBooks}
            />
          }
        />

        {/*404 PAGE */}
        <Route path="*" element={<NotFound />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;