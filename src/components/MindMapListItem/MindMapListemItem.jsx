import classNames from "classnames";
import PropTypes from "prop-types";

import upLeftArrow from "../../images/up-left-arrow.svg";

const MindMapListItem = ({ title, subtitle, className, imgSrc, href }) => {
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
        {imgSrc && href && (
          <a href={href} target="_blank">
            <img
              src={upLeftArrow}
              alt="upLeftArrow"
              className={classNames(
                "cursor-pointer w-[24px] h-[24px] md:w-[48px] md:h-[48px] xl:w-[64px] xl:h-[64px]",
                "transition-transform duration-300 ease-in-out transform hover:scale-110"
              )}
            />
          </a>
        )}
        <p
          className={classNames(
            "w-48 text-white text-xs font-normal font-messina-sans-mono uppercase leading-[14px]",
            "md:w-32 md:text-right",
            "xl:w-64 xl:text-2xl xl:leading-[29px]"
          )}
        >
          {subtitle}
        </p>
        <p
          className={classNames(
            "w-48 text-white text-[32px] font-black font-right-grotesk uppercase text-left",
            "md:w-[236px]",
            "xl:w-[456px] xl:text-[64px] xl:leading-[64px] xl:tracking-normal"
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
  href: PropTypes.string,
};

export default MindMapListItem;
