import PropTypes from "prop-types";

const NavLink = ({ onClick }) => {
  return (
    <>
      <nav className="hidden xl:block absolute right-0 z-1">
        <ul className="w-[480px] h-20 justify-start items-start inline-flex">
          <li className="w-20 h-20 p-2.5 bg-stone-900 bg-opacity-10 backdrop-blur-md justify-center items-center gap-2.5 flex">
            <a
              href="#"
              className="text-stone-900 text-base font-semibold font-['Messina Sans Mono']"
            >
              ABOUT
            </a>
          </li>
          <li className="w-20 h-20 p-2.5 bg-stone-900 bg-opacity-10 backdrop-blur-md justify-center items-center gap-2.5 flex">
            <a
              href="#"
              className="text-stone-900 text-base font-semibold font-['Messina Sans Mono']"
            >
              M-map
            </a>
          </li>
          <li className="w-20 h-20 p-2.5 bg-stone-900 bg-opacity-10 backdrop-blur-md justify-center items-center gap-2.5 flex">
            <a
              href="#"
              className="text-stone-900 text-base font-semibold font-['Messina Sans Mono']"
            >
              Faq
            </a>
          </li>
          <li className="w-20 h-20 p-2.5 bg-stone-900 bg-opacity-10 backdrop-blur-md justify-center items-center gap-2.5 flex">
            <a
              href="#"
              className="text-stone-900 text-base font-semibold font-['Messina Sans Mono']"
            >
              ARTS
            </a>
          </li>
          <li className="w-20 h-20 p-2.5 bg-stone-900 bg-opacity-10 backdrop-blur-md justify-center items-center gap-2.5 flex">
            <a
              href="#"
              className="text-stone-900 text-base font-semibold font-['Messina Sans Mono']"
            >
              MINT
            </a>
          </li>
          <li className="w-20 h-20 p-2.5 bg-stone-900 bg-opacity-10 backdrop-blur-md justify-center items-center gap-2.5 flex z-1">
            <a
              href="#"
              className="text-stone-900 text-base font-semibold font-['Messina Sans Mono']"
              onClick={() => onClick()}
            >
              CLOSE
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavLink;

NavLink.propTypes = {
  onClick: PropTypes.func,
};
