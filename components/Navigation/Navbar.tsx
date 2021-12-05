import React from "react";
import Mobile from "./mobile_tablet/Mobile";
import Desktop from "./desktop/Desktop";

const Navbar = () => {
  return (
    <nav className="z-[999999]">
      <Mobile />
      <Desktop />
    </nav>
  );
};

export default Navbar;
