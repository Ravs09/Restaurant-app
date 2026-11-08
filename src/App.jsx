import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Home from "./pages/Home";
import Menu from "./pages/Menu"; // <--- আসল Menu পেজ ইমপোর্ট করা হলো

// Temporary placeholder pages for remaining routes
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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="reservations" element={<Reservations />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}