import React from 'react';

const EventDetails = () => {
  return (
    <section className="bg-white text-gray-800 py-12 px-6 max-w-4xl mx-auto rounded-lg shadow-md mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Join Us This August!</h2>
      <p className="text-center mb-4 text-lg font-semibold">New Life Christian Center, ZOE Branch</p>
      <ul className="list-disc list-inside mb-4">
        <li>Friday 1st: 13:30–17:00</li>
        <li>Saturday 2nd: 08:30–17:00</li>
        <li>Monday 4th: 08:30–17:00</li>
      </ul>
      <p><strong>Quota:</strong> 120 children, ages 3–14</p>
      <p><strong>Deadline:</strong> Registration closes 27 July 2025 or when 400 kids register</p>
    </section>
  );
};

export default EventDetails;
