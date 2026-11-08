import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { 
  UtensilsCrossed, 
  ShoppingBag, 
  Menu as MenuIcon, 
  X, 
  User 
} from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // English Navigation Links
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Reservations", path: "/reservations" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  // Active Link Styling
  const getNavLinkClass = ({ isActive }) =>
    `font-medium transition-colors hover:text-primary ${
      isActive ? "text-primary border-b-2 border-primary pb-1" : "text-gray-600"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-base-100 shadow-sm backdrop-blur-md bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Branding */}
          <Link to="/" className="flex items-center gap-2 text-2xl font-black text-primary">
            <span className="p-2 bg-primary/10 rounded-xl text-primary">
              <UtensilsCrossed size={28} />
            </span>
            <span className="tracking-tight">
              Spice<span className="text-secondary">Craft</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={getNavLinkClass}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Cart Icon & Badge */}
            <Link to="/cart" className="btn btn-ghost btn-circle relative" title="Shopping Cart">
              <ShoppingBag size={22} className="text-gray-700" />
              <span className="badge badge-sm badge-primary absolute top-1 right-1 font-bold">
                0
              </span>
            </Link>

            {/* Login Button */}
            <Link to="/login" className="btn btn-primary btn-sm md:btn-md hidden sm:flex gap-2">
              <User size={18} />
              <span>Login</span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="btn btn-ghost btn-square md:hidden"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-base-100 border-t border-base-200 px-4 pt-3 pb-6 space-y-3 shadow-lg">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-lg text-base font-medium ${
                  isActive
                    ? "bg-primary text-white"
                    : "text-gray-700 hover:bg-base-200"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <div className="pt-2 sm:hidden">
            <Link
              to="/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn btn-primary w-full gap-2"
            >
              <User size={18} />
              Login / Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}