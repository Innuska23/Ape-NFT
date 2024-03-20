import PropTypes from "prop-types";
import classNames from "classnames";

import { OpenseaIcon } from "../icons/OpenseaIcon";
import { LogomarIcon } from "../icons/LogomarIcon";
import { DiscordIcon } from "../icons/DiscordIcon";

const colorStyles = {
  black: `bg-black bg-opacity-10`,
  white: "bg-white bg-opacity-10 text-white backdrop-blur-md fill-white",
};

const BurgerLinkItem = ({
  Icon,
  children,
  color,
  target = "_blank",
  ...rest
}) => {
  return (
    <a
      target={target}
      rel="noreferrer noopener"
      className={classNames(
        colorStyles[color],
        "rounded-lg backdrop-blur-md justify-center items-center inline-flex",
        "w-12 h-12 p-2.5 gap-2.5",
        "xl:w-20 xl:h-20 xl:p-7 xl:rounded-xl"
      )}
      {...rest}
    >
      {Icon && <Icon color={color} className="md:w-[24px] md:h-[24px]" />}
      {children}
    </a>
  );
};

const BurgerLink = ({ color = "black", closeMenu, isForModal }) => {
  const colorStyles = {
    black: `bg-black bg-opacity-10`,
    white: "bg-white bg-opacity-10 text-white backdrop-blur-md fill-white",
  };

  const handleClose = (e) => {
    e.preventDefault();
    closeMenu();
  };

  return (
    <div
      className={classNames(
        "flex-col justify-start items-start gap-2 inline-flex absolute cursor-pointer",
        "w-12 top-[64px] right-[8px] h-[216px]",
        "md:top-[68px] md:right-[12px]",
        "xl:w-20 xl:h-20 xl:top-[120px] xl:[16px] xl:gap-4"
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
      />
      <BurgerLinkItem
        color={color}
        Icon={LogomarIcon}
        href={"/"}
        aria-label="Visit company logomar page"
      />
      <BurgerLinkItem
        color={color}
        Icon={OpenseaIcon}
        href={"https://opensea.io/"}
        aria-label="Visit company opensea page"
      />
    </div>
  );
};

BurgerLinkItem.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  children: PropTypes.node,
  color: PropTypes.oneOf(["black", "white"]),
  target: PropTypes.string,
};

BurgerLink.propTypes = {
  color: PropTypes.oneOf(["black", "white"]),
  closeMenu: PropTypes.func.isRequired,
  isForModal: PropTypes.bool.isRequired,
};

export default BurgerLink;
