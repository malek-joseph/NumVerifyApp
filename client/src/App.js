import { Route, Routes } from 'react-router-dom'
import React, { useEffect } from "react";


import Login from './pages/Login'
import Search from './pages/Search'



const App = () => {

  // We use useEffect to check firebase auth state
  // useEffect(() => {

  // }, []);



  return (
    <>
      {/* The toast container shows the client a notification with a message of our own */}
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      Hello
    </>

  );
}

export default App;