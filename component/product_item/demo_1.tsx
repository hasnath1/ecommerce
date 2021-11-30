import type { FunctionComponent } from "react";

const Product: FunctionComponent<{
  imgUrl: string;
  name: string;
  review?: number;
}> = () => {
  return <div>Hello I am product</div>;
};

export default Product;
export { Product };
