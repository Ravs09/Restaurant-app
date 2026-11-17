import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext"; // <-- CartProvider
import MainLayout from "./components/layout/MainLayout";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart"; // <-- Cart Page

// Temporary placeholder pages
function Checkout() {
  return (
    <div className="py-24 text-center">
      <h1 className="text-4xl font-extrabold text-primary">Checkout Page</h1>
      <p className="mt-4 text-gray-600">We will build this checkout form in the next step.</p>
    </div>
  );
}

function Reservations() {
  return (
    <div className="py-24 text-center">
      <h1 className="text-4xl font-extrabold">Book a Table</h1>
      <p className="mt-4 text-gray-600">Reserve your dining table online in seconds.</p>
    </div>
  );
}

function About() {
  return (
    <div className="py-24 text-center">
      <h1 className="text-4xl font-extrabold">About SpiceCraft</h1>
      <p className="mt-4 text-gray-600">Our culinary journey and dedication to great food.</p>
    </div>
  );
}

function Contact() {
  return (
    <div className="py-24 text-center">
      <h1 className="text-4xl font-extrabold">Contact Us</h1>
      <p className="mt-4 text-gray-600">Get in touch with us for inquiries and reservations.</p>
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="menu" element={<Menu />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="reservations" element={<Reservations />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}