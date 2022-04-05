import { getProportionalHeight } from "./getProportionalHeight";

export const optimizeImageUrl = (url, newWidth) => {
  const pattern = /https:\/\/picsum.photos\/id\/([0-9]+)\/([0-9]+)\/([0-9]+)/;
  const match = url.match(pattern);
  const isCorrectUrl = match.length > 0;

  if (isCorrectUrl) {
    const id = match[1];
    const height = Math.floor(getProportionalHeight(url, newWidth));
    const newUrl = `https://picsum.photos/id/${id}/${newWidth.toString()}/${height.toString()}`;
    return newUrl
  }
  
  return url;
}
