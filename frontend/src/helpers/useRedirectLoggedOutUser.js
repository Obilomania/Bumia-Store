import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { base_Url } from "../components/Layout/BottomeHeader";
import { user_auth_status } from "../redux/reducers/authSlice";
import { set } from "mongoose";


const useRedirectLoggedOutUser = (path) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [LoggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    const redirectLoggedOutUser = async () => {
      async function authStatus() {
        try {
          const response = await axios.get(`${base_Url}user/login-status`, {
            withCredentials: true,
          });
          dispatch(user_auth_status(response?.data));
          setLoggedIn(response?.data);
          return response?.data;
        } catch (error) {
          const message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          console.log(message); // Add this line to log the message;
        }
      }
      authStatus();

      if (!LoggedIn) {
        toast.info("Session expired, Please log in to continue.");
        navigate(path);
        return;
      }
    };
    redirectLoggedOutUser();
  }, [navigate, path, dispatch]);
};


export default useRedirectLoggedOutUser;