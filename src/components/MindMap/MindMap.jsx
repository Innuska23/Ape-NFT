import React from "react";
import classNames from "classnames";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MindMapListItem, { MindMapsCards } from "./MindMapListItem";

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
      className={classNames("pt-[60px]", "md:pt-[80px]", "xl:pt-[120px]")}
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
        {MindMapsCards.map(
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
        {MindMapsCards.map(
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

      <div className="w-[150px] h-6 mt-[24px] justify-center items-center gap-12 inline-flex md:hidden">
        <button
          onClick={() => slider?.current?.slickPrev()}
          className="text-white text-2xl font-normal font-biro-script-plus leading-normal hover:text-my-custom-color"
        >
          Prev
        </button>
        <button
          onClick={() => slider?.current?.slickNext()}
          className="text-white text-2xl font-normal font-biro-script-plus leading-normal hover:text-my-custom-color"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MindMap;
