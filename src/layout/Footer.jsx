import Logo from '../assets/Logo.svg';
import HeroBanner from '../assets/HeroBanner.jpg';
import FacebookIcon from '../assets/fb.svg';
import TwitterIcon from '../assets/tw.svg';
import InstagramIcon from '../assets/inst.svg';

export default function Footer() {
  return (
    <footer className="relative text-white min-h-[500px] px-4 flex items-center justify-center">
      {/* Background Image */}
      <img
        src={HeroBanner}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/80 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full text-center px-4 sm:px-10">
        {/* Logo */}
        <div className="flex items-center justify-center mb-10">
          <div className="flex-grow border-t border-white/30 px-4 sm:px-10"></div>
          <img src={Logo} alt="Logo" className="mx-6 h-6" />
          <div className="flex-grow border-t border-white/30 px-4 sm:px-10"></div>
        </div>

        {/* Link Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm mb-12">
          {/* About */}
          <div>
            <h4 className="uppercase mb-4 font-helveticaRounded text-lg md:text-2xl">
              About
            </h4>
            <ul className="space-y-2 font-roboto text-sm md:text-[13px]">
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
            <h4 className="uppercase mb-4 font-helveticaRounded text-lg md:text-2xl">
              Service
            </h4>
            <ul className="space-y-2 font-roboto text-sm md:text-[13px]">
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
            <h4 className="uppercase mb-4 font-helveticaRounded text-lg md:text-2xl">
              Info
            </h4>
            <ul className="space-y-2 font-roboto text-sm md:text-[13px]">
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
            <h4 className="uppercase mb-4 font-helveticaRounded text-lg md:text-2xl">
              Follow
            </h4>
            <div className="flex gap-2 justify-center">
              <a href="#" className="p-2 rounded-full">
                <img src={FacebookIcon} alt="Facebook" className="w-8 h-8" />
              </a>
              <a href="#" className="p-2 rounded-full">
                <img src={TwitterIcon} alt="Twitter" className="w-8 h-8" />
              </a>
              <a href="#" className="p-2 rounded-full">
                <img src={InstagramIcon} alt="Instagram" className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <p className="font-roboto text-sm md:text-[13px] opacity-50">
          © Online MK Home Kitchens 2024. All rights reserved.
        </p>
        <p className="font-roboto text-sm md:text-[13px] mt-1 opacity-50">
          Responsive website design. Development & hosting by MK.
        </p>
      </div>
    </footer>
  );
}
