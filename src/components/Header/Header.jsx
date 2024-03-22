import classNames from "classnames";

import logoSm from "../../images/logo-sm.svg";
import logoMd from "../../images/logo-md.svg";
import logoXl from "../../images/logo-xl.svg";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const Header = () => {
  return (
    <>
      <header className={classNames("bg-rose-500 rounded-xl relative")}>
        <div className={classNames("flex")}>
          <a href="/">
            <img
              srcSet={`${logoSm} 360w, ${logoMd} 768w, ${logoXl} 1280w`}
              sizes="(min-width: 360px) 360w, (min-width: 768px) 768w, (max-width: 1279px) 768w, (min-width: 1280px) 1280w"
              // srcSet={`${logoSm} 360w, ${logoMd} 768w, ${logoXl} 1280w`}
              // sizes="(min-width: 360px) 360px, (min-width: 768px) 768px, (min-width: 1280px) 1280px, 100vw"
              src={logoSm}
              className={classNames(
                "mt-[16px] ml-[8px] w-[48px] h-[32px]",
                "md:ml-[20px] md:w-[48px] md:h-[32px] md:mt-[12px]",
                "xl:ml-[24px] xl:w-[72px] xl:h-[50px] xl:mt-[39px]"
              )}
            />
          </a>
        </div>

        <BurgerMenu />
      </header>
    </>
  );
};

export default Header;
