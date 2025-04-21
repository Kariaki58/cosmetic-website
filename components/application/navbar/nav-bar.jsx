import Link from 'next/link';
import Image from 'next/image';
import NavLinks from './NavLinks';
import NavIcons from './NavIcons';
import MobileMenu from './MobileMenu';
import MobileBottomNav from './MobileBottomNav';

export default function Navbar() {
    return (
        <>
        <nav className="bg-white text-black sticky top-0 z-50 md:relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
                {/* Left: Logo */}
                <div className="flex-shrink-0 flex items-center">
                <Link href="/" className="flex items-center">
                    <div className="h-8 w-8 relative">
                    <Image 
                        src="/logo.png" 
                        alt="Beauty Shop Logo"
                        fill
                        className="object-contain"
                    />
                    </div>
                    <span className="ml-2 text-xl font-semibold">Beauty Shop</span>
                </Link>
                </div>

                {/* Center: Navigation Links (hidden on mobile) */}
                <div className="hidden md:flex flex-1 justify-center mx-4">
                <NavLinks />
                </div>

                {/* Right: Icons (hidden on mobile) */}
                <div className="hidden md:flex items-center justify-end">
                <NavIcons />
                </div>

                {/* Mobile menu button (visible only on mobile) */}
                <div className="md:hidden flex items-center">
                <MobileMenu />
                </div>
            </div>
            </div>
        </nav>

        {/* Mobile Bottom Navigation (visible only on mobile) */}
        <MobileBottomNav />
        </>
    );
}