import React, { useState } from "react";
import api from "../../services/api";

import "./styles.css";

const Register = () => {
  const [values, setValues] = useState({
    name: "",
    quantity: "",
    price: ""
  });
  const [success, setSuccess] = useState(false);

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    try {
      api.post("products", values).then(() => {
        setSuccess(true);
      });
    } catch (error) {
      setSuccess(false);
      console.log(error);
    }
  };

  return (
    <div className="container" id="register">
      <h1>Register products</h1>
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
        <button type="submit">Register product</button>
      </form>
      {success && (
        <div className="submit-success">
          Product {values.name} registered with success!
        </div>
      )}
    </div>
  );
};

export default Register;
