import React from "react";
import PropTypes from "prop-types";
import "./Header.css";
import { NavLink, Link } from "react-router-dom";
const Header = () => (
  <div className="Header" data-testid="Header">
    <ul>
      <li>
        <NavLink to={"/"}>Home Page</NavLink>
      </li>
      <li>
        <NavLink to={"#"}>Filter</NavLink>
      </li>
      <li className="parent">
        <NavLink to={"#"}>Search</NavLink>
        <ul>
          <li>
            <Link to={"/search"}>Single Search</Link>
          </li>
          <li>
            <Link to={"/multi-search"}>Multi Search</Link>
          </li>
        </ul>
      </li>
      <li className="parent">
        <NavLink to={"#"}>Form</NavLink>
        <ul>
          <li>
            <Link to={"/form-hookes"}>Form Hookes</Link>
          </li>
          <li>
            <Link to={"/mui-hookes"}>Form MUI Hookes</Link>
          </li>
          <li>
            <Link to={"/formik"}>Form Formik</Link>
          </li>
          <li>
            <Link to={"/form-multisteps"}>Ract Form Multi Step</Link>
          </li>
          <li>
            <Link to={"/single-form-multi-stps"}>
              Ract Single Form Multi Step
            </Link>
          </li>
        </ul>
      </li>
      <li>
        <NavLink to={"/datepicker"}>Datepicker</NavLink>
      </li>
      <li>
        <Link to={"/search-cities"}>Search cities</Link>
      </li>
      <li>
        <Link to={"/throtelling"}>Thotelling</Link>
      </li>
      <li>
        <Link to={"/get"}>Load Data</Link>
      </li>
      <li>
        <Link to={"/userref-form"}>UseRef Form</Link>
      </li>
      <li>
        <Link to={"/local-storage"}>Local Storage</Link>
      </li>
      <li className="parent">
        <NavLink to={"#"}>GppgleMap</NavLink>
        <ul>
          <li>
            <Link to={"/google-marker"}>Google Map Marker</Link>
          </li>
          <li>
            <Link to={"/google-map"}>Google Map Place</Link>
          </li>
        </ul>
      </li>

      <li>
        <Link to={"/google-map"}>Google Map API</Link>
      </li>
      <li>
        <NavLink to={"/sitemap"}>Sitemap</NavLink>
      </li>
    </ul>
  </div>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
