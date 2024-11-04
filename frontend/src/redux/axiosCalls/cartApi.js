import axios from "axios";
import toast from "react-hot-toast";
import { baseURL } from "../rtk-queries/authAPI";


export const addToCart = async (formData) => {
  try {
    const response = await axios.post(
      `${baseURL}cart/`,
      formData,
      {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    // if (response.status === 201) {
    //   toast.success("Created Successfully");
    // }
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return toast.error(message);
  }
};