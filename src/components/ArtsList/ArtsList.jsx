import PropTypes from "prop-types";
import classNames from "classnames";

import collection_1x_1 from "../../images/collection/collection-1x-1.png";
import collection_1x_2 from "../../images/collection/collection-1x-2.png";
import collection_1x_3 from "../../images/collection/collection-1x-3.png";
import collection_1x_4 from "../../images/collection/collection-1x-4.png";
import collection_1x_5 from "../../images/collection/collection-1x-5.png";

export const ArtsList = [
  {
    img: collection_1x_1,
    alt: "Art1",
  },
  {
    img: collection_1x_2,
    alt: "Art2",
  },
  {
    img: collection_1x_3,
    alt: "Art3",
  },
  {
    img: collection_1x_4,
    alt: "Art4",
  },
  {
    img: collection_1x_5,
    alt: "Art5",
  },
];

const ArtListItem = ({ img, alt }) => {
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

ArtListItem.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ArtListItem;
