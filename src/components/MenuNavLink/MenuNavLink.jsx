import classNames from "classnames";
import PropTypes from "prop-types";

const MenuItem = ({ href, text, onClick }) => {
  return (
    <li
      className={classNames(
        "bg-stone-900 bg-opacity-10 backdrop-blur-md justify-center items-center",
        "gap-2.5 flex z-100",
        "md:h-12 md:w-12 md:p-1",
        "xl:w-20 xl:h-20 xl:p-2.5"
      )}
    >
      <a
        href={href}
        className={classNames(
          "text-stone-900 font-semibold font-messina-sans-mono",
          "md:text-xs",
          "xl:text-base"
        )}
        onClick={onClick}
      >
        <span className="hover:text-white transition-colors duration-300">
          {text}
        </span>
      </a>
    </li>
  );
};

MenuItem.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

const MenuNavLink = ({ onClick }) => {
  return (
    <>
      <nav
        className={classNames(
          "absolute right-[12px] top-[12px] z-1 cursor-pointer",
          "xl:block xl:top-[-10px] xl:right-0"
        )}
      >
        <ul
          className={classNames(
            "justify-start items-start inline-flex",
            "md:h-12",
            "xl:w-[480px] xl:h-20"
          )}
        >
          <MenuItem href="#about" text="ABOUT" onClick={onClick} />
          <MenuItem href="#m-map" text="M-map" onClick={onClick} />
          <MenuItem href="#faq" text="Faq" onClick={onClick} />
          <MenuItem href="#arts" text="ARTS" onClick={onClick} />
          <MenuItem href="#mint" text="MINT" onClick={onClick} />
          <MenuItem href="#" text="CLOSE" onClick={onClick} />
        </ul>
      </nav>
    </>
  );
};

export default MenuNavLink;

MenuNavLink.propTypes = {
  onClick: PropTypes.func,
};
