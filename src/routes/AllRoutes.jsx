import React from 'react'
import { Routes, Route } from "react-router-dom";
import Collections from '../pages/Collections';
import HairCare from '../pages/HairCare';
import Home from '../pages/Home';
import Login from '../pages/Login';
import MakeUp from '../pages/MakeUp';
import MyGlammStudio from '../pages/MyGlammStudio';
import Offers from '../pages/Offers';
import ProductDetails from '../pages/ProductDetails';
import Rewards from '../pages/Rewards';
import SanetisingCare from '../pages/SanetisingCare';
import SignUp from '../pages/SignUp';
import SkinCare from '../pages/SkinCare';


const AllRoutes = () => {
  return (
    <div>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/makeup" element={<MakeUp />} />       
        <Route path="/haircare" element={<HairCare />} />
        <Route path="/skincare" element={<SkinCare />} />
        <Route path="/sanetising-care" element={<SanetisingCare />} />
        <Route path="/collectios" element={<Collections />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/myglamm-studio" element={<MyGlammStudio />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/productDetails" element={<ProductDetails />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default AllRoutes