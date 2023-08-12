import React from "react";

import "./Product.css";
import { inventoryData } from "../../Data/DataBase";
import NavBar from "../../Components/Navbar/NavBar";
import Header from "../../Components/Header/Header";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="products">
      <div className="navbar-side">
        <NavBar />
      </div>
      <div className="product-side">
        <div className="header-box">
          <Header />
        </div>
        <div className="product-data">
          <table>
            <thead>
              <tr className="header-row">
                <th>Image</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Supplier</th>
              </tr>
            </thead>
            {inventoryData?.map((item) => (
              <Link to={`/products/${item.id}`}>
                <tr className="product-data-table" key={item.id}>
                  <td className="image-box">
                    <img src={item.imageUrl} alt="product" />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.price}</td>
                  <td>{item.stock}</td>
                  <td>{item.supplier}</td>
                </tr>
              </Link>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Products;
