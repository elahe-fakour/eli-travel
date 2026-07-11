import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout"; 
import HomePage from "./pages/HomePage";
import AboutMe from "./pages/AboutMe";
import Videos from "./pages/Videos";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          
         
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} /> 

            <Route path="about" element={<AboutMe />} />
            <Route path="videos" element={<Videos />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
            
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />

           
          </Route>

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
