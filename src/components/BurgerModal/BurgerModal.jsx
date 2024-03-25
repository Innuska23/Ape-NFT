import PropTypes from "prop-types";
import classNames from "classnames";

import { LogoIcon } from "../icons/LogoIcon";
import BurgerLink from "../BurgerLink/BurgerLink";
import useHover from "../hook/useHover";

const ListItemModal = ({ href, text, onClose }) => {
  return (
    <li>
      <a
        href={href}
        className={classNames(
          "font-semibold font-messina-sans-mono hover:text-my-custom-color",
          "transition-colors duration-300"
        )}
        onClick={onClose}
      >
        <span className="hover:text-my-custom-color transition-colors duration-300">
          {text}
        </span>
      </a>
    </li>
  );
};

const BurgerModal = ({ onClose }) => {
  const [isHovered, handles] = useHover();

  return (
    <div
      className={classNames(
        "fixed top-0 left-0 w-full h-full bg-black z-50 flex justify-center",
        "pb-[24px] pt-[130px] px-[8px]"
      )}
    >
      <div className={classNames("absolute top-[70px] left-[16px]")}>
        <a href="./">
          <LogoIcon
            className={classNames("transition-colors duration-300")}
            alt="logo"
            color={isHovered ? "black" : "white"}
            {...handles}
          />
        </a>
      </div>

      <div
        className={classNames(
          "bg-black rounded-lg w-full text-white px-[16px]"
        )}
      >
        <nav
          className={classNames(
            "w-[121px] flex-col justify-start items-center gap-4 inline-flex",
            "hover:text-my-custom-color transition-colors duration-300"
          )}
        >
          <ul className={classNames("space-y-4 gap-4 text-2xl w-full")}>
            <ListItemModal href="#about" text="ABOUT" onClose={onClose} />
            <ListItemModal href="#m-map" text="MIND-MAP" onClose={onClose} />
            <ListItemModal href="#faq" text="FAQ" onClose={onClose} />
            <ListItemModal href="#arts" text="ARTS" onClose={onClose} />
            <ListItemModal href="#mint" text="MINT" onClose={onClose} />
          </ul>
        </nav>

        <div
          className={classNames(
            "flex mt-[77px] pl-[72px] pr-[72px] justify-center",
            "text-center text-white text-xs font-normal uppercase leading-[14px]"
          )}
        >
          <p
            className={classNames(
              "text-sm font-messina-sans-mono w-[216px] text-[12px]"
            )}
          >
            © YACHT APE 2024 ALL RIGHTS RESERVED
          </p>
        </div>

        <BurgerLink
          className="right-[16px] h-[216px]"
          color="white"
          closeMenu={onClose}
          isForModal
        />
      </div>
    </div>
  );
};

export default BurgerModal;

ListItemModal.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

BurgerModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
