import PropTypes from "prop-types";
import classNames from "classnames";

import { LogoIcon } from "../icons/LogoIcon";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

import useHover from "../hook/useHover";

const Header = () => {
  const [isHovered, handles] = useHover();

  return (
    <header className={classNames("bg-rose-500 rounded-xl relative")}>
      <div
        className={classNames(
          "mt-[16px] ml-[8px] w-[48px] h-[32px]",
          "md:ml-[20px] md:w-[48px] md:h-[32px] md:mt-[12px]",
          "xl:ml-[24px] xl:w-[72px] xl:h-[50px] xl:mt-[39px]"
        )}
      >
        <a href="./">
          <LogoIcon
            className={classNames(
              "transition-colors duration-300 xl:w-[72px] xl:h-[50px]"
            )}
            color={isHovered ? "white" : "black"}
            alt="Logo Icon"
            {...handles}
          />
        </a>
      </div>
      <BurgerMenu />
    </header>
  );
};

Header.propTypes = {
  color: PropTypes.oneOf(["black", "white"]),
};

export default Header;
