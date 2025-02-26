import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header>
      <NavLink to="/">
        <img src="./src/assets/" alt="logo" />
      </NavLink>
      <Navbar />
    </header>
  );
};

export default Header;
