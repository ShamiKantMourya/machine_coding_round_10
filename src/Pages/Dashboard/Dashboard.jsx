import React from "react";
import NavBar from "../../Components/Navbar/NavBar";

import { inventoryData } from "../../Data/DataBase";
import "./Dashboard.css";

const Dashboard = () => {
  
  const lowStock = inventoryData.filter((item) => item.stock <= 10);

  return (
    <div className="dashboard">
      <div className="navbar-side">
        <NavBar />
      </div>
      <div className="dashboard-side">
        <div className="total-stock">
          <p className="total-stock-length">203</p>
          <p className="stock-quantity-text">Total Stock</p>
        </div>
        <div className="total-delivered">
        <p className="total-delivered-length">77</p>
          <p className="deliver-quantity-text">Total Delivered</p>
        </div>
        <div className="low-stock-item">
          <p className="lowStockLength">{lowStock.length}</p>
          <p className="low-stock-items-text">Low Stock Items</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
