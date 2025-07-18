
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Calendar, Heart } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'HOME', href: '/', isActive: window.location.pathname === '/' },
    { name: 'ABOUT', href: '/about', isActive: window.location.pathname === '/about' },
    { name: 'HEALTH SERVICES', href: '/services', isActive: window.location.pathname === '/services' },
    { name: 'CONTACT US', href: '/contact', isActive: window.location.pathname === '/contact' },
    { name: 'DONORS', href: '/donors', isActive: window.location.pathname === '/donors' },
    { name: 'REFUND REQUEST', href: '/refund', isActive: window.location.pathname === '/refund' },
  ];

  const authButtons = [
    { name: 'SIGN UP', href: '/signup', variant: 'outline' as const },
    { name: 'LOGIN', href: '/login', variant: 'default' as const },
  ];

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      {/* Top utility bar */}
      <div className="bg-green-50 border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2 text-sm">
            <div className="flex items-center space-x-4 text-green-700">
              <div className="flex items-center space-x-1">
                <Phone className="h-3 w-3" />
                <span>Emergency: +1 (555) 123-4567</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <a 
                href="/book-appointment"
                className="flex items-center space-x-2 text-green-700 hover:text-green-900 hover:bg-green-100 px-3 py-1 rounded-md transition-colors"
              >
                <Calendar className="h-4 w-4" />
                <span>BOOK AN APPOINTMENT</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-green-600 p-2 rounded-lg">
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
                    ? 'text-green-600 bg-green-50'
                    : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            {authButtons.map((button) => (
              <a
                key={button.name}
                href={button.href}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  button.variant === 'default'
                    ? 'bg-green-600 hover:bg-green-700 text-white'
                    : 'border border-green-600 text-green-600 hover:bg-green-50'
                }`}
              >
                {button.name}
              </a>
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
                    ? 'text-green-600 bg-green-50'
                    : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            
            {/* Mobile Book Appointment */}
            <a 
              href="/book-appointment"
              className="flex items-center space-x-2 w-full justify-start text-green-600 hover:bg-green-50 px-4 py-3 rounded-md transition-colors mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              <Calendar className="h-4 w-4" />
              <span>BOOK AN APPOINTMENT</span>
            </a>
            
            {/* Mobile Auth Buttons */}
            <div className="pt-4 border-t border-gray-100 space-y-2">
              {authButtons.map((button) => (
                <a
                  key={button.name}
                  href={button.href}
                  className={`block w-full text-center py-3 px-4 rounded-md text-sm font-medium transition-colors ${
                    button.variant === 'default'
                      ? 'bg-green-600 hover:bg-green-700 text-white'
                      : 'border border-green-600 text-green-600 hover:bg-green-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {button.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
