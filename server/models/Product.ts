import * as _ from "mongoose";

const ProductSchema = new _.Schema({
  name: { type: String, required: true },
  images: { type: Array },
  brand: { type: String, required: true },
  description: {
    type: String,
    required: true,
  },
  price: { type: Number, required: true },
  rating: { type: Number, required: false },
  sold: { type: Number, required: true },
  users: { type: Array, required: false },
});

const Product = _.model("User", ProductSchema);

export default Product;
export { Product };
