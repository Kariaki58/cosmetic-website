import AboutComponent from "@/components/application/home/about";
import BestSeller from "@/components/application/home/BestSeller";
import Category from "@/components/application/home/categoy";
import DiscountCards from "@/components/application/home/DiscountCards";
import Header from "@/components/application/home/header";

export default function Home() {
  return (
    <div>
      <Header />
      <Category />
      <DiscountCards />
      <AboutComponent />
      <BestSeller />
    </div>
  );
}