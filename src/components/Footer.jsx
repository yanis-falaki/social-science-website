import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Organization Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Montreal Community Support</h3>
          <p className="text-gray-300 text-sm">
            Dedicated to supporting and empowering Montreal's homeless community through compassionate assistance and sustainable solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-300 transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-blue-300 transition-colors">Our Approach</a></li>
            <li><a href="#" className="hover:text-blue-300 transition-colors">Donate</a></li>
            <li><a href="#" className="hover:text-blue-300 transition-colors">Get Involved</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <div className="space-y-2">
            <div className="flex items-center">
              <Mail className="mr-2 text-blue-400" size={20} />
              <span>info@montrealcommunitysupport.org</span>
            </div>
            <div className="flex items-center">
              <Phone className="mr-2 text-blue-400" size={20} />
              <span>(514) 555-HELP</span>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400 transition-colors">
              <Facebook size={24} />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              <Twitter size={24} />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Montreal Community Support. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;