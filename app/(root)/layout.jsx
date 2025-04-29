import Navbar from "@/components/application/navbar/nav-bar";
import Footer from "@/components/application/footer/fotter";
import Newsletter from "@/components/application/footer/newsletter";
import HighlightsBar from "@/components/application/testimonial/HighlightsBar";



export default function RootLayout({ children }) {
    return (
        <main>
            <Navbar />
            {children}
            <HighlightsBar />
            <Newsletter />
            <Footer />
        </main>
    );
}