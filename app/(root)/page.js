import Footer from "@/components/application/footer/fotter";
import Newsletter from "@/components/application/footer/newsletter";
import AboutComponent from "@/components/application/home/about";
import BestSeller from "@/components/application/home/BestSeller";
import Category from "@/components/application/home/categoy";
import DiscountCards from "@/components/application/home/DiscountCards";
import Header from "@/components/application/home/header";
import NewArrival from "@/components/application/home/new-arrival";
import FAQ from "@/components/application/testimonial/faq";
import HighlightsBar from "@/components/application/testimonial/HighlightsBar";
import Testimonials from "@/components/application/testimonial/reviews";

export default function Home() {
  return (
    <div>
      <Header />
      <Category />
      <DiscountCards />
      <AboutComponent />
      <BestSeller />
      <NewArrival />
      <Testimonials />
      <FAQ />
      <HighlightsBar />
      <Newsletter />
      <Footer />
    </div>
  );
}