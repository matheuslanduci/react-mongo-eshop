import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../services/api";

import "./styles.css";

const Delete = () => {
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

  const handleDelete = event => {
    event.preventDefault();
    try {
      api
        .delete("products", {
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
    <div className="container" id="delete">
      <h1>Delete Products</h1>
      {id ? (
        <div>
          <h2>
            Are you sure that you want to delete item {values.name} with ID = "
            {id}
            "?
          </h2>
          <form>
            <button onClick={handleDelete}>Delete</button>
            <Link to="/">Choose another.</Link>
          </form>
          {success && (
            <div className="submit-success">
              Product {values.name} was deleted with success!
            </div>
          )}
        </div>
      ) : (
        <>
          <h2>First you need to choose a product to Delete!</h2>
          <Link to="/">Choose a product.</Link>
        </>
      )}
    </div>
  );
};

export default Delete;
