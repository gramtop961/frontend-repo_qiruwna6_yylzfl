import React, { useEffect, useMemo, useState } from "react";
import Hero from "./components/Hero";
import StickyCTA from "./components/StickyCTA";
import SocialProof from "./components/SocialProof";
import About from "./components/About";
import Menu from "./components/Menu";
import CartSheet from "./components/CartSheet";
import Checkout from "./components/Checkout";
import WhatsAppButton from "./components/WhatsAppButton";

const App = () => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const base = import.meta.env.VITE_BACKEND_URL || "";

  const handleAddToCart = (item) => {
    setCart((c) => {
      const exists = c.find((x) => (x._id || x.id) === (item._id || item.id));
      if (exists) return c.map((x) => (x._id || x.id) === (item._id || item.id) ? { ...x, qty: x.qty + 1 } : x);
      return [...c, { ...item, qty: 1 }];
    });
    setShowCart(true);
  };

  const total = useMemo(() => cart.reduce((sum, it) => sum + it.price * it.qty, 0), [cart]);

  const startCheckout = () => {
    setShowCart(false);
    setShowCheckout(true);
  };

  const placeOrder = async (guestForm) => {
    // Build order payload
    const items = cart.map((it) => ({ menu_item_id: it._id || it.id, quantity: it.qty }));
    const guest_details = {
      name: guestForm.name,
      phone: guestForm.phone,
      email: guestForm.email || undefined,
      addresses: [
        {
          line1: guestForm.address,
          city: guestForm.city,
          state: "",
          pincode: guestForm.pincode,
          is_default: true,
        },
      ],
    };

    try {
      const res = await fetch(`${base}/orders`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items, guest_details }),
      });
      const order = await res.json();

      // Placeholder payment create + confirm
      const payRes = await fetch(`${base}/payments/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ order_amount: order.total_amount, currency: "INR" }),
      });
      const payment = await payRes.json();

      await fetch(`${base}/payments/confirm`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ order_id: order._id || order.id, payment_id: payment.payment_id }),
      });

      alert("Order placed! We'll start preparing your food. Check SMS/WhatsApp for updates.");
      setShowCheckout(false);
      setCart([]);
    } catch (e) {
      console.error(e);
      alert("Something went wrong. Please try again.");
    }
  };

  useEffect(() => {
    // Optional: prefetch menu
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      <Hero onOrderNow={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })} />
      <SocialProof />
      <About />
      <Menu onAddToCart={handleAddToCart} />

      {showCart && (
        <CartSheet cart={cart} onClose={() => setShowCart(false)} onCheckout={startCheckout} />
      )}

      {showCheckout && (
        <Checkout cart={cart} total={total} onBack={() => setShowCheckout(false)} onPlaceOrder={placeOrder} />
      )}

      <StickyCTA onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })} />
      <WhatsAppButton />
    </div>
  );
};

export default App;
