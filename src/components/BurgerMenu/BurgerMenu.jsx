import BurgerLink from "../BurgerLink/BurgerLink";
import MenuNav from "../MenuNav/MenuNav";

const BurgerMenu = () => {
  return (
    <div>
      <MenuNav />

      <BurgerLink isForModal={false} className="right-[8px] h-[216px]" />
    </div>
  );
};

export default BurgerMenu;
