import React from "react";
import { CgProfile } from "react-icons/cg";
import { GrLanguage } from "react-icons/gr";
const NavBar = () => {
  return (
    <div className="NavBarContainer">
      <div className="NavBarLeft">
        <div className="NavBarLanguage">
          <GrLanguage />
          <p>Language</p>
        </div>
      </div>
      <div className="NavBarRight">
        <div className="NavBarAccount">
          <CgProfile />
          <p>Account</p>
        </div>
        <p>Cart</p>
        <p>$125.00</p>
      </div>
    </div>
  );
};

export default NavBar;
