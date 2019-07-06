import React from "react";
import "./Header.css";

const Header = props => <div className="header">{props.value || 0}</div>;

export default Header;
