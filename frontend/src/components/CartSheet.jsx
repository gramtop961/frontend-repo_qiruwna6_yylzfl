import React from "react";

const CartSheet = ({ cart, onClose, onCheckout }) => {
  const total = cart.reduce((sum, it) => sum + it.price * it.qty, 0);

  return (
    <div className="fixed inset-0 z-50 flex">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="ml-auto h-full w-[85%] max-w-sm bg-white p-4 shadow-xl">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-black">Your Cart</h3>
          <button onClick={onClose} className="text-sm text-gray-500">Close</button>
        </div>
        <div className="mt-4 space-y-3 overflow-y-auto">
          {cart.length === 0 && (
            <p className="text-sm text-gray-500">Your cart is empty</p>
          )}
          {cart.map((it) => (
            <div key={it._id || it.id} className="flex items-center justify-between text-sm">
              <div>
                <p className="font-medium text-black">{it.name}</p>
                <p className="text-gray-500">Qty: {it.qty}</p>
              </div>
              <div className="font-semibold text-black">₹{(it.price * it.qty).toFixed(0)}</div>
            </div>
          ))}
        </div>
        <div className="mt-4 border-t pt-4">
          <div className="flex items-center justify-between text-black">
            <span className="font-semibold">Total</span>
            <span className="text-lg font-bold">₹{total.toFixed(0)}</span>
          </div>
          <button
            onClick={() => onCheckout(total)}
            disabled={cart.length === 0}
            className="mt-3 w-full rounded-full bg-[#4CAF50] py-3 text-white disabled:opacity-50"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartSheet;
