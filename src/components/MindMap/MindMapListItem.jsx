import classNames from "classnames";
import PropTypes from "prop-types";

import upLeftArrow from "../../assets/up-left-arrow.svg";

export const MindMapsCards = [
  {
    title: "YAPE DROP",
    subtitle:
      "All owners of APE NFTs and all future collections will receive a percentage of sales based on the number of NFTs they own",
    className: "bg-stone-900",
  },
  {
    title: "New Collection",
    subtitle:
      "Launch of the 2nd YACHT Collection Releasing the first version of the Ape Slam Game",
    className: "bg-stone-900",
  },
  {
    title: "Token",
    subtitle:
      "Launch your own token, the proceeds of which will go to a global fund to LAUNCH YACHT CLUB AND PROMOTE it",
    className: "bg-stone-900 ",
  },
  {
    title: "Learn more in mind map",
    imgSrc: upLeftArrow,
    className: "bg-rose-500",
  },
];

const MindMapListItem = ({ title, subtitle, className, imgSrc }) => {
  return (
    <>
      <div
        className={classNames(
          className,
          "w-[216px] h-[242px] px-3 py-6 rounded-xl flex-col justify-between items-end inline-flex",
          "md:w-[284px] md:h-[242px] md:p-6 md:rounded-2xl",
          "xl:w-[504px] xl:h-[480px] xl:p-6 xl:rounded-3xl"
        )}
      >
        {imgSrc && (
          <img
            src={imgSrc}
            alt="upLeftArrow"
            className="cursor-pointer w-[24px] h-[24px] md:w-[48px] md:h-[48px] xl:w-[64px] xl:h-[64px]"
          />
        )}
        <p
          className={classNames(
            "w-48 text-white text-xs font-normal font-messina-sans-mono uppercase leading-[14px]",
            "md:w-32",
            "xl:w-64 xl:text-2xl xl:leading-[29px]"
          )}
        >
          {subtitle}
        </p>
        <p
          className={classNames(
            "w-48 text-white text-[32px] font-black font-right-grotesk uppercase",
            "md:w-[236px]",
            "xl:w-[456px] xl:text-[64px] xl:leading-[64px] xl:tracking-normal xl:text-left"
          )}
        >
          {title}
        </p>
      </div>
    </>
  );
};

MindMapListItem.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  className: PropTypes.string,
  imgSrc: PropTypes.string,
};

export default MindMapListItem;
