import classNames from "classnames";

import closeSvg from "../../images/close.svg";
import ContactUsForm from "../ContactUsForm/ContactUsForm";

const ContactUs = () => {
  return (
    <div
      id="mint"
      className={classNames(
        "mt-[60px] px-[72px] flex flex-col items-center justify-center",
        "md:mt-[80px] md:pr-[185px] md:pl-[186px]",
        "xl:mt-[120px] xl:pr-[268px] xl:pl-[267px]"
      )}
    >
      <h2
        className={classNames(
          "text-white text-[44px] font-black font-right-grotesk uppercase leading-10",
          "md:text-[80px] md:leading-[80px]",
          "xl:text-[160px] xl:leading-[160px]"
        )}
      >
        Are you in?
      </h2>

      <div
        className={classNames(
          "mt-[24px] flex flex-col items-center gap-[16px]",
          "md:mt-[40px] md:gap-[24px]",
          "xl:mt-[80px] xl:px-[82px] xl:gap-[40px]"
        )}
      >
        <div>
          <img
            className={classNames("w-[36px] h-[36px]")}
            src={closeSvg}
            alt="сlose svg"
          />
        </div>
        <p
          className={classNames(
            "text-center text-white text-base font-normal font-messina-sans-mono uppercase leading-[19px]",
            "xl:text-2xl xl:leading-[29px]"
          )}
        >
          Join the YACHT APE community to be one of the first to receive our
          limited edition NFT
        </p>
      </div>

      <ContactUsForm />
    </div>
  );
};

export default ContactUs;
