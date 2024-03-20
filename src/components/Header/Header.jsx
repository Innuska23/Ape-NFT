import classNames from "classnames";

import logoSm from "../../assets/logo-sm.svg";
import logoMd from "../../assets/logo-md.svg";
import logoXl from "../../assets/logo-xl.svg";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Hero from "../Hero/Hero";

const Header = () => {
  return (
    <div
      className={classNames(
        "w-full mt-[54px] px-[8px]",
        "md:h-[421px] md:pl-[12px] md:pr-[20px]",
        "xl:h-[677px] xl:pr-[16px] xl:px-[16px] xl:mt-[16px]"
      )}
    >
      <header
        className={classNames(
          "pb-[19px] bg-rose-500 rounded-xl relative",
          "md:pb-0 md:h-[421px]",
          "xl:h-[677px] xl:rounded-3xl"
        )}
      >
        <div className="flex">
          <a href="/">
            <img
              srcSet={`${logoSm} 360w, ${logoMd} 768w, ${logoXl} 1280w`}
              sizes="(max-width: 1179px) 360px, (max-width: 1399px) 1280px"
              // src={srcSet}
              className={classNames(
                "pt-[16px] pl-[8px] w-[48px] h-[32px]",
                "md:pl-[20px] md:absolute",
                "xl:pl-[24px] xl:pt-[39px]"
              )}
            />
          </a>
        </div>

        <BurgerMenu />

        <Hero />
      </header>
    </div>
  );
};

export default Header;
