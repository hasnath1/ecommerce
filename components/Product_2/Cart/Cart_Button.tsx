import type { FunctionComponent } from "react";
import Icon from "./Cart_Icon";

const Cart_Button: FunctionComponent<{
  iconInfo?: {
    color?: string;
    width?: number;
    height?: number;
  };
}> = ({ iconInfo }) => {
  return (
    <div
      className={`flex justify-center flex-grow py-2 items-center mt-4 bg-[#E0E3FF] hover:bg-[#ced2ff]`}
    >
      <div className={`pr-1`}>
        <Icon
          color={iconInfo?.color || "#001AFF"}
          width={iconInfo?.width || 24}
          height={iconInfo?.width || 24}
        />
      </div>
      <div
        className={`pl-1 uppercase text-[#001AFF] font-poppins font-bold text-[14px]`}
      >
        Add to cart
      </div>
    </div>
  );
};

export default Cart_Button;
