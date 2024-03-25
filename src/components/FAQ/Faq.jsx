import { useState } from "react";
import classNames from "classnames";

import { FAQ_LIST } from "../../constants";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleFaqClick = (index) => () => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div
      id="faq"
      className={classNames(
        "mt-[60px] px-[72px]",
        "md:px-[88px] md:mt-[80px]",
        "xl:mt-[120px] xl:px-[124px]"
      )}
    >
      <h2>
        <button
          onClick={handleFaqClick(null)}
          className={classNames(
            "text-white text-[44px] font-black font-right-grotesk uppercase leading-10",
            "md:cursor-pointer md:text-[80px] ",
            "xl:text-[160px] xl:leading-[160px]"
          )}
        >
          FAQ
        </button>
      </h2>
      <ul
        className={classNames(
          "mt-[24px] text-white flex flex-col gap-[8px]",
          "md:gap-[18px]",
          "xl:gap-[24px] xl:mt-[80px]"
        )}
      >
        {FAQ_LIST.map((faq, index) => (
          <li key={index} className="flex">
            <div
              className={classNames(
                "min-w-[216px] rounded-xl  flex flex-col justify-center",
                "items-center pt-[8px] pb-[10px] relative",
                "md:pt-[18px] md:pr-[16px] md:pl-[186px] md:pb-[23px]",
                "md:w-[592px] md:h-[159px] md:rounded-2xl md:gap-[12px] md:items-start",
                "xl:w-[1032px] xl:h-[250px] xl:pt-[24px] xl:pb-[24px]",
                "xl:pr-[24px] xl:pl-[297px] xl:rounded-3xl",
                openIndex === index ? "bg-stone-900" : ""
              )}
            >
              {openIndex === index && (
                <div
                  className={classNames(
                    "md:absolute md:rotate-[-16deg] md:rounded-2xl",
                    "md:w-[148px] md:h-[183px] md:left-[16.64px] md:top-[-4.77px]",
                    "xl:rotate-[-8deg] xl:w-[248px] xl:h-[282px] xl:top-[-9.04px]"
                  )}
                >
                  <img
                    loading="lazy"
                    sizes="(max-width: 768px) 183px, 514px"
                    srcSet={`
                    ${faq.imageSrc[0]} 183w,
                    ${faq.imageSrc[1]} 366w,
                    ${faq.imageSrc[0]} 270w,
                    ${faq.imageSrc[1]} 514w,
                    `}
                    src={faq.imageSrc[0]}
                    alt={faq.alt}
                    className={classNames(
                      "sm:hidden",
                      "md:visibility md:absolute md:w-[148px] md:h-[183px] md:rounded-2xl",
                      "xl:w-[306px] xl:h-[282px] xl:rounded-3xl"
                    )}
                  />
                </div>
              )}

              <div>
                <button
                  onClick={handleFaqClick(index)}
                  className={classNames(
                    "w-full block text-xl font-black font-right-grotesk",
                    "uppercase leading-tight pr-[8px] text-left",
                    "md:w-[339px] md:text-[32px] md:pr-0",
                    "xl:w-[635px] xl:text-[64px] xl:leading-[64px]",
                    "flex group transition-colors duration-300",
                    {
                      "text-white hover:text-my-custom-color":
                        openIndex !== index,
                      "text-my-custom-color hover:text-white":
                        openIndex === index,
                    }
                  )}
                >
                  <span
                    className={classNames(
                      "min-w-[30px]",
                      "text-xs font-normal font-biro-script-plus leading-tight",
                      "white-space-nowrap ml-[8px] w-[23px] h-[20px]",
                      "display-inline-block vertical-align-baseline mt-[4px]",
                      "md:mt-[10px] md:mr-[6px]",
                      "xl:text-2xl xl:min-w-[50px] xl:mr-[25px]",
                      {
                        "text-my-custom-color group-hover:text-white":
                          openIndex !== index,
                        "text-white group-hover:text-my-custom-color":
                          openIndex === index,
                      }
                    )}
                  >{`[ ${index + 1} ]`}</span>

                  <div className="flex flex-col gap-[10px] xl:gap-[36px]">
                    {faq.title}

                    {openIndex === index && (
                      <p
                        className={classNames(
                          "min-w-[169px] text-white text-xs font-normal",
                          "font-messina-sans-mono uppercase leading-[14px] text-left",
                          "md:pr-0 md:pl-0 md:pb-0 md:w-[339px]",
                          "xl:w-[635px] xl:text-base xl:leading-[19px]"
                        )}
                      >
                        {faq.description}
                      </p>
                    )}
                  </div>
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Faq;
