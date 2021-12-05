import React from "react";

import MobileSearchBar from "./MobileSearchBar";

const TopBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 h-12 bg-[#080a0c] flex items-center md:h-16">
      <div className="mx-[20px] w-[100%]">
        <MobileSearchBar />
      </div>
    </div>
  );
};

export default TopBar;
