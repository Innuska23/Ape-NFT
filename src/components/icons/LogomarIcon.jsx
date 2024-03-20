import PropTypes from "prop-types";

const defaultFill = "#1E1E1E";

export const LogomarIcon = ({ color }) => {
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
    >
      {/* <g clipPath="url(#clip0_41_508)"> */}
      {/* <mask
          id="mask0_41_508"
          style="mask-type:luminance"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="16"
          height="16"
        >
          <path d="M16 0H0V16H16V0Z" fill="white" />
        </mask>
        <g mask="url(#mask0_41_508)">
          <mask
            id="mask1_41_508"
            style="mask-type:luminance"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="16"
            height="16"
          >
            <path d="M16 0H0V16H16V0Z" fill="white" />
          </mask>
          <g mask="url(#mask1_41_508)"> */}
      {/* <path
              d="M8.06988 0.00027714C3.59628 -0.0365229 -0.0365229 3.59628 0.00027714 8.06988C0.0378771 12.4139 3.58668 15.9635 7.92988 15.9995C12.4035 16.0379 16.0379 12.4035 15.9995 7.92988C15.9635 3.58748 12.4139 0.0378771 8.06988 0.00027714ZM5.67788 3.98188C6.18988 4.63228 6.49628 5.45548 6.49628 6.34828C6.49628 7.12188 6.26668 7.84188 5.87228 8.44268H3.09868L5.67708 3.98108L5.67788 3.98188ZM14.1339 8.85548V9.43148C14.1339 9.46908 14.1139 9.50108 14.0795 9.51548C13.8915 9.59548 13.2715 9.88348 13.0131 10.2419C12.3475 11.1683 11.8395 12.6243 10.7035 12.6243H5.96348C4.28508 12.6243 2.88108 11.2923 2.88188 9.51788C2.88188 9.47388 2.91948 9.43788 2.96348 9.43788H5.20988C5.28748 9.43788 5.34828 9.50028 5.34828 9.57628V10.0099C5.34828 10.2403 5.53468 10.4275 5.76588 10.4275H7.46988V9.43548H6.30588C6.97548 8.58748 7.37388 7.51708 7.37388 6.35148C7.37388 5.05148 6.87548 3.86588 6.05948 2.97948C6.55308 3.03708 7.02508 3.13548 7.46988 3.26588V2.98988C7.46988 2.70348 7.70188 2.47148 7.98828 2.47148C8.27468 2.47148 8.50668 2.70348 8.50668 2.98988V3.65548C10.0971 4.39788 11.1387 5.62988 11.1387 7.02348C11.1387 7.84108 10.7811 8.60188 10.1643 9.24188C10.0459 9.36428 9.88188 9.43388 9.70988 9.43388H8.50748V10.4243H10.0171C10.3427 10.4243 10.9267 9.80668 11.2035 9.43468C11.2035 9.43468 11.2155 9.41628 11.2475 9.40668C11.2795 9.39708 14.0195 8.76828 14.0195 8.76828C14.0771 8.75228 14.1339 8.79628 14.1339 8.85468V8.85548Z"
              fill={fillColor}
            />
          </g>
        </g>
      </g> */}
      <defs>
        <clipPath id="clip0_41_508">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

LogomarIcon.propTypes = {
  color: PropTypes.oneOf(["black", "white"]).isRequired,
};
