import Navbar from "@/components/application/navbar/nav-bar";
import FAQ from "@/components/application/testimonial/faq";
import HighlightsBar from "@/components/application/testimonial/HighlightsBar";
import Testimonials from "@/components/application/testimonial/reviews";
import Footer from "@/components/application/footer/fotter";
import Newsletter from "@/components/application/footer/newsletter";


export default function RootLayout({ children }) {
    return (
        <main>
            <Navbar />
            {children}
            <Testimonials />
            <FAQ />
            <HighlightsBar />
            <Newsletter />
            <Footer />
        </main>
    );
}