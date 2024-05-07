import React from "react";
import { Link } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <div className="HeaderContainer">
      <div className="HeaderLeft">
        <Link to={"/antique"}>
          {" "}
          <p>Antique</p>
        </Link>

        <CiMenuFries style={{ cursor: "pointer" }} size={"2rem"} />
      </div>
      <div className="HeaderRight">
        {/* <div className="HeaderSearch">
          <CiSearch size={"2rem"} />
          <input placeholder="Search" />
        </div> */}
      </div>
    </div>
  );
};

export default Header;
