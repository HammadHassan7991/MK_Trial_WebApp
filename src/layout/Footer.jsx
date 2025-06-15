import Logo from '../assets/Logo.svg';
import FacebookIcon from '../assets/Facebook.svg';
import TwitterIcon from '../assets/Twitter.svg';
import InstagramIcon from '../assets/Instagram.svg';

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Logo */}
        <img src={Logo} alt="Logo" className="mx-auto mb-10 h-6" />

        {/* Link Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm mb-12">
          {/* About */}
          <div>
            <h4 className="uppercase mb-4 font-semibold text-sm">About</h4>
            <ul className="space-y-2">
              <li>
                <a href="#">Shop</a>
              </li>
              <li>
                <a href="#">Plan My Kitchen</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Gallery</a>
              </li>
            </ul>
          </div>

          {/* Service */}
          <div>
            <h4 className="uppercase mb-4 font-semibold text-sm">Service</h4>
            <ul className="space-y-2">
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">How to Buy</a>
              </li>
              <li>
                <a href="#">Downloads</a>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="uppercase mb-4 font-semibold text-sm">Info</h4>
            <ul className="space-y-2">
              <li>
                <a href="#">Delivery</a>
              </li>
              <li>
                <a href="#">Terms</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
            </ul>
          </div>

          {/* Follow */}
          <div>
            <h4 className="uppercase mb-4 font-semibold text-sm">Follow</h4>
            <div className="flex gap-4 justify-center sm:justify-start">
              <a href="#" className="bg-white p-2 rounded-full">
                <img src={FacebookIcon} alt="Facebook" className="w-4 h-4" />
              </a>
              <a href="#" className="bg-white p-2 rounded-full">
                <img src={TwitterIcon} alt="Twitter" className="w-4 h-4" />
              </a>
              <a href="#" className="bg-white p-2 rounded-full">
                <img src={InstagramIcon} alt="Instagram" className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-400">
          © Online MK Home Kitchens 2024. All rights reserved.
        </p>
        <p className="text-xs text-gray-500 mt-1">
          Responsive website design. Development & hosting by MK.
        </p>
      </div>
    </footer>
  );
}
