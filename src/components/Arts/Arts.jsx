import React from "react";
import classNames from "classnames";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArtListItem, { ArtsList } from "../ArtsList/ArtsList";

const Arts = () => {
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
        breakpoint: 1600,
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
        {ArtsList.map(({ img, alt }, index) => {
          return <ArtListItem key={index} img={img} alt={alt} />;
        })}
      </Slider>

      <div
        className={classNames(
          "w-[150px] h-6 mt-[24px] justify-center items-center gap-12 inline-flex",
          "xl:mt-[48px]"
        )}
      >
        <button
          onClick={() => slider?.current?.slickPrev()}
          className={classNames(
            "text-white text-2xl font-normal font-biro-script-plus leading-normal hover:text-my-custom-color"
          )}
        >
          Prev
        </button>
        <button
          onClick={() => slider?.current?.slickNext()}
          className={classNames(
            "text-white text-2xl font-normal font-biro-script-plus leading-normal hover:text-my-custom-color"
          )}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Arts;
