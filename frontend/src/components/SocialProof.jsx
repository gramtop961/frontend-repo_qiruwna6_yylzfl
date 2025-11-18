import React from "react";

const SocialProof = () => {
  return (
    <section className="bg-white px-4 py-8 text-center">
      <h3 className="text-lg font-semibold text-black">4.8 Stars from 1000+ happy customers</h3>
      <p className="mt-1 text-sm text-gray-600">Across major platforms</p>
      <div className="mt-4 flex justify-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className="text-[#4CAF50]">★</span>
        ))}
      </div>
    </section>
  );
};

export default SocialProof;
