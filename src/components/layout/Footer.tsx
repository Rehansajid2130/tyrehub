import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-heading text-2xl font-bold">T</span>
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold uppercase tracking-wide">TyreZone</h3>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Premium Tyres</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your trusted destination for premium tyres. Quality, performance, and safety for every journey.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6 uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { path: '/shop', label: 'Shop Tyres' },
                { path: '/about', label: 'About Us' },
                { path: '/contact', label: 'Contact' },
                { path: '/cart', label: 'Cart' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6 uppercase tracking-wide">Categories</h4>
            <ul className="space-y-3">
              {['All-Season', 'Summer', 'Winter', 'Off-Road', 'Performance'].map((category) => (
                <li key={category}>
                  <Link
                    to={`/shop?category=${category.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {category} Tyres
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6 uppercase tracking-wide">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  123 Tyre Street, Auto District<br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground text-sm">(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground text-sm">info@tyrezone.com</span>
              </li>
            </ul>

            {/* Social */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 bg-secondary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-secondary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-secondary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} TyreZone. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
