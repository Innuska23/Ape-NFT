import headerSrcMd from "../../images/header/header-md.png";
import headerSrcSm from "../../images/header/header-sm.png";
import headerSrcXl from "../../images/header/header-xl.png";

import classNames from "classnames";
import { getImageSet } from "../../utils/image";

const headerImageSet = getImageSet(
  [headerSrcSm, headerSrcMd, headerSrcXl],
  [360, 768, 1280]
);

const Hero = () => {
  return (
    <div>
      <div
        className={classNames(
          "absolute top-[36px] left-0 w-full px-[8px]",
          "md:relative",
          "xl:px-0"
        )}
      >
        <p
          className={classNames(
            "text-stone-900 text-[16px] font-black text-base font-biro-script-plus leading-[169%]",
            "md:ml-[72px] md:text-left",
            "tracking-[0%] xl:text-[24px] xl:leading-[10px] md:ml-[115px] xl:mt-[108px]"
          )}
        >
          diD yOu seE iT ?
        </p>
      </div>

      <h1
        className={classNames(
          "text-stone-900 text-[44px] mt-[12px] font-black font-right-grotesk tracking-[1%] leading-44 leading-[110%]",
          "md:text-[92px] md:mt-[75px] md:text-left md:pl-[73px] md:gap-x-[165px] md:flex md:pr-70px",
          "xl:text-[164px] xl:leading-[175px] xl:mt-[40px] xl:pl-[115px] xl:gap-x-[250px]"
        )}
      >
        YACHT <span>APES</span>
      </h1>

      <div
        className={classNames(
          "md:flex md:items-baseline md:pl-[72px]",
          "xl:pl-[235px]"
        )}
      >
        <p
          className={classNames(
            "text-stone-900 text-base font-black font-biro-script-plus mt-[8px] leading-[110%]",
            "md:mt-[16px] md:text-xl",
            "xl:text-2xl xl:mt-[30px]"
          )}
        >
          Apes aRe eveRywhere
        </p>

        <div className={classNames("flex justify-center items-center")}>
          <img
            sizes="(max-width: 480px) 480w, (max-width: 1279px) 768w, (max-width: 1400px) 1280w"
            srcSet={headerImageSet}
            src={headerSrcSm}
            alt="Header Image"
            className={classNames(
              "mt-[6px] object-center w-[216px] h-[284px]",
              "md:mt-0 md:w-[283px] md:h-[386px] md:absolute md:left-[206px] md:bottom-0",
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
          <div
            className={classNames(
              "md:flex md:justify-center md:flex-col md:items-end"
            )}
          >
            <div
              className={classNames(
                "w-[216px] h-[41px] px-[70px] pt-2.5 bg-stone-900 bg-opacity-10 rounded-lg backdrop-blur-md flex justify-center items-center gap-2.5 mb-[12px]",
                "md:hidden"
              )}
            >
              <a href="#mint">
                <button
                  className={classNames(
                    "text-black hover:text-white text-base font-black font-right-grotesk leading-[19px]"
                  )}
                >
                  MEET APES
                </button>
              </a>
            </div>

            <p
              className={classNames(
                "text-center w-[217px] font-messina-sans-mono text-stone-900 text-xs font-normal font-['Messina Sans Mono'] uppercase leading-[14px] mt-[12px]",
                "md:text-justify md:w-[190px] md:indent-16",
                "xl:w-[337px] xl:mt-[40px] xl:leading-[19px] xl:text-[16px] xl:indent-20"
              )}
            >
              Yacht Ape is a collection of unique digital apes that you can own
              in NFT format
            </p>

            <div
              className={classNames(
                "hidden w-[190px] px-[61px] rounded-xl mt-[16px] bg-stone-900 bg-opacity-10 backdrop-blur-md",
                "md:block",
                "xl:w-[337px] xl:h-[70px] xl:pt-4 pb-3 xl:pb-5 xl:mt-[28px]"
              )}
            >
              <a href="#mint">
                <button
                  className={classNames(
                    "text-black hover:text-white text-base font-black font-right-grotesk leading-[19px]",
                    "xl:text-[28px] xl:leading-[34px]"
                  )}
                >
                  MEET APES
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
