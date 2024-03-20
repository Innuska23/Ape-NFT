export const getImageSet = (imagesSrc, sizes) => {
  if (imagesSrc.length !== sizes.length) {
    throw Error("Invalid sizes length");
  }

  return imagesSrc.map((item, index) => `${item} ${sizes[index]}w`).join(", ");
};
