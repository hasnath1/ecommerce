import React, { FunctionComponent } from "react";
import Link from "next/link";

const Home: FunctionComponent<{ link: string; active?: boolean }> = ({
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
            d="M20.3351 10.8495L11.4856 2.00657C11.4219 1.94273 11.3462 1.89208 11.2629 1.85752C11.1796 1.82296 11.0903 1.80518 11.0001 1.80518C10.9099 1.80518 10.8206 1.82296 10.7373 1.85752C10.654 1.89208 10.5783 1.94273 10.5146 2.00657L1.66514 10.8495C1.40732 11.1074 1.26123 11.4576 1.26123 11.8228C1.26123 12.5812 1.87783 13.1978 2.63623 13.1978H3.56865V19.5077C3.56865 19.888 3.87588 20.1952 4.25615 20.1952H9.6251V15.3827H12.0313V20.1952H17.744C18.1243 20.1952 18.4315 19.888 18.4315 19.5077V13.1978H19.364C19.7292 13.1978 20.0794 13.0538 20.3372 12.7939C20.8722 12.2568 20.8722 11.3867 20.3351 10.8495V10.8495Z"
            fill={color}
          />
        </svg>
      </a>
    </Link>
  );
};

export default Home;
