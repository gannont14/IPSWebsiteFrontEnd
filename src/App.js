import { Route, HashRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import AboutPageLayout from "./layouts/AboutPageLayout";
import AdminPageLayout from "./layouts/AdminPageLayout";
import ContactUsLayout from "./layouts/ContactUsLayout";
import HomePageLayout from "./layouts/HomePageLayout";
import PhotoGalleryLayout from "./layouts/PhotoGalleryLayout";
import ServicesPageLayout from "./layouts/ServicesPageLayout";

function App() {
  return (
    <div className="App light">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePageLayout />} />
          <Route path="/services" element={<ServicesPageLayout />} />
          <Route path="/about" element={<AboutPageLayout />} />
          <Route path="/photos" element={<PhotoGalleryLayout />} />
          <Route path="/admin" element={<AdminPageLayout />} />
          <Route path="/contactus" element={<ContactUsLayout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
