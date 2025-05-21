import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const feedbacks = [
  "Great service, highly recommend!",
  "Amazing maps, very detailed!",
  "Helped me a lot in my research!",
  "Accurate and up-to-date information.",
  "Best website for Indian maps!",
  "Easy to use and very informative.",
  "I love the interactive features!",
  "Best resource for travelers!",
  "Highly detailed and useful maps!"
];

const ClientFeedback = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 2) % feedbacks.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-10 px-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        What Our Clients Say
      </h2>

      <motion.div className="relative flex justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
          >
            {[feedbacks[index], feedbacks[(index + 1) % feedbacks.length]].map((comment, idx) => (
              <div
                key={idx}
                className="bg-white shadow-lg rounded-xl p-6 text-center border border-gray-200"
              >
                <p className="text-gray-700 mt-2 italic">"{comment}"</p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ClientFeedback;
