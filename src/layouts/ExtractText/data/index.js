import axios from "axios";

export const extractImage = async (obj) => {
  return axios.post(
    `${process.env.REACT_APP_BACKEND_URL}/api/image/extract`,
    obj,
    { withCredentials: true }
  );
};