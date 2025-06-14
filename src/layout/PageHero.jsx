import React from 'react';

export default function PageHero({ media }) {
  return (
    <div className="relative h-screen w-full flex items-center justify-center text-white overflow-hidden px-6 sm:px-12">
      {/* Background Image */}
      <img
        src={media}
        alt="Kitchen background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* <div className="absolute inset-0 bg-black bg-opacity-50" /> */}

      <div className="relative z-10 max-w-4xl text-center">
        <p className="text-sm sm:text-base mb-2 uppercase tracking-widest">
          Design and order your new kitchen online today
        </p>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold mb-6 leading-tight">
          Bespoke & made to measure
          <br className="block" />
          handmade kitchen design
        </h1>

        <button className="bg-[#D4B254] text-white font-medium py-3 px-6 rounded-full transition">
          ORDER NOW
        </button>
      </div>
    </div>
  );
}
