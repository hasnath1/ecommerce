import type { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
import Review from "../rating_star/Review";

const Product: FunctionComponent<{
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
          <p className="text-[14px] font-poppins font-normal group-hover:text-yellow-600 transition-colors">
            {name.length > 80 ? `${name.substr(0, 80)}...` : name}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="align-text-top font-bold text-xs text-gray-400">
              {" "}
              &#36;
            </span>

            <span className="font-bold pr-[5px] pl-1 text-[22px]">{price}</span>

            <span className="line-through text-xs align-bottom text-gray-400">
              ${price}
            </span>
          </div>

          <div>
            <Review numberOfStarsToShow={4} buyers={124234} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
export { Product };
