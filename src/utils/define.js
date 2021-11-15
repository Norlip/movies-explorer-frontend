export const define = (screenWidth) => {
  if (screenWidth >= 1280) {
    return 12;
  }
  if (screenWidth >= 768) {
    return 8;
  }
  return 5;
};

export const defineIncrement = (screenWidth) => {
  if (screenWidth >= 1280) {
    return 3;
  }
  return 2;
};
