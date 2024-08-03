/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SellerDashboard from "./pages/SellerDashboard";
import Signup from "./pages/Signup";
import BuyerDashboard from "./pages/BuyerDashboard";
import Navbar from "./components/Navbar";



export default function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/seller/profile" element={<SellerDashboard />} />
          <Route path="/buyer/profile" element={<BuyerDashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}