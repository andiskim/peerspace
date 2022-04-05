import api, { BASE_URL } from ".";

export const getImages = async () => {
  return api.get(`/v2/list`).then(res => res.data).catch(err => err);
};

export const getImage = async (id) => {
  return api.get(`/id/${id}/info`).then(res => res.data).catch(err => err);
};