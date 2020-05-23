import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./styles.css";

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="App-sidebar">
      <h1>eShop</h1>
      <h2>Management</h2>
      <div className="App-menu">
        <span>Products</span>
        <nav className="Column-links">
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            List all
          </Link>
          <Link
            to="/register"
            className={location.pathname === "/register" ? "active" : ""}
          >
            Register
          </Link>
          <Link
            to="/update"
            className={location.pathname.startsWith("/update") ? "active" : ""}
          >
            Update
          </Link>
          <Link
            to="/delete"
            className={location.pathname.startsWith("/delete") ? "active" : ""}
          >
            Delete
          </Link>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
