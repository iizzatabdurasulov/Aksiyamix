import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/shared/Navbar/Navbar";
import UserCabinet from "./pages/UserCabinet";
import Favorites from "./pages/Favorites";
import ProduxtDetail from "./pages/ProductDetail";
import ScrollToTop from "./utils/ScrollTop";
import AuthProvider from "./auth/AuthProvider";

export default function App() {
  return (
    <div>
      <ScrollToTop/>
      <AuthProvider/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/userInfo" element={<UserCabinet />} />
        <Route path="/productDetail/:id" element={<ProduxtDetail />} />
      </Routes>
    </div>
  );
}
