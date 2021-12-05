import React from "react";
import Image from "next/image";
import Link from "next/link";

import logo from "../logo.desktop.svg";
import search from "../search.black.svg";
import cart from "./cart.svg";
import offers from "./offers.svg";
import account from "./account.svg";

const Desktop = () => {
  return (
    <div className="hidden fixed top-0 left-0 right-0 bg-[#232F3E] lg:flex items-center lg:h-[82px]">
      <div className="max-w-[1300px] mx-[auto] w-[100%] px-4 xl:px-0 flex min-h-[44px]">
        <div className="flex justify-center items-center">
          <Image src={logo}></Image>
        </div>

        <form className="flex items-stretch justify-items-stretch flex-grow mx-8">
          <input
            type="text"
            id="search"
            className="py-1 px-3 font-poppins rounded-tl-md rounded-bl-md text-[15px] border-none outline-none md:text-[18px] font-medium bg-white flex-grow"
          />
          <button
            type="submit"
            className="bg-white w-12 flex items-center justify-center rounded-tr-md rounded-br-md"
          >
            <Image src={search}></Image>
          </button>
        </form>

        <div className="flex">
          <Link href="#">
            <div className="flex items-center mr-8">
              <Image src={offers} />
              <p className="text-white font-semibold font-monts text-[22px] ml-2">
                Offers
              </p>
            </div>
          </Link>

          <Link href="#">
            <div className="flex items-center mr-8">
              <Image src={cart} />
              <p className="text-white font-semibold font-monts text-[22px] ml-2">
                Cart
              </p>
            </div>
          </Link>

          <Link href="#">
            <div className="flex items-center">
              <Image src={account} />
              <p className="text-white font-semibold font-monts text-[22px] ml-2">
                Account
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Desktop;
