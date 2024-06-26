import { useState, useEffect } from "react";
import classNames from "classnames";

import MenuNavLink from "../MenuNavLink/MenuNavLink";
import BurgerModal from "../BurgerModal/BurgerModal";

const MenuNav = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
    const getScreenSize = () => {
      setIsMobileScreen(window.innerWidth <= 767);
    };

    getScreenSize();

    window.addEventListener("resize", getScreenSize);

    return () => {
      window.removeEventListener("resize", getScreenSize);
    };
  }, []);

  useEffect(() => {
    if (isShowMenu && isMobileScreen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isShowMenu, isMobileScreen]);

  const handleClickOpeMenu = () => {
    setIsShowMenu((prevState) => !prevState);
  };

  return (
    <>
      <div
        className={classNames(
          { hidden: isShowMenu && !isMobileScreen },
          "bg-black bg-opacity-10 rounded-lg backdrop-blur-md justify-center items-center",
          "inline-flex w-12 h-12 p-2.5",
          "md:p-1 gap-2.5",
          "xl:w-20 xl:h-20 xl:p-7 xl:rounded-xl absolute top-[0px] right-[8px]",
          "md:top-[12px] md:right-[12px] xl:top-[-10px] xl:right-0 text-xs xl:text-base"
        )}
        style={{ zIndex: 1 }}
      >
        <button type="button" onClick={handleClickOpeMenu}>
          <span
            className={classNames(
              "hover:text-white focus:text-white xl:text-base xl:font-semibold",
              "transition-colors duration-300"
            )}
          >
            {!isShowMenu ? "Menu" : "Close"}
          </span>
        </button>
      </div>

      {isShowMenu && isMobileScreen && (
        <BurgerModal onClose={handleClickOpeMenu} />
      )}

      {isShowMenu && !isMobileScreen && (
        <MenuNavLink onClick={handleClickOpeMenu} />
      )}
    </>
  );
};

export default MenuNav;
