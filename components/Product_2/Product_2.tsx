import type { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
import Review from "./Rating/Rating";
import Cart_Button from "./Cart/Cart_Button";

const Product_1: FunctionComponent<{
  imgUrl: string;
  name: string;
  price: number;
  review?: number;
  productId: string;
}> = ({ imgUrl, name, review, price, productId }) => {
  return (
    <Link href={productId} passHref>
      <div className="p-[20px] bg-white box-border max-w-[300px] flex flex-col rounded hover:drop-shadow-lg cursor-pointer group transition duration-200 border-[0.1px]">
        <div>
          <div className="w-[100%] h-[235px] relative">
            <Image src={imgUrl} layout="fill" alt={name} priority={true} />
          </div>
        </div>

        <div className="my-[20px] max-w-[285px]">
          <p className="text-[14px] font-poppins font-normal group-hover:text-[#F96800] transition-colors">
            {name.length > 80 ? `${name.substr(0, 80)}...` : name}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="align-text-top font-bold text-xs text-gray-400">
              {" "}
              &#36;
            </span>

            <span className="font-bold pr-[5px] pl-1 text-[22px] text-[#F96800]">
              {price}
            </span>

            <span className="line-through text-xs align-bottom text-gray-400">
              ${price}
            </span>
          </div>

          <div>
            <Review numberOfStarsToShow={4} buyers={12332} />
          </div>
        </div>

        <div>
          <Cart_Button />
        </div>
      </div>
    </Link>
  );
};

export default Product_1;
export { Product_1 };
