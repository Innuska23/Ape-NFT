import classNames from "classnames";

const Footer = () => {
  return (
    <footer
      className={classNames(
        "flex justify-center",
        "pb-[24px] pr-[72px] pl-[72px]",
        "md:pb-[40px] md:pr-[247px] md:pl-[248px]",
        "xl:pr-[539px] xl:pl-[538px]"
      )}
    >
      <p
        className={classNames(
          "w-[216px] text-center text-white",
          "font-normal font-messina-sans-mono uppercase text-xs leading-[14px]",
          "md:w-full",
          "xl:text-base xl:leading-[19px]"
        )}
      >
        © Yacht ape 2024 all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
