import React from "react";
import Logo from "../../assets/logo.svg";
export default function Header(props) {
  return (
    <header className="headerComponent" data-test="headerComponent">
      <div className="wrap" data-test="wrap">
        <div className="logo" data-test="logo">
          <img className="logoImg" src={Logo} alt="logo" data-test="logoImg" />
        </div>
      </div>
    </header>
  );
}
