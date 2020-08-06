export const fixUrl = (url) => {
  let url2 = url.split('%5D').join(']');
  let url3 = url2.split('%5B').join('[');
  return url3;
};