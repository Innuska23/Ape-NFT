import PropTypes from "prop-types";

const defaultFill = "#1E1E1E";

export const OpenseaIcon = ({ color, ...rest }) => {
  const fills = {
    black: defaultFill,
    white: "white",
  };

  const fillColor = fills[color] || defaultFill;

  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="md:w-[24px] md:h-[24px]"
      {...rest}
    >
      <g clipPath="url(#clip0_45_1318)">
        <path
          d="M9.52217 6.77143L15.4785 0H14.0671L8.89516 5.87954L4.76437 0H0L6.24656 8.8909L0 15.9918H1.41155L6.87321 9.78279L11.2356 15.9918H16L9.52183 6.77143H9.52217ZM7.58887 8.96923L6.95596 8.0839L1.92015 1.03921H4.0882L8.15216 6.7245L8.78507 7.60983L14.0677 14.9998H11.8997L7.58887 8.96957V8.96923Z"
          fill={fillColor}
        />
      </g>
      <defs>
        <clipPath id="clip0_45_1318">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

OpenseaIcon.propTypes = {
  color: PropTypes.oneOf(["black", "white"]).isRequired,
};
