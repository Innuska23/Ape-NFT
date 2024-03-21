import headerSrcMd from "../../assets/header/header-md.png";
import headerSrcSm from "../../assets/header/header-sm.png";
import headerSrcXl from "../../assets/header/header-xl.png";

import classNames from "classnames";
import { getImageSet } from "../../utils/image";

const headerImageSet = getImageSet(
  [headerSrcSm, headerSrcMd, headerSrcXl],
  [360, 768, 1280]
);

const Hero = () => {
  return (
    <div
    //   className={classNames(
    //     "w-full h-[542px] mt-[54px] px-[8px] ",
    //     "md:h-[421px] md:pl-[12px] md:pr-[20px]",
    //     "xl:h-[677px] xl:pr-[16px] xl:px-[16px] xl:mt-[16px]"
    //   )}
    >
      <div
      // className={classNames(
      //   "pb-[19px] bg-rose-500 rounded-xl relative",
      //   "md:pb-0 md:h-[421px]",
      //   "xl:h-[677px] xl:rounded-3xl"
      // )}
      >
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
            sizes="(max-width: 480px) 480w, (max-width: 1279px) 768w, (max-width: 1400px) 1280w"
            // sizes="(max-width: 480px) 216w, (max-width: 1279px) 283w, (max-width: 1400px) 463w, "
            // sizes="(min-width: 360px) 216px, (max-width: 480px) 216px, (min-width: 768px) 283px, (max-width: 1279px) 283px, (max-width: 1400px) 463px"
            srcSet={headerImageSet}
            src={headerSrcSm}
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
              Yacht Ape is a collection of unique digital apes that you can own
              in NFT format
            </p>
            <div
              className={classNames(
                "w-[216px] h-[41px] px-[70px] pt-2.5 bg-stone-900 bg-opacity-10 rounded-lg backdrop-blur-md flex justify-center items-center gap-2.5",
                "md:w-[190px] md:px-[61px]  md:rounded-xl md:mt-[16px]",
                "xl:w-[337px] xl:h-[70px] xl:pt-4 pb-3 xl:pb-5 xl:mt-[28px]"
              )}
            >
              <a href="#mint">
                <button
                  className={classNames(
                    "text-white  text-base font-black font-right-grotesk leading-[19px]",
                    "md:text-black md:hover:text-white",
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
