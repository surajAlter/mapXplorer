import React from "react";

const SponsorSection = () => (
  <aside className="max-w-md mx-auto bg-gradient-to-br from-white to-gray-100 border border-gray-200 p-6 shadow-2xl rounded-2xl space-y-5 text-center">
    <h2 className="text-2xl font-bold text-white bg-gradient-to-r from-blue-700 to-blue-500 py-3 rounded-md shadow">
      Sponsor Us
    </h2>
    <p className="text-gray-800 text-sm leading-relaxed">
      Reach <strong>11M+ users monthly</strong>. Only ₹40,000/year for a dedicated product page and
      <strong> 1,200 guaranteed impressions</strong>.
    </p>
    <button className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition shadow">
      Apply Now
    </button>
  </aside>
);

export default SponsorSection;
