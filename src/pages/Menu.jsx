import { useState, useMemo } from "react";
import FoodCard from "../components/food/FoodCard";
import { Search, SlidersHorizontal, Utensils, AlertCircle } from "lucide-react";

// Mock Food Items (Later fetched from Supabase)
const INITIAL_FOODS = [
  {
    id: 1,
    name: "Signature Butter Chicken",
    category: "Main Course",
    price: 16.99,
    rating: 4.9,
    reviewsCount: 142,
    description: "Tender chicken cooked in a rich, buttery, spiced tomato cream gravy.",
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=600&q=80",
    isAvailable: true,
    isSpicy: true,
  },
  {
    id: 2,
    name: "Royal Saffron Lamb Biryani",
    category: "Main Course",
    price: 19.99,
    rating: 5.0,
    reviewsCount: 210,
    description: "Fragrant aged basmati rice layered with slow-cooked marinated lamb and spices.",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80",
    isAvailable: true,
    isSpicy: true,
  },
  {
    id: 3,
    name: "Wood-Fired Truffle Pizza",
    category: "Main Course",
    price: 18.50,
    rating: 4.8,
    reviewsCount: 98,
    description: "Handcrafted crispy crust topped with fresh mozzarella, wild mushrooms & truffle oil.",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
    isAvailable: true,
    isSpicy: false,
  },
  {
    id: 4,
    name: "Smoked Angus Gourmet Burger",
    category: "Main Course",
    price: 14.50,
    rating: 4.9,
    reviewsCount: 175,
    description: "Double smashed prime beef patty, caramelized onions, melted cheddar & secret sauce.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
    isAvailable: true,
    isSpicy: false,
  },
  {
    id: 5,
    name: "Avocado Egg Benedict Toast",
    category: "Breakfast",
    price: 11.99,
    rating: 4.7,
    reviewsCount: 84,
    description: "Toasted sourdough bread layered with mashed avocado, poached eggs and hollandaise sauce.",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80",
    isAvailable: true,
    isSpicy: false,
  },
  {
    id: 6,
    name: "Fluffy Berry Pancake Stack",
    category: "Breakfast",
    price: 10.50,
    rating: 4.9,
    reviewsCount: 130,
    description: "Three golden fluffy buttermilk pancakes served with organic maple syrup and fresh berries.",
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=600&q=80",
    isAvailable: true,
    isSpicy: false,
  },
  {
    id: 7,
    name: "Crispy Golden Calamari",
    category: "Appetizers",
    price: 12.00,
    rating: 4.6,
    reviewsCount: 65,
    description: "Deep-fried tender squid rings dusted with paprika spice and served with garlic aioli.",
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80",
    isAvailable: true,
    isSpicy: false,
  },
  {
    id: 8,
    name: "Molten Belgian Chocolate Lava Cake",
    category: "Desserts",
    price: 8.99,
    rating: 5.0,
    reviewsCount: 312,
    description: "Warm chocolate sponge cake filled with liquid fudge, served alongside Madagascan vanilla ice cream.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80",
    isAvailable: true,
    isSpicy: false,
  },
  {
    id: 9,
    name: "Classic New York Cheesecake",
    category: "Desserts",
    price: 7.99,
    rating: 4.8,
    reviewsCount: 145,
    description: "Velvety smooth cream cheese baked over buttery graham cracker crust with strawberry coulis.",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80",
    isAvailable: false, // Marked as out of stock for testing
    isSpicy: false,
  },
  {
    id: 10,
    name: "Handcrafted Iced Caramel Macchiato",
    category: "Beverages",
    price: 5.50,
    rating: 4.9,
    reviewsCount: 189,
    description: "Freshly brewed espresso shots poured over iced milk and sweet vanilla, drizzled with caramel.",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
    isAvailable: true,
    isSpicy: false,
  },
  {
    id: 11,
    name: "Fresh Mint Lime Mojito",
    category: "Beverages",
    price: 4.99,
    rating: 4.8,
    reviewsCount: 92,
    description: "Refreshing crushed spearmint leaves, tangy lime juice, sparkling soda water and crushed ice.",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80",
    isAvailable: true,
    isSpicy: false,
  },
];

const CATEGORIES = ["All", "Breakfast", "Appetizers", "Main Course", "Desserts", "Beverages"];

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");

  // Handler for adding to cart (placeholder until CartContext is built)
  const handleAddToCart = (food) => {
    alert(`"${food.name}" added to cart!`);
  };

  // Filter and Sort Logic using useMemo for high performance
  const filteredFoods = useMemo(() => {
    return INITIAL_FOODS.filter((food) => {
      const matchesCategory =
        selectedCategory === "All" || food.category === selectedCategory;
      const matchesSearch =
        food.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        food.description.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0;
    });
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <div className="py-12 bg-base-200 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Banner Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-wider mb-3">
            <Utensils size={14} />
            <span>Discover Our Flavors</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight">
            Our Delicious Menu
          </h1>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            Prepared fresh to order with genuine ingredients, authentic herbs, and utmost culinary dedication.
          </p>
        </div>

        {/* Filter, Search & Sort Control Bar */}
        <div className="bg-base-100 p-4 sm:p-6 rounded-3xl shadow-sm border border-base-300 mb-10 space-y-4">
          
          {/* Top Row: Search input and Sort dropdown */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full sm:w-96">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search food by name or ingredient..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input input-bordered w-full pl-11 rounded-2xl bg-base-200/50 focus:bg-base-100 focus:border-primary transition-all text-sm"
              />
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
              <SlidersHorizontal size={18} className="text-gray-500 hidden sm:block" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="select select-bordered rounded-2xl bg-base-200/50 text-sm w-full sm:w-auto"
              >
                <option value="default">Sort By: Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated First</option>
              </select>
            </div>

          </div>

          {/* Bottom Row: Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`btn btn-sm rounded-xl font-semibold capitalize whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? "btn-primary shadow-md shadow-primary/20"
                    : "btn-ghost text-gray-600 hover:bg-base-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Food Items Grid or Empty State */}
        {filteredFoods.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredFoods.map((food) => (
              <FoodCard key={food.id} food={food} onAddToCart={handleAddToCart} />
            ))}
          </div>
        ) : (
          /* Empty State when no items match */
          <div className="text-center py-20 bg-base-100 rounded-3xl border border-base-300 max-w-md mx-auto p-8">
            <div className="w-16 h-16 rounded-full bg-error/10 text-error flex items-center justify-center mx-auto mb-4">
              <AlertCircle size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900">No Food Items Found</h3>
            <p className="text-gray-500 text-sm mt-1">
              We couldn't find any dishes matching "{searchQuery}". Try searching for something else or clearing filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="btn btn-outline btn-sm rounded-xl mt-6"
            >
              Clear All Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
}