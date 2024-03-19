import { useState } from "react";
import classNames from "classnames";
import NavLink from "../../NavLink/NavLink";

const Header = () => {
  const [showNavLink, setShowNavLink] = useState(false);

  const toggleMenu = () => {
    setShowNavLink(!showNavLink);
  };

  return (
    <div
      className={classNames(
        "w-full h-[542px] mt-[54px] px-[8px] ",
        "md:h-[421px] md:pl-[12px] md:pr-[20px]",
        "xl:h-[677px] xl:pr-[16px] xl:px-[16px] xl:mt-[16px]"
      )}
    >
      <header
        className={classNames(
          "pb-[19px]  bg-rose-500 rounded-xl relative",
          "md:pb-0 md:h-[421px]",
          "xl:h-[677px] xl:rounded-3xl"
        )}
      >
        <div className="flex">
          <a href="/">
            <img
              srcSet="../src/assets/logo-sm.svg 360w, ../src/assets/logo-xl.svg 1280w"
              sizes="(max-width: 1179px) 360px, (max-width: 1399px) 1280px"
              src="../src/assets/logo-sm.svg"
              className={classNames(
                "pt-[16px] pl-[8px]",
                "md:pl-[20px] md:absolute",
                "xl:pl-[24px] xl:pt-[39px]"
              )}
            />
          </a>
          <p
            className={classNames(
              "text-stone-900 text-[16px] ml-[53px] mt-[36px] font-black text-base font-biro-script-plus leading-[169%] tracking-[0%]",
              "md:text-[20px]  md:mt-[124px] md:ml-[76px] md:leading-[33px]",
              "xl:mt-[197px] xl:text-[24px]  xl:ml-[115px] xl:leading-[10px] "
            )}
          >
            diD yOu seE iT ?
          </p>
        </div>

        <h1
          className={classNames(
            "text-stone-900 text-[44px] font-black font-right-grotesk tracking-[1%] leading-44 leading-[110%]",
            "md:text-[92px]  md:leading-[92px] md:tracking-[0.01em] md:flex md:ml-[77px] md:mr-70px md:gap-x-[160px]",
            "xl:text-[164px] xl:ml-[115px]  xl:leading-[175px] xl:gap-x-[265px]"
          )}
        >
          YACHT <span>APES</span>
        </h1>
        <div className="md:flex md:items-baseline">
          <p
            className={classNames(
              "text-stone-900 text-base font-black font-biro-script-plus mt-[8px] leading-[110%] ",
              "md:text-xl md:mt-[16px] md:leading-[33px] md:flex-row md:flex md:ml-[76px]",
              "xl:leading-[10px] xl:text-2xl xl:mt-[30px] xl:ml-[235px]"
            )}
          >
            Apes aRe eveRywhere
          </p>
          <div className="flex justify-center items-center">
            <img
              srcSet="../src/assets/header/header-sm.png 360w, ../src/assets//header/header-md.png 768w, ../src/assets//header/header-xl.png 1280w"
              sizes="(max-width: 216px) 360px, (max-width: 216px) 360px, (min-width: 768px) 768px,(min-width: 1280px) 1280px"
              src="../src/assets/header/header-lg.png"
              alt="Header Image"
              className={classNames(
                "mt-[6px] object-center w-[216px] h-[284px]",
                "md:w-[283px] md:absolute md:bottom-0 md:left-[210px] md:h-[386px]",
                "xl:h-[612px] xl:w-[463px] xl:left-[365px]"
              )}
            />
          </div>
          <div
            className={classNames(
              "flex flex-col items-center",
              "md:items-end md:ml-[199px]",
              "xl:ml-[321px]"
            )}
          >
            <div className="md:flex md:justify-center md:flex-col md:items-end">
              <p
                className={classNames(
                  "text-center w-[217px] font-messina-sans-mono text-stone-900 text-xs font-normal font-['Messina Sans Mono'] uppercase leading-[14px] mt-[12px]",
                  "md:text-justify md:w-[190px] md:indent-16",
                  "xl:w-[337px] xl:mt-[30px] xl:leading-[19px] xl:text-[16px]  xl:indent-20"
                )}
              >
                Yacht Ape is a collection of unique digital apes that you can
                own in NFT format
              </p>
              <div
                className={classNames(
                  "w-[216px] h-[41px] px-[70px] pt-2.5 bg-stone-900 bg-opacity-10 rounded-lg backdrop-blur-md flex justify-center items-center gap-2.5",
                  "md:w-[190px] md:px-[61px]  md:rounded-xl md:mt-[16px]",
                  "xl:w-[337px] xl:h-[70px] xl:pt-4 pb-3 xl:pb-5 xl:mt-[28px]"
                )}
              >
                <button
                  className={classNames(
                    "text-white  text-base font-black font-right-grotesk leading-[19px]",
                    "md:text-black",
                    "xl:text-[28px] xl:leading-[34px]"
                  )}
                >
                  MEET APES
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className={classNames(
            "flex-col justify-start items-start gap-2 inline-flex absolute cursor-pointer",
            "w-12 top-[8px] right-[8px] h-[216px]",
            "md:top-[12px]",
            "xl:w-20 xl:h-20 xl:top-[24px] xl:[16px] xl:gap-4"
          )}
        >
          <div
            className={classNames(
              "w-12 h-12 xl:w-20 xl:h-20 p-2.5 xl:p-7",
              "bg-stone-900 bg-opacity-10 rounded-lg xl:rounded-xl backdrop-blur-md",
              "justify-center items-center gap-2.5 inline-flex",
              { invisible: showNavLink }
            )}
            onClick={() => {
              toggleMenu();
            }}
          >
            <div
              className={classNames(
                "text-stone-900 text-xs font-messina-sans-mono leading-[14px]",
                "xl:text-base"
              )}
            >
              MENU
            </div>
          </div>
          {showNavLink && <NavLink onClick={toggleMenu} />}
          <div
            className={classNames(
              "bg-stone-900 bg-opacity-10 rounded-lg backdrop-blur-md justify-center items-center inline-flex",
              "w-12 h-12 p-2.5 gap-2.5",
              "xl:w-20 xl:h-20 xl:p-7 xl:rounded-xl"
            )}
          >
            <img
              className={classNames(
                "justify-center items-center flex",
                "md:w-6 md:h-6  "
              )}
              src="../src/assets/discord.svg"
            />
          </div>
          <div
            className={classNames(
              "bg-stone-900 bg-opacity-10 rounded-lg backdrop-blur-md justify-center items-center inline-flex",
              "w-12 h-12 p-2.5 gap-2.5",
              "xl:w-20 xl:h-20 xl:p-7 xl:rounded-xl"
            )}
          >
            <div
              className={classNames(
                "justify-center items-center flex",
                "w-4 h-4",
                "md:w-6 md:h-6"
              )}
            >
              <div
                className={classNames("relative", "w-4 h-4", "md:w-6 md:h-6")}
              >
                <div
                  className={classNames(
                    "left-0 top-0 absolute",
                    "w-4 h-4",
                    "md:w-6 md:h-6"
                  )}
                >
                  <img
                    className={classNames(
                      "left-0 top-0 absolute",
                      "w-4 h-4",
                      "md:w-6 md:h-6"
                    )}
                    src="../src/assets/Logomark-Blue.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className={classNames(
              "bg-stone-900 bg-opacity-10 rounded-lg backdrop-blur-md justify-center items-center inline-flex",
              "w-12 h-12 p-2.5 gap-2.5",
              "xl:w-20 xl:h-20 xl:p-7 xl:rounded-xl"
            )}
          >
            <img
              className={classNames(
                "justify-center items-center",
                "flex md:w-6 md:h-6"
              )}
              src="../src/assets/logo1.svg"
            />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
