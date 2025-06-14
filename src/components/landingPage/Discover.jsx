import React from 'react';
import HandMadeBanner from '../../assets/HomeMadeKitchen.png';

export default function Discover() {
  return (
    <section className="bg-white">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Left Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={HandMadeBanner}
            alt="Handmade kitchen"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left pr-[30%]">
          <p className="text-highlight text-xs uppercase tracking-widest mb-3">
            Quality craftsmanship from build to delivery
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-title mb-6">
            Discover the beauty of a handmade kitchen
          </h2>
          <p className="text-body text-base leading-relaxed mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget
            est sit amet sapien venenatis maximus vel in urna. Nam mauris arcu,
            feugiat in finibus vitae, sollicitudin id purus. Ut imperdiet, magna
            eu pharetra tincidunt, mauris purus ultrices.
          </p>
          <button className="bg-highlight text-black hover:text-white font-medium text-sm px-6 py-3 rounded-full border border-yellow-600 hover:bg-yellow-600 transition">
            ABOUT US
          </button>
        </div>
      </div>
    </section>
  );
}
