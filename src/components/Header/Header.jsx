import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between ">
        <h2 className="text-3xl text-white font-bold">Articale Gellery</h2>
        <Link
          to="/articaleform"
          className="btn btn-active btn-accent font-bold"
        >
          Create Articale
        </Link>
      </div>
      
        <h1 className="text-6xl text-white title-content title-content">Welcome to Article Gallery!</h1>
      
    </div>
  );
};

export default Header;
