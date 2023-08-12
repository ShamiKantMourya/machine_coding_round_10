import React from "react";

import "./Header.css";

const Header = () => {
  return (
    <div className="product-header">
      <div className="header-text">
        <h3>Product</h3>
      </div>
      <div className="select-field">
        <select>
          <option>All Departments</option>
          <option>Kitchen</option>
          <option>Clothing</option>
          <option>Toys</option>
        </select>
      </div>
      <div className="low-stock-field">
        <input type="checkbox" />
        <p>Low stock items</p>
      </div>
      <div className="sort-by-name">
        <select>
          <option>Name</option>
          <option>Price</option>
          <option>Stock</option>
        </select>
      </div>
      <div className="create-product">
        <button className="create-product-btn">New</button>
      </div>
    </div>
  );
};

export default Header;
