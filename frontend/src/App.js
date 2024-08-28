import { BrowserRouter, Route, Routes } from "react-router-dom";
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

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home/>}/>
            <Route path="/our-store" element={<OurStore/>}/>
            <Route path="/blog" element={<Blogs/>}/>
            <Route path="/blog/:id" element={<BlogPostDetail/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/compare-page" element={<CompareProduct/>}/>
            <Route path="/wish-list" element={<WishList />} />
            <Route path="*" element={<NotFound />} />
            
            {/* ************AUTHENTICATION************* */}

            <Route path="/account/login" element={<Login />} />
            <Route path="/account/register" element={<Register />} />
            <Route path="/account/forgot-password" element={<ForgotPassword />} />
            <Route path="/account/reset-password" element={<ResetPassword />} />
            <Route path="/account/change-password" element={<ChangePassword />} />
          </Route>
       </Routes> 
 </BrowserRouter>
    </>
  );
}

export default App;
