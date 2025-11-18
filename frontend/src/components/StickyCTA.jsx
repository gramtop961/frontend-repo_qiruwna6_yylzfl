import React from "react";

const StickyCTA = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed inset-x-0 bottom-3 z-40 mx-3 rounded-full bg-[#4CAF50] py-3 text-center text-sm font-semibold text-white shadow-xl sm:hidden"
    >
      ORDER NOW & SAVE
    </button>
  );
};

export default StickyCTA;
