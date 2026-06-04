import { Routes, Route } from "react-router";
import "./App.css";

import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import ProductDetail from "./pages/ProductDetail";
import Navbar from "./pages/homepage/components/NavBar";
import ProductSection from "./pages/homepage/components/ProductSection";
import CartList from "./pages/CartList";
import UserProfile from "./pages/homepage/components/UserProfile";
import Footer from "./pages/homepage/components/Footer";
import ProductBrand from "./pages/ProductBrands";
import ShopProducts from "./pages/ShopProduct";
import EditUserProfile from "./pages/EditUserProfile";

function App() {
  return (
    <>
      <Routes>
        
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        

        <Route element={<Navbar />}>
          <Route path="/ShopProducts" element={<ShopProducts />} />
          <Route path="/ShopProducts/:category" element={<ShopProducts />} />
          <Route path="/productDetail/:source/:id" element={<ProductDetail />} />
          <Route path="/newArrival" element={<ProductSection />} />
          <Route path="/productcartlist" element={<CartList />} />
          <Route path="/brand/:brandName" element={<ProductBrand />} />
          <Route path="/profile" element={<UserProfile />} />
          
        </Route>
          <Route path="/profile/editProfile" element={<EditUserProfile/>} />

      </Routes>
    </>
  );
}

export default App;
