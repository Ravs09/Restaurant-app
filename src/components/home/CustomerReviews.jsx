import { Star, Quote, CheckCircle } from "lucide-react";

export default function CustomerReviews() {
  const reviews = [
    {
      id: 1,
      name: "Sarah Jenkins",
      role: "Verified Foodie",
      rating: 5,
      comment: "The Butter Chicken and garlic naan here are simply unmatched! Delivery was within 30 minutes, steaming hot and delicious.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 2,
      name: "David Miller",
      role: "Local Guide",
      rating: 5,
      comment: "Booked a table for our anniversary. The ambiance was incredible, and the staff treated us like royalty. 10/10 experience!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 3,
      name: "Ayesha Rahman",
      role: "Verified Diner",
      rating: 5,
      comment: "The Saffron Biryani took me back home. Rich flavors, perfectly tender meat, and very generous portions. Highly recommended!",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <section className="py-20 bg-base-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-bold uppercase tracking-wider text-sm mb-2">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            What Our Diners Say
          </h2>
          <p className="text-gray-600 mt-2">
            Real feedback from our happy food lovers and regular guests.
          </p>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div 
              key={review.id}
              className="bg-base-100 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-base-300 relative flex flex-col justify-between"
            >
              <Quote className="absolute top-6 right-6 text-primary/10 w-12 h-12" />

              <div>
                {/* 5-Star Rating */}
                <div className="flex gap-1 text-secondary mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-secondary" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-gray-700 italic text-sm leading-relaxed mb-6">
                  "{review.comment}"
                </p>
              </div>

              {/* User Bio */}
              <div className="flex items-center gap-3 pt-4 border-t border-base-200">
                <img 
                  src={review.avatar} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm flex items-center gap-1">
                    {review.name}
                    <CheckCircle size={14} className="text-success fill-success/20" />
                  </h4>
                  <p className="text-xs text-gray-400">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}