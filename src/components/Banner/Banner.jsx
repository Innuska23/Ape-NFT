import classNames from "classnames";

import "./banner-animation.css";

const Banner = () => {
  const texts = ["HAVE NO LIMITS", "BREAK RULES", "DESTROY STEREOTYPES"];
  const extendedTexts = texts.concat(texts);
  const text = extendedTexts.join("      ✕     ");

  return (
    <div
      className={classNames(
        "h-[52px] pt-1.5 pb-2 w-100  bg-rose-500 overflow-hidden relative",
        "xl:h-[86px]"
      )}
    >
      <div
        className={classNames(
          "whitespace-nowrap w-100 overflow-hidden animate-scroll"
        )}
      >
        <span
          className={classNames(
            "inline-block text-white text-4xl justify-center",
            "font-black font-right-grotesk uppercase leading-9 mr-8",
            "xl:text-[64px] xl:pt-[6px] xl:pb-[16px]",
            "animate-marquee"
          )}
          style={{
            clipOverflow: "hidden",
            margin: "0px 24px",
          }}
        >
          {text}
        </span>
      </div>
    </div>
  );
};

export default Banner;
