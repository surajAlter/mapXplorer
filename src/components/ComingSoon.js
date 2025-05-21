import React from 'react';

const ComingSoon = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-blue-400 to-purple-400 text-white text-center p-4">
      <h1 className="text-5xl font-bold mb-4">Coming Soon</h1>
      <p className="text-lg mb-6">We are working hard to launch our new website!</p>
      <button className="bg-white text-blue-500 font-semibold py-2 px-6 rounded-full shadow-md hover:bg-gray-200 transition-all duration-300">
        Notify Me
      </button>
    </div>
  );
};

export default ComingSoon;
