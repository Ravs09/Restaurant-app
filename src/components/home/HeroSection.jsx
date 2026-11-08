import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Utensils, Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-base-200 py-16 lg:py-24">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-secondary/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm">
              <Sparkles size={16} />
              <span>Finest Quality & Exceptional Taste</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
              Savor Every Flavor, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Crafted With Passion
              </span>
            </h1>

            <p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Indulge in authentic recipes prepared with handpicked fresh ingredients. 
              Enjoy mouth-watering dishes delivered fast to your doorstep or reserved at our warm dining tables.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Link to="/menu" className="btn btn-primary btn-lg shadow-lg shadow-primary/30 w-full sm:w-auto gap-2">
                <Utensils size={20} />
                Order Food Now
                <ArrowRight size={18} />
              </Link>

              <Link to="/reservations" className="btn btn-outline btn-lg w-full sm:w-auto hover:bg-neutral hover:text-white">
                Book a Table
              </Link>
            </div>

            {/* Quick Trust Badges */}
            <div className="pt-8 border-t border-base-300 grid grid-cols-3 gap-4 text-center lg:text-left">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-gray-900">50+</p>
                <p className="text-xs sm:text-sm text-gray-500 font-medium">Delicious Dishes</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-gray-900">12k+</p>
                <p className="text-xs sm:text-sm text-gray-500 font-medium">Happy Diners</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-gray-900 flex items-center justify-center lg:justify-start gap-1">
                  4.9 <Star size={18} className="fill-secondary text-secondary" />
                </p>
                <p className="text-xs sm:text-sm text-gray-500 font-medium">Top Rated Food</p>
              </div>
            </div>
          </div>

          {/* Right Hero Image with Floating Badges */}
          <div className="relative flex justify-center items-center">
            {/* Glowing circle behind image */}
            <div className="w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full absolute -z-0" />

            {/* Main appetizing food image */}
            <img
              src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
              alt="Gourmet Dining Platter"
              className="w-full max-w-md sm:max-w-lg h-[350px] sm:h-[460px] object-cover rounded-3xl shadow-2xl z-10 hover:scale-[1.02] transition-transform duration-300"
            />

            {/* Floating Badge 1 (Special Offer) */}
            <div className="absolute top-4 -left-2 sm:left-4 z-20 bg-base-100 p-3 sm:p-4 rounded-2xl shadow-xl border border-base-300 flex items-center gap-3 animate-bounce">
              <span className="p-2 bg-accent/15 text-accent rounded-xl font-bold text-lg">
                20% OFF
              </span>
              <div>
                <p className="text-xs text-gray-500">First Order</p>
                <p className="text-sm font-bold text-gray-800">Use Code: SPICE20</p>
              </div>
            </div>

            {/* Floating Badge 2 (Fast Delivery) */}
            <div className="absolute -bottom-4 right-2 sm:right-6 z-20 bg-base-100 px-4 py-3 rounded-2xl shadow-xl border border-base-300 flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-success animate-ping" />
              <div>
                <p className="text-xs text-gray-500">Fast Express</p>
                <p className="text-sm font-bold text-gray-800">30 Min Delivery</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}