import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import OurStore from "./pages/OurStore";
import CompareProduct from "./pages/CompareProduct";
import WishList from "./pages/WishList";
import Login from "./pages/Authentication/Login";
import Register from "./pages/Authentication/Register";
import ForgotPassword from "./pages/Authentication/ForgotPassword";
import ResetPassword from "./pages/Authentication/ResetPassword";
import ChangePassword from "./pages/Authentication/ChangePassword";
import NotFound from "./pages/NotFound";
import Blogs from "./pages/Blog/Blogs";
import BlogPostDetail from "./pages/Blog/BlogPostDetail";
import TermsAndCondition from "./pages/TermsAndCondition";
import TheShipping from "./pages/TheShipping";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import { useEffect } from "react";
import ProductDetail from "./pages/Product/ProductDetail";
import Cart from "./pages/Cart/Cart";
import ShippingInfo from "./pages/Shipping/ShippingInfo";
import Address from "./pages/Authentication/Address";
import { useDispatch } from "react-redux";
import { user_auth_status } from "./redux/reducers/authSlice";
import { base_Url } from "./components/Layout/BottomeHeader";
import axios from "axios";
import MyProfile from "./pages/Authentication/MyProfile";
import EditProfile from "./pages/Authentication/EditProfile";
import EditAddress from "./pages/Authentication/EditAddress";
import AdminLanding from "./pages/Dashboards/adminDashboard/AdminLanding";
import AdminLayout from "./pages/Dashboards/adminDashboard/Layout";
import CreateProduct from "./pages/Dashboards/adminDashboard/Product/CreateProduct";
import CreateCategory from "./pages/Dashboards/adminDashboard/Category/CreateCategory";
import CategoryList from "./pages/Dashboards/adminDashboard/Category/CategoryList";
import CreateBrand from "./pages/Dashboards/adminDashboard/Brand/CreateBrand";
import BrandsList from "./pages/Dashboards/adminDashboard/Brand/BrandsList";
import ProductList from "./pages/Dashboards/adminDashboard/Product/ProductList";
import EditProduct from "./pages/Dashboards/adminDashboard/Product/EditProduct";
import ViewProduct from "./pages/Dashboards/adminDashboard/Product/ViewProduct";

axios.defaults.withCredentials = true;

export const ScrollToTop = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
};

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function authStatus() {
      try {
        const response = await axios.get(`${base_Url}user/login-status`, {
          withCredentials: true,
        });
        dispatch(user_auth_status(response.data));
        return response.data;
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
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/our-store" element={<OurStore />} />
            <Route path="/blog" element={<Blogs />} />
            <Route path="/blog/:id" element={<BlogPostDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/compare-page" element={<CompareProduct />} />
            <Route path="/wish-list" element={<WishList />} />
            <Route path="/terms" element={<TermsAndCondition />} />
            <Route path="/shipping-policy" element={<TheShipping />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="*" element={<NotFound />} />

            {/* *********AUTHENTICATED USER************** */}
            <Route path="/product/detail/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/shipping-information" element={<ShippingInfo />} />
            <Route path="/address" element={<Address />} />
            <Route path="/profile" element={<MyProfile />} />
            <Route path="/edit-profile" element={<EditProfile />} />
            <Route path="/edit-address" element={<EditAddress />} />

            {/* ************AUTHENTICATION************* */}

            <Route path="/account/login" element={<Login />} />
            <Route path="/account/register" element={<Register />} />
            <Route
              path="/account/forgot-password"
              element={<ForgotPassword />}
            />
            <Route path="/account/reset-password" element={<ResetPassword />} />
            <Route
              path="/account/change-password"
              element={<ChangePassword />}
            />
          </Route>
          <Route path="/admin-dashboard" element={<AdminLayout />}>
            <Route index element={<AdminLanding />} />
            <Route
              path="/admin-dashboard/admin-create-product"
              element={<CreateProduct />}
            />
            <Route
              path="/admin-dashboard/admin-product-list"
              element={<ProductList />}
            />
            <Route
              path="/admin-dashboard/admin-edit-product/:id"
              element={<EditProduct />}
            />
            <Route
              path="/admin-dashboard/admin-view-product/:id"
              element={<ViewProduct />}
            />
            <Route
              path="/admin-dashboard/admin-create-category"
              element={<CreateCategory />}
            />
            <Route
              path="/admin-dashboard/admin-list-categories"
              element={<CategoryList />}
            />
            <Route
              path="/admin-dashboard/admin-create-brand"
              element={<CreateBrand />}
            />
            <Route
              path="/admin-dashboard/admin-list-brands"
              element={<BrandsList />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
