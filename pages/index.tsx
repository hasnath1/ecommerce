import Product from "../components/product_item/demo_1";

const Index = () => {
  return (
    <div className="p-10">
      <Product
        imgUrl="/super_monitor.jpg"
        name="Dell UltraSharp U2720Q 27 Inch 4K UHD (3840 x 2160) LED Backlit LCD IPS USB-C Monitor"
        review={10}
        price={99}
        productId={"/"}
      />
    </div>
  );
};

export default Index;
