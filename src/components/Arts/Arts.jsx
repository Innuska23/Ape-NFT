import React from "react";
import classNames from "classnames";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ArtList from "../ArtsList/ArtsList";
import { ARTS_LIST } from "../../constants";

const Arts = () => {
  const handleSliderPrev = () => {
    slider?.current?.slickPrev();
  };
  const handleSliderNext = () => {
    slider?.current?.slickNext();
  };

  const slider = React.useRef(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    className: "md:hidden",
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          infinite: false,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 2,
          infinite: false,
        },
      },
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 4,
          infinite: false,
        },
      },
    ],
  };

  return (
    <div
      id="arts"
      className={classNames("mt-[60px]", "md:mt-[80px]", "xl:mt-[120px]")}
    >
      <h2
        className={classNames(
          "text-white text-[44px] font-black font-right-grotesk uppercase leading-10",
          "xl:text-[160px] xl:leading-[160px]"
        )}
      >
        COLLECTION
      </h2>

      <Slider
        ref={slider}
        {...settings}
        className={classNames(
          "mt-[24px] px-[72px] gap-[24px] flex justify-center items-center",
          "md:px-[88px] md:gap-[24px] md:mt-[40px]",
          "xl:px-[124px] xl:mt-[80px]"
        )}
      >
        {ARTS_LIST.map(({ img, alt }, index) => (
          <ArtList
            key={index}
            img={img[0]}
            loading="lazy"
            alt={alt}
            srcSet={`${img[0]} 284w,
               ${img[1]} 568w,
               ${img[2]} 1185w,
               ${img[3]} 2370w`}
            sizes="(max-width: 1279px) 284px, 1185px"
          />
        ))}
      </Slider>

      <div
        className={classNames(
          "w-[150px] h-6 mt-[24px] justify-center items-center gap-12 inline-flex",
          "xl:mt-[48px]"
        )}
      >
        <button
          onClick={handleSliderPrev}
          className={classNames(
            "text-white text-2xl font-normal font-biro-script-plus leading-normal",
            "hover:text-my-custom-color"
          )}
        >
          Prev
        </button>
        <button
          onClick={handleSliderNext}
          className={classNames(
            "text-white text-2xl font-normal font-biro-script-plus leading-normal",
            "hover:text-my-custom-color"
          )}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Arts;
