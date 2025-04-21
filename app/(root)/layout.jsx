import Navbar from "@/components/application/navbar/nav-bar";

export default function RootLayout({ children }) {
    return (
        <main>
            <Navbar />
            {children}
        </main>
    );
}