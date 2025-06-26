
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Calendar, Heart } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'HOME', href: '{% url "home" %}', isActive: true },
    { name: 'ABOUT', href: '{% url "about" %}' },
    { name: 'HEALTH SERVICES', href: '{% url "health_services" %}' },
    { name: 'CONTACT US', href: '{% url "contact" %}' },
    { name: 'DONORS', href: '{% url "donors" %}' },
    { name: 'REFUND REQUEST', href: '{% url "refund_request" %}' },
  ];

  const authButtons = [
    { name: 'SIGN UP', href: '{% url "signup" %}', variant: 'outline' as const },
    { name: 'LOGIN', href: '{% url "login" %}', variant: 'default' as const },
  ];

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      {/* Top utility bar */}
      <div className="bg-blue-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2 text-sm">
            <div className="flex items-center space-x-4 text-blue-700">
              <div className="flex items-center space-x-1">
                <Phone className="h-3 w-3" />
                <span>Emergency: +1 (555) 123-4567</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="sm"
                className="text-blue-700 hover:text-blue-900 hover:bg-blue-100"
              >
                <Calendar className="h-4 w-4 mr-2" />
                BOOK AN APPOINTMENT
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">THOTW</h1>
              <p className="text-xs text-gray-600">The House Of The Way</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`px-4 py-2 text-sm font-medium transition-colors rounded-md ${
                  item.isActive
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            {authButtons.map((button) => (
              <Button
                key={button.name}
                variant={button.variant}
                size="sm"
                className={
                  button.variant === 'default'
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'border-blue-600 text-blue-600 hover:bg-blue-50'
                }
              >
                {button.name}
              </Button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`block px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                  item.isActive
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            
            {/* Mobile Book Appointment */}
            <Button 
              variant="ghost" 
              className="w-full justify-start text-blue-600 hover:bg-blue-50 mt-4"
            >
              <Calendar className="h-4 w-4 mr-2" />
              BOOK AN APPOINTMENT
            </Button>
            
            {/* Mobile Auth Buttons */}
            <div className="pt-4 border-t border-gray-100 space-y-2">
              {authButtons.map((button) => (
                <Button
                  key={button.name}
                  variant={button.variant}
                  className={`w-full ${
                    button.variant === 'default'
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'border-blue-600 text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {button.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
