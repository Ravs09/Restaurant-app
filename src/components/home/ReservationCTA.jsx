import { Link } from "react-router-dom";
import { Calendar, PhoneCall, ArrowRight } from "lucide-react";

export default function ReservationCTA() {
  return (
    <section className="py-16 bg-base-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary/5 border border-primary/20 rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="space-y-3 text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              Planning a Special Dinner or Family Celebration?
            </h3>
            <p className="text-gray-600 max-w-xl text-sm sm:text-base">
              Reserve your table in advance to avoid waiting. We ensure premium seating, personalized ambiance, and prompt service.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link to="/reservations" className="btn btn-primary btn-lg w-full sm:w-auto gap-2 shadow-lg shadow-primary/20">
              <Calendar size={20} />
              Reserve A Table Now
            </Link>
            
            <a href="tel:+8801712345678" className="btn btn-outline btn-lg w-full sm:w-auto gap-2">
              <PhoneCall size={20} />
              Call Directly
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}