import type { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
import Review from "./Rating/Rating";

const Product_1: FunctionComponent<{
  imgUrl: string;
  name: string;
  price: number;
  review?: number;
  star?: 0 | 1 | 2 | 3 | 4 | 5;
  productId: string;
}> = ({ imgUrl, name, review, price, productId, star }) => {
  return (
    <Link href={productId} passHref>
      <div className="product-card-ctn group">
        <div>
          <div className="w-[100%] h-[235px] relative">
            <Image src={imgUrl} layout="fill" alt={name} priority={true} />
          </div>
        </div>

        <div className="product-info">
          <p className="product-text">
            {name.length > 80 ? `${name.substr(0, 80)}...` : name}
          </p>
        </div>

        <div className="product-price-review-ctn">
          <div>
            <span className="product-dollar-sign">&#36;</span>
            <span className="product-price">{price}</span>
            <span className="product-previous-price">${price}</span>
          </div>

          <div>
            {review && star && (
              <Review numberOfStarsToShow={star} buyers={review} />
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product_1;
export { Product_1 };
