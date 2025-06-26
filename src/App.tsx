
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Demo pages with complete content
const HomePage = () => (
  <div className="min-h-screen bg-gray-50">
    {/* Hero Section */}
    <div className="bg-gradient-to-r from-green-600 to-green-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to THOTW
          </h1>
          <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto">
            The House Of The Way - Providing quality healthcare services with compassion and excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Book an Appointment
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
              Our Services
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* Services Preview */}
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Healthcare Services</h2>
          <p className="text-xl text-gray-600">Comprehensive medical care for you and your family</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
            <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <span className="text-green-600 text-xl">🏥</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">General Medicine</h3>
            <p className="text-gray-600">Comprehensive primary care services for all ages with experienced physicians.</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
            <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <span className="text-green-600 text-xl">🚑</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Emergency Care</h3>
            <p className="text-gray-600">24/7 emergency medical services with rapid response and expert care.</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
            <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <span className="text-green-600 text-xl">💊</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Preventive Care</h3>
            <p className="text-gray-600">Regular health screenings and preventive treatments to keep you healthy.</p>
          </div>
        </div>
      </div>
    </div>

    {/* Why Choose Us */}
    <div className="bg-green-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose THOTW?</h2>
          <p className="text-xl text-gray-600">Excellence in healthcare with a personal touch</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">👨‍⚕️</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Doctors</h3>
            <p className="text-gray-600">Highly qualified and experienced medical professionals</p>
          </div>
          <div className="text-center">
            <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🏆</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Care</h3>
            <p className="text-gray-600">Committed to providing the highest standard of medical care</p>
          </div>
          <div className="text-center">
            <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">⏰</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h3>
            <p className="text-gray-600">Round-the-clock medical support and emergency services</p>
          </div>
          <div className="text-center">
            <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">💝</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Compassionate</h3>
            <p className="text-gray-600">Caring for patients with empathy and understanding</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const AboutPage = () => (
  <div className="min-h-screen bg-gray-50 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About THOTW</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            The House Of The Way (THOTW) is dedicated to providing comprehensive healthcare services 
            with a focus on patient care and community wellness. Our mission is to deliver quality 
            medical care with compassion, respect, and excellence.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-semibold text-green-600 mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To provide accessible, compassionate, and comprehensive healthcare services that 
                promote wellness and healing in our community. We strive to treat every patient 
                with dignity and respect while delivering the highest quality medical care.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-green-600 mb-4">Our Vision</h2>
              <p className="text-gray-600">
                To be the leading healthcare provider in our community, known for our commitment 
                to excellence, innovation, and patient-centered care. We envision a healthier 
                community where everyone has access to quality healthcare.
              </p>
            </div>
          </div>

          <div className="bg-green-50 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-green-600 mb-2">Compassion</h3>
                <p className="text-gray-600">We treat every patient with empathy, kindness, and understanding.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-green-600 mb-2">Excellence</h3>
                <p className="text-gray-600">We strive for the highest standards in all aspects of healthcare delivery.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-green-600 mb-2">Integrity</h3>
                <p className="text-gray-600">We maintain honesty, transparency, and ethical practices in all our interactions.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-green-600 mb-2">Innovation</h3>
                <p className="text-gray-600">We embrace new technologies and methods to improve patient care.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ServicesPage = () => (
  <div className="min-h-screen bg-gray-50 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Health Services</h1>
        <p className="text-xl text-gray-600">Comprehensive medical care tailored to your needs</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
          <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
            <span className="text-green-600 text-2xl">🏥</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">General Medicine</h3>
          <p className="text-gray-600 mb-4">Comprehensive primary care services including routine check-ups, diagnosis, and treatment of common illnesses.</p>
          <ul className="text-sm text-gray-500 space-y-1">
            <li>• Annual physical exams</li>
            <li>• Chronic disease management</li>
            <li>• Vaccinations and immunizations</li>
            <li>• Health screenings</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
          <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
            <span className="text-green-600 text-2xl">🚑</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Emergency Care</h3>
          <p className="text-gray-600 mb-4">24/7 emergency medical services with rapid response times and expert emergency physicians.</p>
          <ul className="text-sm text-gray-500 space-y-1">
            <li>• Trauma care</li>
            <li>• Cardiac emergencies</li>
            <li>• Respiratory emergencies</li>
            <li>• Critical care stabilization</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
          <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
            <span className="text-green-600 text-2xl">💊</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Preventive Care</h3>
          <p className="text-gray-600 mb-4">Proactive healthcare services focused on preventing illness and promoting wellness.</p>
          <ul className="text-sm text-gray-500 space-y-1">
            <li>• Cancer screenings</li>
            <li>• Cardiovascular assessments</li>
            <li>• Diabetes prevention</li>
            <li>• Wellness counseling</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
          <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
            <span className="text-green-600 text-2xl">🧪</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Laboratory Services</h3>
          <p className="text-gray-600 mb-4">Complete diagnostic laboratory services with accurate and timely results.</p>
          <ul className="text-sm text-gray-500 space-y-1">
            <li>• Blood work and analysis</li>
            <li>• Urine and stool tests</li>
            <li>• Pathology services</li>
            <li>• Rapid diagnostic tests</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
          <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
            <span className="text-green-600 text-2xl">👩‍⚕️</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Specialist Consultations</h3>
          <p className="text-gray-600 mb-4">Access to specialist physicians for complex medical conditions and specialized care.</p>
          <ul className="text-sm text-gray-500 space-y-1">
            <li>• Cardiology</li>
            <li>• Dermatology</li>
            <li>• Endocrinology</li>
            <li>• Gastroenterology</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
          <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
            <span className="text-green-600 text-2xl">🏃‍♂️</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Wellness Programs</h3>
          <p className="text-gray-600 mb-4">Comprehensive wellness programs designed to promote healthy lifestyle and prevent disease.</p>
          <ul className="text-sm text-gray-500 space-y-1">
            <li>• Nutrition counseling</li>
            <li>• Fitness assessments</li>
            <li>• Stress management</li>
            <li>• Health education</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const ContactPage = () => (
  <div className="min-h-screen bg-gray-50 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <p className="text-xl text-gray-600">Get in touch with our healthcare team</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Your first name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Your last name"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input 
                type="email" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
              <input 
                type="tel" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="+1 (555) 123-4567"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                <option>General Inquiry</option>
                <option>Appointment Request</option>
                <option>Medical Records</option>
                <option>Insurance Questions</option>
                <option>Emergency</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea 
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Please describe how we can help you..."
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Address</h3>
                  <p className="text-gray-600">
                    123 Healthcare Street<br />
                    Medical District<br />
                    City, State 12345
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-600">Main: +1 (555) 123-4567</p>
                  <p className="text-gray-600">Emergency: +1 (555) 911-HELP</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">info@thotw.com</p>
                  <p className="text-gray-600">appointments@thotw.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 8:00 AM - 8:00 PM</p>
                  <p className="text-gray-600">Saturday - Sunday: 9:00 AM - 5:00 PM</p>
                  <p className="text-green-600 font-medium">24/7 Emergency Services</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-600 text-white rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-4">Emergency Services</h3>
            <p className="mb-4">
              For medical emergencies, call 911 or visit our emergency department immediately. 
              Our emergency team is available 24/7 to provide urgent medical care.
            </p>
            <button className="bg-white text-green-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Emergency Contact: 911
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
