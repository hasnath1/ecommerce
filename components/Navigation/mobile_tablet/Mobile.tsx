import React from "react";
import BottomBar from "./BottomMobileBar";
import TopBar from "./TopMobileBar";

const Mobile = () => {
  return (
    <div className="lg:hidden">
      <TopBar />
      <BottomBar />
    </div>
  );
};

export default Mobile;
