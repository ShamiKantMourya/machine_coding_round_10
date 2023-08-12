import React from "react";

import "./Department.css";
// import { inventoryData } from "../../Data/DataBase";
import NavBar from "../../Components/Navbar/NavBar";
import { Link } from "react-router-dom";

const Department = () => {
  return (
    <div className="department">
      <div className="navbar-side">
        <NavBar />
      </div>
      <div className="department-side">
        <Link to="/products">
          <p className="department-text">Kitchen</p>
        </Link>
        <p className="department-text">Clothing</p>
        <p className="department-text">Toys</p>
      </div>
    </div>
  );
};

export default Department;
