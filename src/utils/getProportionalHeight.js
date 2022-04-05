export const getProportionalHeight = (url, newWidth) => {
  const pattern = /https:\/\/picsum.photos\/id\/([0-9]+)\/([0-9]+)\/([0-9]+)/;
  const match = url.match(pattern);
  const width = Math.floor(parseInt(match[2]));
  const height = Math.floor(parseInt(match[3]));

  return newWidth * (height / width);
}