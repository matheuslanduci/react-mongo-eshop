import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../services/api";

import "./styles.css";

const Update = () => {
  const { id } = useParams();
  const [values, setValues] = useState({
    _id: "",
    name: "",
    quantity: "",
    price: ""
  });
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    api.get(`products/${id}`).then(response => {
      setValues(response.data);
    });
  }, [id]);

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      api
        .put("/products", values, {
          headers: {
            id: values._id
          }
        })
        .then(() => {
          setSuccess(true);
        });
    } catch (error) {
      setSuccess(false);
      console.log(error);
    }
  };

  return (
    <div className="container" id="update">
      <h1>Update Products</h1>
      {id ? (
        <div>
          <h3>
            You are updating product with NAME {values.name}. Do you want to
            update another product? <Link to="/">Choose one</Link>.
          </h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name..."
              id="name"
              autoComplete="off"
              value={values.name}
              onChange={handleChange("name")}
            />
            <input
              type="number"
              placeholder="Quantity..."
              id="quantity"
              autoComplete="off"
              min="1"
              value={values.quantity}
              onChange={handleChange("quantity")}
            />
            <input
              type="number"
              placeholder="Price..."
              id="price"
              autoComplete="off"
              min="1"
              value={values.price}
              onChange={handleChange("price")}
            />
            <button type="submit">Update product</button>
          </form>
          {success && (
            <div className="submit-success">
              Product {values.name} registered with success!
            </div>
          )}
        </div>
      ) : (
        <>
          <h2>First you need to choose a product to Update!</h2>
          <Link to="/">Choose a product.</Link>
        </>
      )}
    </div>
  );
};

export default Update;
