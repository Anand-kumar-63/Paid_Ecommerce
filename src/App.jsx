import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import AboutUs from "./Pages/Aboutus/AboutsUs"
// import Services from "./Pages/Services/Services";
import Products from "./Pages/Products/Product";
import ContactUs from "./Pages/ContactUS/ContactUs";
import Hero from './Pages/Hero/Hero'
import Services from "./Pages/Maintenance/Maintenance"
import ProductDetailPage from "./Pages/Productdetail/Productsdetailpage";
// import ServicesPage from "./Pages/Maintenance/page";
function App() {
  return (
    <div className="font-Montserrat">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetailPage />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/maintenance" element={<Services/>}/>
          {/* <Route path="/Servicepage" element={<ServicesPage/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
