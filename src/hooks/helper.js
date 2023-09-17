export const stripUrl = function (url) {
  if (url.endsWith("/")) {
    return url.slice(0, -1);
  }
  return url;
};
