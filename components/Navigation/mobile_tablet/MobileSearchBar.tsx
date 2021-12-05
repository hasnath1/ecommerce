import { useState } from "react";
import Image from "next/image";

import logo from "../logo.svg";
import searchIcon from "../search.svg";
import backIcon from "../back.svg";

const MobileTopBar = () => {
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  if (isSearchBarOpen)
    return (
      <div className="flex justify-between items-center">
        <div
          className="flex justify-center"
          onClick={() => setIsSearchBarOpen(false)}
        >
          <Image src={backIcon} width={26} height={26} />
        </div>

        <input
          type="text"
          className="flex-grow mx-3 py-1 px-3 font-poppins rounded-sm text-[15px] border-none outline-none md:text-[18px] font-medium"
          placeholder="Search..."
          onChange={e => setInputValue(e.target.value)}
        />

        <div
          onClick={() => setIsSearchBarOpen(true)}
          className="flex justify-center items-center"
        >
          <Image src={searchIcon} width={26} height={26} />
        </div>
      </div>
    );

  return (
    <div className="flex justify-between">
      <div>
        <a href="/">
          <Image src={logo} alt="logo" />
        </a>
      </div>

      <div
        onClick={() => setIsSearchBarOpen(prev => !prev)}
        className="flex justify-center items-center"
      >
        <Image src={searchIcon} width={26} height={26} />
      </div>
    </div>
  );
};

export default MobileTopBar;
