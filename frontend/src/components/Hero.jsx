import React from "react";

const Hero = ({ onOrderNow }) => {
  return (
    <section className="relative bg-black text-white">
      <img
        src="https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1974&auto=format&fit=crop"
        alt="THE HooK - appetizing hero"
        className="h-[52vh] w-full object-cover opacity-70 sm:h-[60vh]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10" />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
        <div className="mb-2 text-xs tracking-widest text-white/80">THE HooK</div>
        <h1 className="text-3xl font-extrabold sm:text-5xl">
          Skip the 30% Fee. Order Direct & Get 12% OFF.
        </h1>
        <p className="mt-3 max-w-md text-white/80 sm:text-lg">
          Fresh, hygienic, and fast delivery from our Cloud Kitchen.
        </p>
        <button
          onClick={onOrderNow}
          className="mt-5 rounded-full bg-[#4CAF50] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:brightness-110 active:scale-95 sm:text-base"
        >
          ORDER NOW & SAVE
        </button>
      </div>
    </section>
  );
};

export default Hero;
