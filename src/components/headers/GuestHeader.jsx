import React from "react";
import { Link } from "react-router-dom";

import "./guest_header.css";

function GuestHeader(props) {
  return (
    <ul className="nav mb-3">
      <li className="nav-item">
        <Link className="nav-link active" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/login">Login</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/register">Register</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/search">Search</Link>
      </li>
    </ul>
  );
}

export default GuestHeader;
