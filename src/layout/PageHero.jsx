import React from 'react';

export default function PageHero({ media }) {
  return (
    <div className="relative h-[60vh] md:h-[70vh] lg:h-[85vh] w-full flex items-center justify-center text-white overflow-hidden px-6 sm:px-12">
      <img
        src={media}
        alt="Kitchen background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-10 max-w-4xl text-center">
        <p className="font-roboto text-xs sm:text-sm md:text-[13px]  mb-2 uppercase tracking-widest">
          Design and order your new kitchen online today
        </p>

        <h1 className="font-helveticaRounded text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Bespoke & made to measure
          <br className="block" />
          handmade kitchen design
        </h1>

        <button className="font-roboto text-xs sm:text-sm md:text-[15px] border border-[#D4B254] bg-white hover:bg-[#D4B254] text-[#D4B254] hover:text-white font-medium py-3 px-12 rounded-full transition">
          ORDER NOW
        </button>
      </div>
    </div>
  );
}
