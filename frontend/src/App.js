import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import OurStore from "./pages/OurStore";
import Blogs from "./pages/Blogs";
import CompareProduct from "./pages/CompareProduct";
import WishList from "./pages/WishList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home/>}/>
            <Route path="/our-store" element={<OurStore/>}/>
            <Route path="/blog" element={<Blogs/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/compare-page" element={<CompareProduct/>}/>
            <Route path="/wish-list" element={<WishList/>}/>
          </Route>
       </Routes> 
 </BrowserRouter>
    </>
  );
}

export default App;
