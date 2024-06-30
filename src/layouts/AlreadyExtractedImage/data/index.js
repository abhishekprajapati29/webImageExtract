import axios from "axios";

export const getImageListInfo = async (obj) => {
  return axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/image/all`, {
    withCredentials: true,
  });
};
