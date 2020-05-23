import React, { useState, useEffect } from "react";
import api from "../../services/api";

import "./styles.css";

import ProductItem from "../../components/ProductItem";

const ListAll = () => {
  const [searchValue, setSearchValue] = useState("");
  const [totalProducts, setTotalProducts] = useState(0);
  const [products, setProducts] = useState([]);

  const handleChange = event => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    const loadProducts = async () => {
      api
        .get(`http://localhost:3334/products?q=${searchValue}`)
        .then(response => {          
          setTotalProducts(response.headers["x-total-count"]);
          setProducts(response.data);
        });
    };

    loadProducts();
  }, [searchValue]);

  useEffect(() => {
    const input = document.querySelector("#product-search");
    const box = document.querySelector(".Product-Search-Box");

    input.addEventListener("focus", function () {
      box.classList.toggle("focus");
    });
    input.addEventListener("blur", function () {
      box.classList.toggle("focus");
    });
  }, []);

  return (
    <div className="container" id="list-all">
      <h1>All products</h1>
      <span>Total items: {totalProducts}</span>
      <div className="Product-Search">
        <input
          type="text"
          placeholder="Filter products..."
          id="product-search"
          autoComplete="off"
          value={searchValue}
          onChange={handleChange}
        />
        <div className="Product-Search-Box">
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
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>
      </div>
      <span className="products-list">Products ({products.length})</span>
      <div className="Product-Grid">
        {products.map(prod => (
          <ProductItem
            key={prod._id}
            id={prod._id}
            name={prod.name}
            price={prod.price}
            quantity={prod.quantity}
          />
        ))}
      </div>
    </div>
  );
};

export default ListAll;
