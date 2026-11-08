import { Star, ShoppingBag, Flame } from "lucide-react";

export default function FoodCard({ food, onAddToCart }) {
  const {
    id,
    name,
    category,
    price,
    rating,
    reviewsCount,
    description,
    image,
    isAvailable = true,
    isSpicy = false,
  } = food;

  return (
    <div className="card bg-base-100 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-base-300 overflow-hidden flex flex-col justify-between group">
      
      {/* Food Image with Badges */}
      <div className="relative h-56 overflow-hidden bg-base-200">
        <img
          src={image}
          alt={name}
          className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${
            !isAvailable ? "grayscale opacity-60" : ""
          }`}
        />

        {/* Category Badge */}
        <span className="badge badge-neutral bg-neutral/80 text-white backdrop-blur-md text-xs font-semibold absolute top-3 left-3 shadow">
          {category}
        </span>

        {/* Spicy Indicator Badge */}
        {isSpicy && (
          <span className="badge badge-accent text-white gap-1 text-xs font-bold absolute top-3 right-3 shadow">
            <Flame size={12} className="fill-white" /> Spicy
          </span>
        )}

        {/* Out of stock overlay */}
        {!isAvailable && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <span className="bg-error text-white font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wider">
              Out of Stock
            </span>
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="p-5 flex flex-col flex-grow justify-between">
        <div>
          {/* Rating */}
          <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-700 mb-2">
            <Star size={15} className="fill-secondary text-secondary" />
            <span>{rating.toFixed(1)}</span>
            <span className="text-gray-400 font-normal">({reviewsCount} reviews)</span>
          </div>

          {/* Food Title */}
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors line-clamp-1">
            {name}
          </h3>

          {/* Description */}
          <p className="text-gray-500 text-xs mt-1.5 line-clamp-2 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Price & Add to Cart Action */}
        <div className="flex items-center justify-between pt-4 mt-4 border-t border-base-200">
          <div>
            <span className="text-[11px] text-gray-400 uppercase font-semibold block">Price</span>
            <span className="text-xl font-black text-gray-900">
              ${price.toFixed(2)}
            </span>
          </div>

          <button
            onClick={() => onAddToCart && onAddToCart(food)}
            disabled={!isAvailable}
            className="btn btn-primary btn-sm rounded-xl gap-1.5 shadow-md shadow-primary/20 hover:scale-105 active:scale-95 transition-transform disabled:opacity-50"
            title="Add to Cart"
          >
            <ShoppingBag size={16} />
            <span>Add</span>
          </button>
        </div>
      </div>

    </div>
  );
}