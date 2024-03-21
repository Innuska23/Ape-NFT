import { useState } from "react";
import classNames from "classnames";

import { FaqList } from "./FaqList";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleFaqClick = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div
      id="faq"
      className={classNames(
        "mt-[60px] px-[72px]",
        "md:px-[88px] md:mt-[80px]",
        "xl:mt-[120px] xl:px-[120px]"
      )}
    >
      <h2>
        <button
          onClick={() => setOpenIndex(null)}
          className={classNames(
            "text-white text-[44px] font-black font-right-grotesk uppercase leading-10",
            "md:cursor-pointer"
          )}
        >
          FAQ
        </button>
      </h2>
      <ul
        className={classNames(
          "mt-[24px] text-white flex flex-col gap-[8px]",
          "md:gap-[16px]",
          "xl:gap-[24px] xl:mt-[80px]"
        )}
      >
        {FaqList.map((faq, index) => (
          <li key={index} className="flex">
            <div
              className={classNames(
                "min-w-[216px] rounded-xl gap-[10px] flex flex-col justify-center items-center pt-[8px] pb-[10px] relative",
                "md:pt-[18px] md:pr-[16px] md:pl-[237px] md:pb-[23px] md:w-[592px] md:h-[159px] md:rounded-2xl md:gap-[12px]",
                "xl:w-[1032px] xl:h-[250px] xl:pt-[24px] xl:pb-[24px] xl:pr-[24px] xl:pl-[373px] xl:rounded-3xl",
                openIndex === index ? "bg-stone-900" : ""
              )}
            >
              {openIndex === index && (
                <div
                  className={classNames(
                    "md:absolute md:origin-top-left md:rotate-[-16deg] md:rounded-2xl md:w-[148px] md:h-[183px] md:left-0 md:top-0",
                    "xl:rotate-[-8deg] xl:w-[248px] xl:h-[282px]"
                  )}
                >
                  <img
                    srcSet={faq.imageSrc}
                    src={faq.imageSrc}
                    alt={faq.alt}
                    className={classNames(
                      "sm:hidden",
                      "md:visibility md:absolute md:w-[148px] md:h-[183px] md:left-[-16.64px] md:top-[4.77px] md:rounded-2xl",
                      "xl:w-[306px] xl:h-[282px] xl:rotate-[-8deg] xl:rounded-3xl xl:left-[-28.72px] xl:top-[7.99px]"
                    )}
                  />
                </div>
              )}
              <button
                onClick={() => handleFaqClick(index)}
                className={classNames(
                  "min-w-[169px] text-white text-xl font-black gap-[8px] font-right-grotesk uppercase leading-tight pl-[39px] pr-[8px] text-left hover:text-my-custom-color focus:text-my-custom-color",
                  "md:w-[339px] md:text-[32px] md:pr-0 md:pl-0",
                  "xl:w-[635px] xl:text-[64px] xl:leading-[64px]",
                  openIndex === index ? "text-my-custom-color" : ""
                )}
              >
                <span
                  className={classNames(
                    "text-xs font-normal font-biro-script-plus leading-tight h-[20px] top-[12px] absolute left-[8px]",
                    "md:top-[24px]  md:left-[183px]",
                    "xl:h-[40px] xl:top-[36px] xl:left-[297px] xl:text-2xl",
                    openIndex === index ? "text-white" : "text-rose-500",
                    "md:hover:text-white md:focus:text-white"
                    // !openIndex ? "sm:top-[12px]" : "sm:top-[20px]",
                    // !openIndex ? "md:top-[24px]" : "md:top-[48px]"
                  )}
                >{`[ ${index + 1} ]`}</span>
                {faq.title}
              </button>
              {openIndex === index && (
                <p
                  className={classNames(
                    "min-w-[169px] text-white text-xs font-normal font-messina-sans-mono uppercase leading-[14px] pl-[39px] pb-[10px] pr-[8px] text-left",
                    "md:pr-0 md:pl-0 md:pb-0 md:w-[339px]",
                    "xl:w-[635px] xl:text-base xl:leading-[19px]"
                  )}
                >
                  {faq.description}
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Faq;
