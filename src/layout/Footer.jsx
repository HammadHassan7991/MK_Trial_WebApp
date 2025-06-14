import React from 'react';

export default function Footer() {
  return (
    <div className="relative h-screen w-full flex items-center justify-center md:justify-start text-white overflow-hidden px-6 sm:px-12">
      <img
        src={media}
        alt="Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Container */}
      <div className="relative z-10 max-w-4xl text-center md:text-left">
        <p className="text-sm sm:text-base mb-2">
          No lines. Less hassle. Lower costs.
        </p>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-medium mb-4 leading-tight">
          Easy Online Suboxone Treatment for Opioid Addiction
        </h1>
        <Button snippet={'Download The App Today'} />
      </div>
    </div>
  );
}
