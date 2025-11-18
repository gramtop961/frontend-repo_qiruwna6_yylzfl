import React, { useEffect, useState } from "react";

const Menu = ({ onAddToCart }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const base = import.meta.env.VITE_BACKEND_URL || "";

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await fetch(`${base}/menu`);
        const data = await res.json();
        setItems(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetchMenu();
  }, [base]);

  if (loading) return <div className="p-4 text-sm">Loading menu…</div>;

  return (
    <section id="menu" className="bg-white p-4">
      <h2 className="mb-3 text-xl font-bold text-black">Menu</h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {items.map((it) => (
          <div key={it._id || it.id} className="flex gap-3 rounded-lg border p-3">
            <img
              src={it.image_url || "https://images.unsplash.com/photo-1604908554007-62fd2d64d66f?q=80&w=1200&auto=format&fit=crop"}
              alt={it.name}
              className="h-20 w-20 rounded object-cover"
            />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-black">{it.name}</h4>
                <span className="text-[#4CAF50] font-semibold">₹{Number(it.price).toFixed(0)}</span>
              </div>
              <p className="mt-1 line-clamp-2 text-xs text-gray-600">{it.description}</p>
              <div className="mt-2 flex items-center gap-2">
                {it.veg ? (
                  <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-0.5 text-[10px] font-medium text-green-700">Veg</span>
                ) : (
                  <span className="inline-flex items-center gap-1 rounded-full bg-red-50 px-2 py-0.5 text-[10px] font-medium text-red-700">Non-Veg</span>
                )}
                <button
                  onClick={() => onAddToCart(it)}
                  className="ml-auto rounded-full bg-black px-3 py-1 text-xs text-white"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
