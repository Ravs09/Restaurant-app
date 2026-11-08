import { Link } from "react-router-dom";
import { Star, ShoppingBag, ArrowRight } from "lucide-react";

export default function FeaturedFoods() {
  // Sample popular dishes (later we will load these dynamically from Supabase database)
  const featuredItems = [
    {
      id: 1,
      name: "Signature Butter Chicken",
      category: "Main Course",
      price: 16.99,
      rating: 4.9,
      reviewsCount: 142,
      description: "Tender chicken cooked in a rich, buttery, spiced tomato cream gravy.",
      image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 2,
      name: "Royal Saffron Lamb Biryani",
      category: "Rice Specialties",
      price: 19.99,
      rating: 5.0,
      reviewsCount: 210,
      description: "Fragrant basmati rice layered with tender spiced lamb and pure saffron.",
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 3,
      name: "Wood-Fired Truffle Pizza",
      category: "Pizza",
      price: 18.50,
      rating: 4.8,
      reviewsCount: 98,
      description: "Crispy crust topped with mozzarella, wild mushrooms, and black truffle drizzle.",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 4,
      name: "Smoked Angus Gourmet Burger",
      category: "Burgers",
      price: 14.50,
      rating: 4.9,
      reviewsCount: 175,
      description: "Double smashed prime beef patty, caramelized onions, melted cheddar & secret sauce.",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <section className="py-20 bg-base-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <p className="text-primary font-bold uppercase tracking-wider text-sm mb-2">
              Customer Favorites
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Popular Dishes This Week
            </h2>
            <p className="text-gray-600 mt-2">
              Hand-crafted with love, perfected by our master culinary artists.
            </p>
          </div>

          <Link 
            to="/menu" 
            className="mt-4 md:mt-0 inline-flex items-center gap-2 font-bold text-primary hover:text-accent transition-colors"
          >
            Explore Full Menu <ArrowRight size={18} />
          </Link>
        </div>

        {/* Food Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredItems.map((item) => (
            <div 
              key={item.id} 
              className="card bg-base-100 shadow-md hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden border border-base-300 group"
            >
              {/* Food Image with Category Badge */}
              <div className="relative h-52 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <span className="badge badge-secondary font-bold text-xs absolute top-3 left-3 shadow">
                  {item.category}
                </span>
              </div>

              {/* Card Body */}
              <div className="card-body p-5">
                {/* Rating */}
                <div className="flex items-center gap-1 text-sm font-semibold text-gray-700">
                  <Star size={16} className="fill-secondary text-secondary" />
                  <span>{item.rating}</span>
                  <span className="text-gray-400 font-normal">({item.reviewsCount})</span>
                </div>

                {/* Title */}
                <h3 className="card-title text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">
                  {item.name}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-xs line-clamp-2 leading-relaxed">
                  {item.description}
                </p>

                {/* Price and Cart Button */}
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-base-300">
                  <div>
                    <span className="text-xs text-gray-400 block">Price</span>
                    <span className="text-xl font-black text-gray-900">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>

                  <button 
                    className="btn btn-primary btn-sm rounded-xl gap-1.5 shadow-md shadow-primary/20 hover:scale-105 active:scale-95 transition-transform"
                    title="Add to Cart"
                  >
                    <ShoppingBag size={16} />
                    <span>Add</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}