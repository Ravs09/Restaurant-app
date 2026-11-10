import { createContext, useContext, useState, useEffect } from "react";

// Context তৈরি করা হলো
const CartContext = createContext();

export function CartProvider({ children }) {
  // পেজ লোড হলে localStorage থেকে আগের কার্টের ডেটা রিড করা
  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem("spicecraft_cart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error("Failed to load cart from storage:", error);
      return [];
    }
  });

  // যখনই কার্ট পরিবর্তন হবে, তখন তা localStorage-এ সেভ থাকবে
  useEffect(() => {
    localStorage.setItem("spicecraft_cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // খাবারে "Add to Cart" ক্লিক করার ফাংশন
  const addToCart = (food) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === food.id);
      if (existingItem) {
        // খাবারটি আগেই থাকলে শুধু পরিমাণ (quantity) ১ বাড়াবে
        return prevItems.map((item) =>
          item.id === food.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      // নতুন খাবার হলে quantity: 1 সহ কার্টে যোগ হবে
      return [...prevItems, { ...food, quantity: 1 }];
    });
  };

  // খাবারের পরিমাণ কমানো বা বাড়ানো
  const updateQuantity = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) => {
          if (item.id === id) {
            const newQuantity = item.quantity + delta;
            return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
          }
          return item;
        })
        .filter(Boolean) // quantity ০ হলে তা কার্ট থেকে রিমুভ হয়ে যাবে
    );
  };

  // খাবার পুরোপুরি কার্ট থেকে রিমুভ করা
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // কার্ট একদম খালি করা
  const clearCart = () => {
    setCartItems([]);
  };

  // কার্টে মোট কয়টি খাবার আছে তার হিসাব
  const totalItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // সাবটোটাল বিল হিসাব
  const subtotalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        totalItemsCount,
        subtotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// সহজে অন্য যেকোনো ফাইলে কার্ট ব্যবহার করার জন্য কাস্টম হুক
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}