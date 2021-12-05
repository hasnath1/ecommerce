import Home from "../icons/Home";
import Category from "../icons/Category";
import Cart from "../icons/Cart";
import Profile from "../icons/Profile";

const BottomNavbar = () => {
  return (
    <div className="h-14 fixed bottom-0 left-0 right-0 bg-[#232F3E] flex lg:hidden">
      <div className="w-[100%] flex max-w-3xl mx-[auto]">
        <Home link={"#"} />
        <Category link={"#"} />
        <Cart link={"#"} />
        <Profile link={"#"} />
      </div>
    </div>
  );
};

export default BottomNavbar;
