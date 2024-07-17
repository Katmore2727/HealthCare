import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './pages/Login'; 
import Register from './pages/Register';
import Patient from './pages/Patient';
import Doctor from './pages/Doctor';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/login' element={<Login />} />
      <Route exact path='/register' element={<Register />} />
      <Route exact path='/patient' element={<Patient />} />
      <Route exact path='/doctor' element={<Doctor/>} />
    </Routes>
    </BrowserRouter>

  );
}

export default App;
