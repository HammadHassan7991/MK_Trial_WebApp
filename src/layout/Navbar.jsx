import { useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import Logo from '../assets/Logo.svg';
import FacebookIcon from '../assets/Facebook.svg';
import TwitterIcon from '../assets/Twitter.svg';
import InstagramIcon from '../assets/Instagram.svg';
import CartIcon from '../assets/shopping-cart.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-4 sm:px-10 pt-6">
      <div className="max-w-7xl mx-auto w-full border-b border-white/20 pb-4 flex items-center justify-between">
        {/* Left: Icons + Links */}
        <div className="flex items-center gap-10 text-white">
          {/* Social Icons */}
          <div className="flex gap-3">
            <img
              src={FacebookIcon}
              alt="Facebook"
              className="w-4 h-4 cursor-pointer hover:opacity-80 bg-transparent"
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
          <div className="hidden md:flex gap-6 font-roboto text-sm md:text-[13px] tracking-wider uppercase">
            <a href="/shop" className="hover:text-highlight">
              Shop
            </a>
            <a
              href="/planmykitchen"
              className="font-roboto text-sm md:text-[13px]"
            >
              Plan My Kitchen
            </a>
          </div>
        </div>

        {/* Center: Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <img src={Logo} alt="Logo" className="h-6 sm:h-8" />
        </div>

        {/* Right: Links + Button */}
        <div className="flex items-center gap-10 text-white">
          <div className="hidden md:flex gap-6 text-xs tracking-wider uppercase">
            <a href="/about" className="font-roboto text-sm md:text-[13px]">
              About Us
            </a>
            <a href="/gallery" className="font-roboto text-sm md:text-[13px]">
              Gallery
            </a>
          </div>
          <button className="font-roboto text-sm md:text-[13px] border border-white hover:border-[#D4B254] bg-transparent hover:bg-[#D4B254] text-white hover:text-white px-6 py-1.5 rounded-full flex items-center gap-2 uppercase tracking-wide transition">
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
