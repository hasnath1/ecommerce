import React from "react";
import Mobile from "./mobile_tablet/Mobile";
import Desktop from "./desktop/Desktop";

const Navbar = () => {
  return (
    <nav className="z-[99999999] bg-[#232F3E] h-12 md:h-16 lg:h-[82px]">
      <Mobile />
      <Desktop />
    </nav>
  );
};

export default Navbar;
