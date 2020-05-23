import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const ProductItem = ({ id, name, quantity, price }) => {
  return (
    <div className="Product-Item">
      <span className="Product-Name">{name}</span>
      <label>Product Name</label>
      <span className="Product-Quantity">{quantity}</span>
      <label>Product Quantity</label>
      <span className="Product-Price">
        {Intl.NumberFormat("en-EN", {
          style: "currency",
          currency: "USD"
        }).format(price)}
      </span>
      <label>Product Price</label>
      <div className="Product-Icons">
        <Link to={`/update/${id}`}>
          <button className="Product-Icon" id="update">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
            </svg>
          </button>
        </Link>
        <Link to={`/delete/${id}`}>
          <button className="Product-Icon" id="delete">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              <line x1="10" y1="11" x2="10" y2="17"></line>
              <line x1="14" y1="11" x2="14" y2="17"></line>
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;
