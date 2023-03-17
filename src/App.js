import React from "react";
// import UploadButton from "./UploadButton";
// import Button from '@mui/material/Button';
import "./SimpleContainer";
import Header from "./Header";
// import SimpleContainer from "./SimpleContainer";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Contact from "./Contact";
import { Route, Routes } from "react-router-dom";
import UploadAttendance from "./Components/UploadAttendance";
import SelectClass from "./Components/SelectClass";
import SelectOption from "./Components/SelectOption";
import StudentData from "./Components/StudentData";
import StudentDetail from "./Components/StudentDetail";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" exact element={<SignIn />} />
        <Route path="/register" exact element={<SignUp />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/select" exact element={<SelectClass />} />
        <Route path="/upload" exact element={<UploadAttendance />} />
        <Route path="/option" exact element={<SelectOption />} />
        <Route path="/studentDetail" exact element={<StudentDetail />} />
        <Route path="/studentData" exact element={<StudentData />} />


      </Routes>
    </div>
  );
}

export default App;
