import React from "react";
import { useParams } from "react-router-dom";

import NavBar from "../Navbar/NavBar";
import "./ProductDetail.css";
import { inventoryData } from "../../Data/DataBase";

const ProductDetail = () => {
  const { id } = useParams();
  const filterProduct = inventoryData?.find(
    (product) => product.id === Number(id)
  );
  
  const {
    name,
    imageUrl,
    department,
    description,
    price,
    stock,
    sku,
    supplier,
    delivered,
  } = filterProduct;
  return (
    <div className="filterProduct">
      <div className="navbar-side">
        <NavBar />
      </div>
      <div className="filterProduct-side">
        <div className="filter-product-details">
          <div className="product-name">
            <h3>{name}</h3>
          </div>
          <div className="product-img-box">
            <img src={imageUrl} alt="product" />
          </div>
          <div className="product-detail">
            <p className="text">Price: </p>
            <p className="data">{price}</p>
          </div>
          <div className="product-detail">
            <p className="text">Stock: </p>
            <p className="data">{stock}</p>
          </div>
          <div className="product-detail">
            <p className="text">Supplier: </p>
            <p className="data">{supplier}</p>
          </div>
          <div className="product-detail">
            <p className="text">Department: </p>
            <p className="data">{department}</p>
          </div>
          <div className="product-detail">
            <p className="text">SKU: </p>
            <p className="data">{sku}</p>
          </div>
          <div className="product-detail">
            <p className="text">Delivered: </p>
            <p className="data">{delivered}</p>
          </div>
          <div className="product-detail">
            <p className="text">Description: </p>
            <p className="data">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
