import PropTypes from "prop-types";
import classNames from "classnames";

const ArtList = ({ img, alt }) => {
  return (
    <div
      className={classNames(
        "rounded-xl items-center gap-[24px] flex-col justify-between inline-flex",
        "md:rounded-2xl",
        "xl:rounded-3xl"
      )}
    >
      <img
        src={img}
        className={classNames(
          "rounded-xl min-w-[216px] h-[256px]",
          "md:w-[284px] md:h-[336px]",
          "xl:w-[240px] xl:h-[280px]"
        )}
        alt={alt}
      />
    </div>
  );
};

ArtList.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ArtList;
