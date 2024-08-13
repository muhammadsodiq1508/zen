import React from "react";
import { FaBars } from "react-icons/fa6";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-img">
        <img src="./src/assets/Frame (7).png" alt="" />
        <ul>
          <li>
            <a href="">Personal</a>
          </li>

          <li>
            <a href="">Business</a>
          </li>
        </ul>
      </div>

      <div className="header-link">
        <ul>
          <li>
            <a href="">Zenefits</a>
          </li>
          <li>
            <a href="">Features</a>
          </li>
          <li>
            <a href="">Pricing</a>
          </li>
        </ul>
        <button>Get app</button>
      </div>
      <div className="bars">
        <FaBars />
      </div>
    </div>
  );
};

export default Header;
