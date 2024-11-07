import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { base_Url } from "../components/Layout/BottomeHeader";
import { resetUserState, user_auth_status } from "../redux/reducers/authSlice";
import store from "../redux/store";
import { resetAdminSlice } from "../redux/reducers/adminSlice";
import { resetOrderState } from "../redux/reducers/orderSlice";
import { resetCartSlice } from "../redux/reducers/cartSlice";


const useRedirectLoggedOutUser = (path) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = localStorage.getItem("userName");
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
        toast.error("Session expired, Please log in to continue.");
        store.dispatch(resetUserState());
        store.dispatch(resetAdminSlice());
        store.dispatch(resetOrderState());
        store.dispatch(resetCartSlice());
        localStorage.clear();
        navigate(path);
        return;
      }
    };
    redirectLoggedOutUser();
  }, [navigate, path, dispatch, LoggedIn, userName]);
};


export default useRedirectLoggedOutUser;