import { FunctionComponent } from "react";

const Button: FunctionComponent<{
  text?: string;
  bg?: string;
  textColor?: string;
}> = ({ text = "Buy Now", bg = "#000000", textColor = "#FFFFFF" }) => {
  return (
    <button
      className="font-poppins p-4 capitalize flex justify-center items-center font-semibold h-[30px] text-sm"
      style={{ backgroundColor: bg, color: textColor }}
    >
      {text}
    </button>
  );
};

export default Button;
export { Button };
