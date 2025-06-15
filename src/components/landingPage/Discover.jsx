import React from 'react';
import HandMadeBanner from '../../assets/HomeMadeKitchen.png';

export default function Discover() {
  return (
    <section className="bg-white">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12">
        <div className="w-full lg:w-1/2">
          <img
            src={HandMadeBanner}
            alt="Handmade kitchen"
            className="w-full h-[30vh] lg:h-auto object-cover"
          />
        </div>

        <div className="w-full lg:w-1/2 text-center lg:text-left py-12 lg:py-0 px-6 sm:px-36 lg:pl-0 lg:pr-[5%]:pl-0 xl:pr-[15%]">
          <p className="font-roboto text-[#D4B254] text-sm md:text-[13px] text-xs uppercase tracking-widest mb-3">
            Quality craftsmanship from build to delivery
          </p>
          <h2 className="font-helveticaRounded text-[#222222] sm:text-3xl lg:[42px] mb-6">
            Discover the beauty of a handmade kitchen
          </h2>
          <p className="text-body text-base leading-relaxed mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget
            est sit amet sapien venenatis maximus vel in urna. Nam mauris arcu,
            feugiat in finibus vitae, sollicitudin id purus. Ut imperdiet, magna
            eu pharetra tincidunt, mauris purus ultrices.
          </p>
          <button className="font-roboto md:text-[15px] border border-[#D4B254] bg-white hover:bg-[#D4B254] text-[#D4B254] hover:text-white font-medium py-3 px-12 rounded-full transition">
            ABOUT US
          </button>
        </div>
      </div>
    </section>
  );
}
