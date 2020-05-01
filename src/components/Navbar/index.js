import React from "react";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <header className="navbar">
      <img src="/logo.jpeg" className="company-logo" alt="logo"></img>
      <span className="app-title">instapick</span>
    </header>
  );
};

export default Navbar;
