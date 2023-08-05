import "./App.css";
import React, { useEffect } from "react";
import Dashboard from "./Pages/Dashboard";
import Profile from "./Pages/Profile";
import StudentList from "./Components/StudentList";
import { Routes, Route } from "react-router-dom";
import AddStudents from "./Components/AddStudents";
import EditStudent from "./Components/EditStudent";
import NoPage from "./Pages/Nopage";
import { AppState } from "./Context/AppProvider";
import { API } from "./API/api";

function App() {
  return (
    <div className="App" data-theme="dark">
      <Routes>
        <Route exact path="/" element={<Dashboard />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/student/add" element={<AddStudents />} />

        <Route path="/edit/:id" element={<EditStudent />} />

        <Route path="/student/all" element={<StudentList />} />

        <Route path="*" element={<NoPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;



// CREATE - POST - ADD
// READ   - GET - Esisting data
// UPDATE - PUT - data update, add 
// DELETE - DELETE - Delete a data 
