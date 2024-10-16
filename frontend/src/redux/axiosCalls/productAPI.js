import axios from "axios";
import toast from "react-hot-toast";
import { baseURL } from "../rtk-queries/authAPI";

// let axiosConfig = {
//   headers: {
//     "Content-Type": "application/json;charset=UTF-8",
//   },
// };
export const createNewProduct = async (formData) => {
  try {
    const response = await axios.post(
      `${baseURL}product/create-product`,
      formData,
      {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    if (response.status === 201) {
      toast.success("Registration successful, Please Login");
    }
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return toast.error(message);
  }
};

export const getOneProductByAdmin = async (_id) => {
  try {
    const response = await axios.get(`${baseURL}product/${_id}`, {
      withCredentials: true,
    }).then((response) => {
      return response.data;
    });
    
    return response;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    console.log(message);
  }
};
