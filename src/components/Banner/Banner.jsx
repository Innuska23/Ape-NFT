import { useState } from "react";

import "./banner-animation.css";
import classNames from "classnames";

const Banner = () => {
  // eslint-disable-next-line
  const [animationActive, setAnimationActive] = useState(true);
  const texts = ["HAVE NO LIMITS", "BREAK RULES", "DESTROY STEREOTYPES"];
  const extendedTexts = texts.concat(texts);
  const text = extendedTexts.join("      ✕     ");

  return (
    <div
      className={classNames(
        "h-[52px] pt-1.5 pb-2 w-100  bg-rose-500 overflow-hidden relative",
        "md:h-[86px]"
      )}
    >
      <div
        className={classNames(
          "whitespace-nowrap w-100 overflow-hidden animate-scroll"
        )}
      >
        <span
          className={classNames(
            "inline-block text-white text-4xl justify-center font-black font-right-grotesk uppercase leading-9 mr-8",
            "md:text-[52px] md:pt-[6px] md:pb-[16px]",
            "xl:text-[64px]",
            { "animate-marquee": animationActive }
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
