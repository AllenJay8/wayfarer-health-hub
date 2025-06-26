
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';

// Demo pages to show navigation in action
const HomePage = () => (
  <div className="min-h-screen bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Welcome to THOTW
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          The House Of The Way - Providing quality healthcare services with compassion and excellence.
        </p>
        <div className="bg-white rounded-lg shadow-sm p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Our Healthcare Navigation System
          </h2>
          <p className="text-gray-600 leading-relaxed">
            This is a demo of the responsive navigation bar designed for your THOTW healthcare website. 
            The navigation includes all your requested menu items and follows modern web design principles 
            with a clean, professional appearance suitable for a healthcare institution.
          </p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">Responsive Design</h3>
              <p className="text-blue-700 text-sm">Works perfectly on desktop, tablet, and mobile devices</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-900 mb-2">Django Ready</h3>
              <p className="text-green-700 text-sm">Template includes Django URL patterns and authentication</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-semibold text-purple-900 mb-2">Professional</h3>
              <p className="text-purple-700 text-sm">Clean, modern design inspired by healthcare industry standards</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const AboutPage = () => (
  <div className="min-h-screen bg-gray-50 py-12">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-lg shadow-sm p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">About THOTW</h1>
        <p className="text-gray-600 leading-relaxed">
          The House Of The Way is dedicated to providing comprehensive healthcare services 
          with a focus on patient care and community wellness.
        </p>
      </div>
    </div>
  </div>
);

const ServicesPage = () => (
  <div className="min-h-screen bg-gray-50 py-12">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-lg shadow-sm p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Health Services</h1>
        <p className="text-gray-600 leading-relaxed">
          We offer a wide range of healthcare services to meet your medical needs.
        </p>
      </div>
    </div>
  </div>
);

const ContactPage = () => (
  <div className="min-h-screen bg-gray-50 py-12">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-lg shadow-sm p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h1>
        <p className="text-gray-600 leading-relaxed">
          Get in touch with our team for appointments, inquiries, or emergency services.
        </p>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
