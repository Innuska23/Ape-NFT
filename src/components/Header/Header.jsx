import PropTypes from "prop-types";
import classNames from "classnames";
import { useState } from "react";

import { LogoIcon } from "../icons/LogoIcon";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import useHover from "../hook/useHover";

const Header = ({ color }) => {
  const [hoverColor, setHoverColor] = useState(color);
  const [isHovered, hoverProps] = useHover();

  const handleMouseEnter = () => {
    setHoverColor(color === "black" ? "white" : "black");
  };

  const handleMouseLeave = () => {
    setHoverColor(color);
  };

  return (
    <>
      <header className={classNames("bg-rose-500 rounded-xl relative")}>
        <div
          className={classNames(
            "mt-[16px] ml-[8px] w-[48px] h-[32px]",
            "md:ml-[20px] md:w-[48px] md:h-[32px] md:mt-[12px]",
            "xl:ml-[24px] xl:w-[72px] xl:h-[50px] xl:mt-[39px]"
          )}
        >
          <a href="/">
            <LogoIcon
              color={
                isHovered ? (color === "black" ? "white" : "black") : hoverColor
              }
              alt="Logo Icon"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              {...hoverProps}
            />
          </a>
        </div>
        <BurgerMenu />
      </header>
    </>
  );
};

Header.propTypes = {
  color: PropTypes.oneOf(["black", "white"]),
};

export default Header;
