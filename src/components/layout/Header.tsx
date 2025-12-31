import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { useState } from 'react';

const Header = () => {
  const { getItemCount } = useCart();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/shop', label: 'Shop' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-secondary shadow-lg">
      {/* Top bar */}
      <div className="bg-primary/10 border-b border-primary/20">
        <div className="container-custom py-2 flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-secondary-foreground">
            <Phone className="h-4 w-4 text-primary" />
            <span>Call us: (555) 123-4567</span>
          </div>
          <div className="hidden sm:block text-secondary-foreground">
            Free shipping on orders over $500
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-heading text-2xl font-bold">T</span>
            </div>
            <div>
              <h1 className="font-heading text-xl font-bold text-secondary-foreground uppercase tracking-wide">
                TyreZone
              </h1>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Premium Tyres</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-heading text-sm uppercase tracking-wider transition-colors duration-300 ${
                  isActive(link.path)
                    ? 'text-primary'
                    : 'text-secondary-foreground hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Link to="/cart" className="relative">
              <Button variant="ghost" size="icon" className="text-secondary-foreground hover:text-primary">
                <ShoppingCart className="h-6 w-6" />
                {getItemCount() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {getItemCount()}
                  </span>
                )}
              </Button>
            </Link>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-secondary-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border/20 pt-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-heading text-sm uppercase tracking-wider transition-colors duration-300 ${
                    isActive(link.path)
                      ? 'text-primary'
                      : 'text-secondary-foreground hover:text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
