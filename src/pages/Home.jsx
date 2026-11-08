import HeroSection from "../components/home/HeroSection";
import WhyChooseUs from "../components/home/WhyChooseUs";
import FeaturedFoods from "../components/home/FeaturedFoods";
import SpecialOffers from "../components/home/SpecialOffers";
import CustomerReviews from "../components/home/CustomerReviews";
import ReservationCTA from "../components/home/ReservationCTA";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <WhyChooseUs />
      <FeaturedFoods />
      <SpecialOffers />
      <CustomerReviews />
      <ReservationCTA />
    </div>
  );
}