import React, {Component} from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.png";
import { Button, Navbar , Nav, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const options = {
  burgerColorHover: "#eb4034",
  logo,
  logoWidth: "20vmax",
  navColor1: "white",
  logoHoverSize: "10px",
  logoHoverColor: "#eb4034",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "1.3vmax",
  link1Color: "rgba(35, 35, 35,0.8)",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#eb4034",
  link1Margin: "1vmax",
  profileIconUrl: "/login",
  profileIconColor: "rgba(35, 35, 35,0.8)",
  searchIconColor: "rgba(35, 35, 35,0.8)",
  cartIconColor: "rgba(35, 35, 35,0.8)",
  profileIconColorHover: "#eb4034",
  searchIconColorHover: "#eb4034",
  cartIconColorHover: "#eb4034",
  cartIconMargin: "1vmax",
};

const Header = () => {
  return (
  
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
    <ul className="navbar-nav">
      <li className="nav-item">
      <Link to ="/login" className="nav-link">Login</Link>
      </li>
      <li className="nav-item">
      <Link to ="/products" className="nav-link">Products</Link>
      </li>
      <li className="nav-item">
      <Link to ="/contact" className="nav-link">Contact</Link>
      </li>
      <li className="nav-item">
      <Link to ="/about" className="nav-link">About</Link>
      </li>

    </ul>
    </nav>
);
};

export default Header;
