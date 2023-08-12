import React from "react";

import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/">Dashboard</Link>
      <Link to="/department">Departments</Link>
      <Link to="/products">Products</Link>
    </div>
  );
};

export default NavBar;
