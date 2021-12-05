import React, { FunctionComponent } from "react";
import Link from "next/link";

const Category: FunctionComponent<{ link: string; active?: boolean }> = ({
  link = "#",
  active = false,
}) => {
  const color = active ? "#FF3C20" : "#ffffff";

  return (
    <Link href={link}>
      <a
        className="flex justify-center items-center flex-grow"
        style={active ? { background: "#" } : {}}
      >
        <svg
          width="26"
          height="26"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.3334 18.3333H14.6667V14.6666H18.3334V18.3333ZM12.8334 18.3333H9.16675V14.6666H12.8334V18.3333ZM7.33341 18.3333H3.66675V14.6666H7.33341V18.3333ZM18.3334 12.8333H14.6667V9.16663H18.3334V12.8333ZM12.8334 12.8333H9.16675V9.16663H12.8334V12.8333ZM7.33341 12.8333H3.66675V9.16663H7.33341V12.8333ZM18.3334 7.33329H14.6667V3.66663H18.3334V7.33329ZM12.8334 7.33329H9.16675V3.66663H12.8334V7.33329ZM7.33341 7.33329H3.66675V3.66663H7.33341V7.33329Z"
            fill={color}
          />
        </svg>
      </a>
    </Link>
  );
};
export default Category;
