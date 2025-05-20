
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t py-12 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-primary"
              >
                <path d="M12 2a9 9 0 0 0-9 9c0 4.17 2.84 7.67 6.69 8.69a2 2 0 0 1-.16.66c-.05.23-.15.46-.3.66-.15.2-.33.39-.54.54-.21.15-.44.25-.66.3-.23.05-.46.05-.69.05-.5 0-.99-.11-1.44-.32M21.92 16.92c-.7.55-1.56.98-2.48 1.21-.92.23-1.88.27-2.82.13-.95-.14-1.85-.47-2.67-.97a8.18 8.18 0 0 1-2-1.79c-.54-.65-.96-1.39-1.25-2.19a7.88 7.88 0 0 1-.42-2.47V9.62c0-.86.14-1.7.4-2.5.26-.81.65-1.55 1.15-2.21C12.33 4.25 13 3.68 13.76 3.26c.76-.42 1.58-.69 2.43-.84.85-.15 1.71-.15 2.56 0 .85.14 1.67.42 2.43.84.76.42 1.43.99 1.99 1.65.56.66.99 1.41 1.3 2.21.3.8.49 1.64.53 2.5"/>
              </svg>
              <span className="font-bold text-xl text-primary">GreenGarden</span>
            </Link>
            <p className="mt-4 text-muted-foreground">
              Join our community of passionate gardeners and plant enthusiasts to share
              tips, learn from others, and grow your green space.
            </p>
            <div className="flex mt-6 space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/explore-gardeners"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Explore Gardeners
                </Link>
              </li>
              <li>
                <Link
                  to="/browse-tips"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Browse Tips
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Login / Sign Up
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-primary" />
                <a href="mailto:contact@greengarden.com" className="text-muted-foreground hover:text-primary transition-colors">
                  contact@greengarden.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-primary" />
                <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-primary" />
                <span className="text-muted-foreground">
                  123 Garden Street,<br />
                  Plant City, PC 12345
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} GreenGarden. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <Link to="#" className="text-sm hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="text-sm hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link to="#" className="text-sm hover:text-primary transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
