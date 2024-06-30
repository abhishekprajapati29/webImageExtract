import axios from "axios";

export const imageInfoById = async (id) => {
  return axios.get(
    `${process.env.REACT_APP_BACKEND_URL}/api/image/${id}`,
    { withCredentials: true }
  );
};
