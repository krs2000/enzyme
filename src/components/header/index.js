import React from "react";
import Logo from "../../assets/logo.svg";
export default function Header(props) {
  return (
    <header>
      <div className="wrap">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
      </div>
    </header>
  );
}
