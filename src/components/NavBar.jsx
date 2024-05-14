import React from "react";
import { CgProfile } from "react-icons/cg";
import { CgShoppingCart } from "react-icons/cg";
import { GrLanguage } from "react-icons/gr";
import { CiWallet } from "react-icons/ci";
import { Link } from "react-router-dom";
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
        <Link className="NavBarAccount" to="/antique/SignIn">
          <CgProfile />
          <p>Account</p>
        </Link>
        <Link className="NavBarCart">
          <CgShoppingCart />
          <p>Cart</p>
        </Link>
        <Link className="NavBarWallet">
          <CiWallet />
          <p>$125.00</p>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
