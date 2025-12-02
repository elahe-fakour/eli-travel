

import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="bg-brandCream min-h-screen">
      <Navbar />
      <main className="pt-24 pb-10">
        
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
};

export default Layout;