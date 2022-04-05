import { useQuery } from "react-query";
import { getImages } from "../api/images";

export const useGetImages = () => {
  return useQuery("images", getImages, { initialImagesData: [] });
}

export const useGetImage = (id) => {
  return useQuery("image", () => getImage(id), { initialImage: []});
}