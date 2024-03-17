import NavLink from "../../NavLink/NavLink";

const Header = () => {
  return (
    <>
      <header className="h-180 w-[1408px] h-[677px] bg-rose-500 rounded-3xl relative">
        <div className="flex items-center justify-between">
          <div className="flex items-center ml-[96px] mt-[39px]">
            <img
              src="../src/assets/logo.svg"
              alt="Logo"
              className="w-72px h-52px"
            />
          </div>
          <NavLink />
        </div>
        <main>
          <p className="text-stone-900 text-2xl font-normal mt-[93px] ml-[195px] flex font-['Biro Script Plus'] ">
            diD yOu seE iT ?
          </p>
          <h1 className="flex ml-[120px] text-stone-900 text-[164px] font-black font-['Right Grotesk']">
            YACHT APES
          </h1>
          <div className="flex">
            <p className="text-stone-900 text-2xl ml-[324px] mt-[36px] font-normal font-['Biro Script Plus'] leading-10">
              Apes aRe eveRywhere
            </p>
            <p className="w-[337px] ml-[412px] mt-[40px] text-justify text-stone-900 text-base font-normal font-['Messina Sans Mono'] uppercase leading-[19px]">
              {" "}
              Yacht Ape is a collection of unique digital apes that you can own
              in NFT format
            </p>
          </div>
          <div className="w-[337px] h-[70px] px-[140px] flex-row-reverse mt-[28px] ml-[879px] pt-4 pb-5 bg-stone-900 bg-opacity-10 rounded-xl backdrop-blur-md justify-center items-center gap-2.5 flex">
            <p className="text-stone-900 text-[28px] font-black font-['Right Grotesk'] leading-[34px]">
              MEET APES
            </p>
          </div>
          <img
            src="../src/assets/header.png"
            className="absolute bottom-0 left-[445px] w-[463px] h-[612px]"
          />
        </main>
      </header>
    </>
  );
};

export default Header;
