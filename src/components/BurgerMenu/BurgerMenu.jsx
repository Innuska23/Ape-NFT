import BurgerLink from "../BurgerLink/BurgerLink";
import MenuNav from "../MenuNav/MenuNav";

const handleCloseMenu = () => {
  console.log("Menu closed");
};

const BurgerMenu = () => {
  return (
    <div>
      <MenuNav />
      <BurgerLink closeMenu={handleCloseMenu} isForModal={false} />
    </div>
  );
};

export default BurgerMenu;
