import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';

import './App.css';
import AboutPageLayout from './layouts/AboutPageLayout';
import AdminLoginLayout from './layouts/AdminLoginLayout';
import AdminPageLayout from './layouts/AdminPageLayout';
import ContactUsLayout from './layouts/ContactUsLayout';
import HomePageLayout from './layouts/HomePageLayout';
import PhotoGalleryLayout from './layouts/PhotoGalleryLayout';
import ServicesPageFullLayout from './layouts/ServicesPageFullLayout';
import ServicesPageLayout from './layouts/ServicesPageLayout';

function App() {
  return (
    <div className="App light bg-bgcustom">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePageLayout />} />
          <Route path="/services" element={<ServicesPageLayout />} />
          <Route
            path="/services/:serviceId"
            element={<ServicesPageFullLayout />}
          />
          <Route path="/about" element={<AboutPageLayout />} />
          <Route path="/photos" element={<PhotoGalleryLayout />} />
          {/* <Route
            path="/admin"
            element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <AdminPageLayout />
              </PrivateRoute>
            }
          /> */}
          <Route path="/admin" element={<AdminPageLayout />} />
          <Route path="/login" element={<AdminLoginLayout />} />
          <Route path="/contactus" element={<ContactUsLayout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
