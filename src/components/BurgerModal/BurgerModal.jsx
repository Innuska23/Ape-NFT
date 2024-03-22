import PropTypes from "prop-types";
import classNames from "classnames";

import logoMobile from "../../images/logo-white.svg";
import BurgerLink from "../BurgerLink/BurgerLink";

const ListItemModal = ({ href, text, onClose }) => {
  return (
    <li>
      <a
        href={href}
        className={classNames(
          "font-semibold font-messina-sans-mono hover:text-gray-400"
        )}
        onClick={onClose}
      >
        {text}
      </a>
    </li>
  );
};

const BurgerModal = ({ onClose }) => {
  return (
    <div
      className={classNames(
        "fixed top-0 left-0 w-full h-full bg-black z-50 flex justify-center",
        "pb-[24px] pt-[130px]"
      )}
    >
      <div className={classNames("absolute top-[70px] left-[16px]")}>
        <a href="/">
          <img src={logoMobile} alt="logo" />
        </a>
      </div>

      <div className={classNames("bg-black rounded-lg w-full text-white")}>
        <nav
          className={classNames(
            "w-[121px] flex-col justify-start items-center gap-4 inline-flex"
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

        <BurgerLink color="white" closeMenu={onClose} isForModal />
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
  onClose: (BurgerModal.propTypes = {
    onClose: PropTypes.func,
  }.func),
};
