import classNames from "classnames";
import "./banner-animation.css";

const Banner = () => {
  const texts = ["HAVE NO LIMITS", "BREAK RULES", "DESTROY STEREOTYPES"];
  const extendedTexts = texts.concat(texts);
  const text = extendedTexts.join("      ✕     ");

  return (
    <div
      className={classNames(
        "h-[52px] bg-rose-500 overflow-hidden relative flex justify-center items-center",
        "xl:h-[86px]"
      )}
    >
      <div
        className={classNames(
          "whitespace-nowrap overflow-hidden animate-scroll",
          "h-full"
        )}
      >
        <span
          className={classNames(
            "inline-block text-white text-4xl h-full",
            "font-black font-right-grotesk uppercase leading-9 mr-8",
            "xl:text-[64px] xl:pt-[6px] xl:pb-[16px]",
            "flex items-center",
            "animate-marquee"
          )}
          style={{ clipOverflow: "hidden", margin: "0px 24px" }}
        >
          {text}
        </span>
      </div>
    </div>
  );
};

export default Banner;
