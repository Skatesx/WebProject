import React from 'react';
import visual11 from '../images/visual11.jpg'; // your imported image

const Hero = () => {
  return (
    <div
      className="relative text-center py-20 text-white h-[80vh] flex items-center justify-center"
      style={{
        backgroundImage: `url(${visual11})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Optional dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content above overlay */}
      <div className="relative z-10 max-w-3xl px-4">
        <h1 className="text-5xl font-bold mb-4">Kingdom Seekers 2025</h1>
        <p className="text-xl italic">
          "Seek first the kingdom of God..." – Matthew 6:33
        </p>
      </div>
    </div>
  );
};

export default Hero;
