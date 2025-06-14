import { useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import Logo from '../assets/Logo.svg';
import FacebookIcon from '../assets/Facebook.svg';
import TwitterIcon from '../assets/Twitter.svg';
import InstagramIcon from '../assets/Instagram.svg';
import CartIcon from '../assets/shopping-cart.svg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-4 sm:px-10 pt-6">
      <div className="max-w-7xl mx-auto w-full border-b border-white/20 pb-4 flex items-center justify-between">
        {/* Left: Icons + Links */}
        <div className="flex items-center gap-6 text-white">
          {/* Social Icons */}
          <div className="flex gap-3">
            <img
              src={FacebookIcon}
              alt="Facebook"
              className="w-4 h-4 cursor-pointer hover:opacity-80"
            />
            <img
              src={TwitterIcon}
              alt="Twitter"
              className="w-4 h-4 cursor-pointer hover:opacity-80"
            />
            <img
              src={InstagramIcon}
              alt="Instagram"
              className="w-4 h-4 cursor-pointer hover:opacity-80"
            />
          </div>
          {/* Left Nav Links */}
          <div className="hidden md:flex gap-6 text-xs tracking-wider uppercase">
            <a href="#" className="hover:text-highlight">
              Shop
            </a>
            <a href="#" className="hover:text-highlight">
              Plan My Kitchen
            </a>
          </div>
        </div>

        {/* Center: Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <img src={Logo} alt="Logo" className="h-6 sm:h-8" />
        </div>

        {/* Right: Links + Button */}
        <div className="flex items-center gap-6 text-white">
          <div className="hidden md:flex gap-6 text-xs tracking-wider uppercase">
            <a href="#" className="hover:text-highlight">
              About Us
            </a>
            <a href="#" className="hover:text-highlight">
              Gallery
            </a>
          </div>
          <button className="border border-white hover:border-black px-5 py-1.5 rounded-full flex items-center gap-2 text-xs uppercase tracking-wide hover:bg-black hover:text-white transition">
            My Order
            <img src={CartIcon} alt="Cart" className="w-4 h-4" />
          </button>
          {/* Hamburger for mobile */}
          <div className="md:hidden">
            <Hamburger toggled={isOpen} toggle={toggleSidebar} color="white" />
          </div>
        </div>
      </div>
    </nav>
  );
}
