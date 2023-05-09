import React from "react";
import { NavLink } from "react-router-dom";
// import { Form, FormControl, Button } from "react-bootstrap";
import "./NavBar.css";

function Navbar() {
  return (
    <div>
      <div className="topnav-bt d-flex ">
        <div className="container">
          <NavLink to="/" activeClassName="active" exact={true}>
            Home
          </NavLink>
          <NavLink to="/login" activeClassName="active">
            Login
          </NavLink>
          <NavLink to="/register/student" activeClassName="active">
            SignUp
          </NavLink>
          <NavLink to="/user/edit-profile" activeClassName="active">
            User Profile
          </NavLink>
        </div>
        <div class="input-group rounded" id="input-wrap">
          <input
            type="search"
            id="input"
            class="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
