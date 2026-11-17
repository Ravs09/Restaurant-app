import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { Trash2, Plus, Minus, ArrowRight, ArrowLeft, ShoppingBag } from "lucide-react";

export default function Cart() {
  const { cartItems, updateQuantity, removeFromCart, clearCart, subtotalPrice } = useCart();

  // Delivery fee logic: Free delivery over $40, otherwise $4.99
  const deliveryFee = subtotalPrice > 40 || subtotalPrice === 0 ? 0 : 4.99;
  const grandTotal = subtotalPrice + deliveryFee;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-base-200 px-4 py-16 text-center">
        <div className="w-20 h-20 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
          <ShoppingBag size={40} />
        </div>
        <h2 className="text-3xl font-extrabold text-gray-900">Your Cart is Empty</h2>
        <p className="text-gray-500 mt-2 max-w-sm">
          Looks like you haven't added any delicious food items to your cart yet.
        </p>
        <Link to="/menu" className="btn btn-primary mt-6 gap-2">
          <ArrowLeft size={18} /> Browse Our Menu
        </Link>
      </div>
    );
  }

  return (
    <div className="py-12 bg-base-200 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Title */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-base-300 mb-8 gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-black text-gray-900">
              Shopping Cart
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              Review your selected delicious dishes before proceeding to checkout.
            </p>
          </div>
          <button
            onClick={clearCart}
            className="btn btn-ghost btn-sm text-error hover:bg-error/10 gap-1.5"
          >
            <Trash2 size={16} /> Clear Cart
          </button>
        </div>

        {/* Cart Layout: Left Table + Right Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left: Cart Items List */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-base-100 p-4 sm:p-5 rounded-3xl shadow-sm border border-base-300 flex flex-col sm:flex-row items-center gap-4 justify-between"
              >
                {/* Image and Info */}
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover shrink-0"
                  />
                  <div>
                    <span className="badge badge-sm badge-secondary text-xs font-semibold mb-1">
                      {item.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900">
                      {item.name}
                    </h3>
                    <p className="text-sm font-semibold text-primary mt-1">
                      ${item.price.toFixed(2)} each
                    </p>
                  </div>
                </div>

                {/* Quantity Control & Remove */}
                <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-base-200">
                  {/* Quantity Stepper */}
                  <div className="flex items-center bg-base-200 rounded-2xl p-1 border border-base-300">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="btn btn-ghost btn-xs btn-square rounded-xl"
                      title="Decrease quantity"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="px-3 font-bold text-sm text-gray-800">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="btn btn-ghost btn-xs btn-square rounded-xl"
                      title="Increase quantity"
                    >
                      <Plus size={14} />
                    </button>
                  </div>

                  {/* Line Total */}
                  <div className="text-right min-w-[70px]">
                    <span className="text-lg font-black text-gray-900">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="btn btn-ghost btn-circle btn-sm text-gray-400 hover:text-error hover:bg-error/10"
                    title="Remove item"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}

            <div className="pt-4">
              <Link to="/menu" className="btn btn-ghost gap-2 text-primary">
                <ArrowLeft size={18} /> Continue Ordering Food
              </Link>
            </div>
          </div>

          {/* Right: Order Bill Summary Card */}
          <div className="lg:col-span-1">
            <div className="bg-base-100 p-6 sm:p-8 rounded-3xl shadow-sm border border-base-300 sticky top-28 space-y-6">
              <h2 className="text-xl font-black text-gray-900 border-b border-base-200 pb-4">
                Order Summary
              </h2>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span className="font-bold text-gray-900">${subtotalPrice.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>Delivery Fee</span>
                  <span className="font-bold text-gray-900">
                    {deliveryFee === 0 ? (
                      <span className="text-success font-bold">FREE</span>
                    ) : (
                      `$${deliveryFee.toFixed(2)}`
                    )}
                  </span>
                </div>

                {subtotalPrice < 40 && (
                  <p className="text-xs text-secondary bg-secondary/10 p-2.5 rounded-xl">
                    Add ${(40 - subtotalPrice).toFixed(2)} more to qualify for <b>FREE Delivery</b>!
                  </p>
                )}

                <div className="border-t border-base-200 pt-4 flex justify-between text-lg font-black text-gray-900">
                  <span>Total Bill</span>
                  <span className="text-2xl text-primary">${grandTotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <Link to="/checkout" className="btn btn-primary btn-block btn-lg rounded-2xl gap-2 shadow-lg shadow-primary/25">
                Proceed to Checkout <ArrowRight size={18} />
              </Link>

              <p className="text-[11px] text-gray-400 text-center">
                Taxes and discounts are calculated during checkout.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}