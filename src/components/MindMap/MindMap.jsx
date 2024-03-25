import React from "react";
import classNames from "classnames";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { MIND_MAPS_CARDS } from "../../constants";
import MindMapListItem from "../MindMapListItem/MindMapListemItem";

const MindMap = () => {
  const slider = React.useRef(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    className: "md:hidden",
  };

  return (
    <div
      id="m-map"
      className={classNames("mt-[60px]", "md:mt-[80px]", "xl:mt-[120px]")}
    >
      <h2
        className={classNames(
          "text-white text-[44px] font-black font-right-grotesk uppercase leading-10",
          "md:text-[80px] md:leading-[80px]"
        )}
      >
        MIND map
      </h2>

      <Slider ref={slider} {...settings} className="mt-[24px] md:hidden">
        {MIND_MAPS_CARDS.map(
          ({ title, className, imgSrc, subtitle, href }, index) => {
            return (
              <MindMapListItem
                key={index}
                title={title}
                className={className}
                imgSrc={imgSrc}
                subtitle={subtitle}
                href={href}
              />
            );
          }
        )}
      </Slider>

      <div
        className={classNames(
          "hidden",
          "md:grid md:grid-cols-2 md:gap-6 md:px-[88px] md:mt-[40px]",
          "xl:px-[124px] xl:mt-[80px]"
        )}
      >
        {MIND_MAPS_CARDS.map(
          ({ title, className, imgSrc, subtitle, href }, index) => (
            <MindMapListItem
              key={index}
              title={title}
              className={className}
              imgSrc={imgSrc}
              subtitle={subtitle}
              href={href}
            />
          )
        )}
      </div>

      <div
        className={classNames(
          "w-[150px] h-6 mt-[24px] justify-center items-center",
          "gap-12 inline-flex",
          "md:hidden"
        )}
      >
        <button
          onClick={() => slider?.current?.slickPrev()}
          className={classNames(
            "text-white text-2xl font-normal font-biro-script-plus leading-normal",
            "hover:text-my-custom-color transition-colors duration-300"
          )}
        >
          Prev
        </button>
        <button
          onClick={() => slider?.current?.slickNext()}
          className={classNames(
            "text-white text-2xl font-normal font-biro-script-plus",
            "leading-normal hover:text-my-custom-color transition-colors duration-300"
          )}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MindMap;
