
import React from 'react';
import { Heart, Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-green-600 p-2 rounded-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">THOTW</h3>
                <p className="text-sm text-green-200">The House Of The Way</p>
              </div>
            </div>
            <p className="text-green-100 text-sm leading-relaxed mb-4">
              Providing quality healthcare services with compassion and excellence. 
              Your health and wellness is our top priority.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-green-200 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-green-200 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-green-200 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-green-200 hover:text-white transition-colors text-sm">Home</a></li>
              <li><a href="/about" className="text-green-200 hover:text-white transition-colors text-sm">About Us</a></li>
              <li><a href="/services" className="text-green-200 hover:text-white transition-colors text-sm">Health Services</a></li>
              <li><a href="/contact" className="text-green-200 hover:text-white transition-colors text-sm">Contact Us</a></li>
              <li><a href="/donors" className="text-green-200 hover:text-white transition-colors text-sm">Donors</a></li>
              <li><a href="/refund" className="text-green-200 hover:text-white transition-colors text-sm">Refund Request</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><span className="text-green-200 text-sm">General Medicine</span></li>
              <li><span className="text-green-200 text-sm">Emergency Care</span></li>
              <li><span className="text-green-200 text-sm">Preventive Care</span></li>
              <li><span className="text-green-200 text-sm">Health Screening</span></li>
              <li><span className="text-green-200 text-sm">Consultation</span></li>
              <li><span className="text-green-200 text-sm">Medical Records</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-green-300 mt-1 flex-shrink-0" />
                <span className="text-green-200 text-sm">
                  123 Healthcare St.<br />
                  Medical District<br />
                  City, State 12345
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-green-300 flex-shrink-0" />
                <span className="text-green-200 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-green-300 flex-shrink-0" />
                <span className="text-green-200 text-sm">info@thotw.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="h-4 w-4 text-green-300 mt-1 flex-shrink-0" />
                <div className="text-green-200 text-sm">
                  <div>Mon-Fri: 8:00 AM - 8:00 PM</div>
                  <div>Sat-Sun: 9:00 AM - 5:00 PM</div>
                  <div className="text-green-300 font-medium">24/7 Emergency</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-green-200 text-sm mb-2 md:mb-0">
              © 2024 THOTW - The House Of The Way. All rights reserved.
            </div>
            <div className="flex space-x-4 text-sm">
              <a href="#" className="text-green-200 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-green-200 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-green-200 hover:text-white transition-colors">Medical Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
