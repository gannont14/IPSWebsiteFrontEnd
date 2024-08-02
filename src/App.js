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
import ServicesPageLayout from './layouts/ServicesPageLayout';

import PrivateRoute from './components/PrivateRoute';

import { useEffect, useState } from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is authenticated
    fetch('/api/check_authentication')
      .then((response) => response.json())
      .then((data) => {
        setIsAuthenticated(data.status === 'authenticated');
      });
  }, []);

  return (
    <div className="App light">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePageLayout />} />
          <Route path="/services" element={<ServicesPageLayout />} />
          <Route path="/about" element={<AboutPageLayout />} />
          <Route path="/photos" element={<PhotoGalleryLayout />} />
          <Route
            path="/admin"
            element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <AdminPageLayout />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<AdminLoginLayout />} />
          <Route path="/contactus" element={<ContactUsLayout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
