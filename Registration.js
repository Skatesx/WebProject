import React from 'react';

const Registration = () => {
  return (
    <section
      id="register"
      className="text-center py-12 px-6 max-w-xl mx-auto mt-10 bg-white shadow-md rounded-lg"
    >
      <h2 className="text-3xl font-bold mb-4">Register Now</h2>
      <p className="text-lg mb-6">
        Contact us to reserve your spot. Theme t-shirts also available for pre-order!
      </p>

      <div className="w-full">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScR0H_vwNtM-vVeJtPox7XscA9rxdg1uzMPbLK3hiqWzk6nlg/viewform?embedded=true"
          width="100%"
          height="2350"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="VBS Registration Form"
          className="w-full"
        >
          Loading…
        </iframe>
      </div>
    </section>
  );
};

export default Registration;
