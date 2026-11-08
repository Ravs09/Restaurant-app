import { Link } from "react-router-dom";
import { Tag, Sparkles, ArrowRight } from "lucide-react";

export default function SpecialOffers() {
  return (
    <section className="py-16 bg-base-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-neutral to-gray-900 text-white shadow-2xl p-8 sm:p-12 lg:p-16">
          
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 w-64 h-64 rounded-full bg-secondary/15 blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
            
            {/* Offer Info */}
            <div className="space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 text-secondary font-semibold text-xs uppercase tracking-wider">
                <Sparkles size={14} />
                <span>Limited Time Deal</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                Get <span className="text-secondary">25% OFF</span> On All Weekend Family Platters!
              </h2>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-lg">
                Gather your family and friends. Enjoy our award-winning grilled platters with aromatic rice, handcrafted dips, and beverages at an unbeatable price.
              </p>

              {/* Promo code badge */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20">
                  <Tag size={18} className="text-secondary" />
                  <span className="text-xs text-gray-300">Coupon Code:</span>
                  <span className="font-mono font-bold text-white tracking-widest">FEAST25</span>
                </div>

                <Link to="/menu" className="btn btn-primary gap-2">
                  Claim Offer <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Offer Image */}
            <div className="flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=700&q=80" 
                alt="Family BBQ Feast" 
                className="rounded-2xl shadow-xl w-full max-w-md h-72 sm:h-80 object-cover border-2 border-white/10 hover:scale-105 transition-transform duration-300"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}