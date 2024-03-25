import PropTypes from "prop-types";
import classNames from "classnames";

import { OpenseaIcon } from "../icons/OpenseaIcon";
import { LogomarIcon } from "../icons/LogomarIcon";
import { DiscordIcon } from "../icons/DiscordIcon";

import useHover from "../hook/useHover";

const colorStyles = {
  black: `bg-black bg-opacity-10`,
  white: "bg-white bg-opacity-10 text-white backdrop-blur-md fill-white",
};

const BurgerLinkItem = ({
  Icon,
  children,
  color,
  target = "_blank",
  hoverColor,
  ...rest
}) => {
  const [isHovered, handles] = useHover();

  const iconColor = isHovered ? hoverColor : color;

  return (
    <a
      target={target}
      rel="noreferrer noopener"
      className={classNames(
        colorStyles[color],
        "rounded-lg backdrop-blur-md justify-center items-center inline-flex",
        "w-12 h-12 p-2.5 gap-2.5 transition-colors duration-300",
        "xl:w-20 xl:h-20 xl:p-7 xl:rounded-xl"
      )}
      {...rest}
      {...handles}
    >
      {Icon && (
        <Icon
          color={iconColor}
          className={classNames("md:w-[24px] md:h-[24px]")}
        />
      )}
      {children}
    </a>
  );
};

const BurgerLink = ({ color = "black", closeMenu, isForModal, className }) => {
  const handleClose = (e) => {
    e.preventDefault();

    if (closeMenu) {
      closeMenu();
    }
  };

  const hoverColor = isForModal ? "black" : "white";

  return (
    <div
      className={classNames(
        "flex-col justify-start items-start gap-2 inline-flex absolute cursor-pointer",
        "w-12 top-[62px] text-xs",
        "md:top-[68px] md:right-[12px]",
        "xl:w-20 xl:h-20 xl:top-[90px] xl:right-0 xl:gap-4",
        className
      )}
    >
      {isForModal && (
        <BurgerLinkItem color={color} onClick={handleClose}>
          Close
        </BurgerLinkItem>
      )}

      <BurgerLinkItem
        color={color}
        Icon={DiscordIcon}
        href="https://discord.com/"
        aria-label="Visit company discord page"
        hoverColor={hoverColor}
      />

      <BurgerLinkItem
        color={color}
        Icon={LogomarIcon}
        href={"/https://opensea.io/"}
        aria-label="Visit company logomar page"
        hoverColor={hoverColor}
      />

      <BurgerLinkItem
        color={color}
        Icon={OpenseaIcon}
        href={"https://twitter.com/"}
        aria-label="Visit company opensea page"
        hoverColor={hoverColor}
      />
    </div>
  );
};

BurgerLinkItem.propTypes = {
  Icon: PropTypes.elementType,
  children: PropTypes.node,
  color: PropTypes.oneOf(["black", "white"]),
  hoverColor: PropTypes.oneOf(["black", "white"]),
  target: PropTypes.string,
};

BurgerLink.propTypes = {
  color: PropTypes.oneOf(["black", "white"]),
  closeMenu: PropTypes.func,
  isForModal: PropTypes.bool.isRequired,
  className: PropTypes.string,
};

export default BurgerLink;
