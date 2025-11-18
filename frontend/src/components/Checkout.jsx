import React, { useState } from "react";

const Checkout = ({ cart, total, onBack, onPlaceOrder }) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    pincode: "",
  });

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  return (
    <div className="fixed inset-0 z-50 bg-white p-4">
      <button onClick={onBack} className="text-sm text-gray-600">← Back</button>
      <h3 className="mt-2 text-xl font-bold text-black">Checkout</h3>
      <div className="mt-4 space-y-3">
        <input className="w-full rounded border p-3 text-sm" placeholder="Name" value={form.name} onChange={(e) => update("name", e.target.value)} />
        <input className="w-full rounded border p-3 text-sm" placeholder="Phone" value={form.phone} onChange={(e) => update("phone", e.target.value)} />
        <input className="w-full rounded border p-3 text-sm" placeholder="Email (optional)" value={form.email} onChange={(e) => update("email", e.target.value)} />
        <input className="w-full rounded border p-3 text-sm" placeholder="Address" value={form.address} onChange={(e) => update("address", e.target.value)} />
        <div className="flex gap-2">
          <input className="w-1/2 rounded border p-3 text-sm" placeholder="City" value={form.city} onChange={(e) => update("city", e.target.value)} />
          <input className="w-1/2 rounded border p-3 text-sm" placeholder="Pincode" value={form.pincode} onChange={(e) => update("pincode", e.target.value)} />
        </div>
      </div>

      <div className="mt-6 rounded-lg bg-gray-50 p-3">
        <div className="flex items-center justify-between text-black">
          <span>Total</span>
          <span className="text-lg font-bold">₹{total.toFixed(0)}</span>
        </div>
        <p className="mt-2 text-xs text-gray-600">Guest checkout now. Create an account after confirmation.</p>
      </div>

      <button
        onClick={() => onPlaceOrder(form)}
        className="mt-4 w-full rounded-full bg-[#4CAF50] py-3 text-white"
      >
        Pay & Place Order (Placeholder)
      </button>
    </div>
  );
};

export default Checkout;
