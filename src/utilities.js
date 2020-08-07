/**
 * Function that given a url with ascii code instead of the character replaces
 * %5D for ] and %5B for [
 * @param {*} url url with characters on ascii code
 */
export const fixUrl = (url) => {
  let url2 = url.split('%5D').join(']');
  let url3 = url2.split('%5B').join('[');
  return url3;
};

/**
 * Returns either femalePlaceHolder or malePlaceHolder by randomizing selection
 */
export const randomCharacterPlaceHolder = () => {
  const options = ['femalePlaceHolder', 'malePlaceHolder'];
  return options[Math.floor(Math.random() * Math.floor(2))];
};
