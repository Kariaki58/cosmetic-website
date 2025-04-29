import Link from 'next/link';

export default function NavLinks() {
    return (
        <div className="flex space-x-8">
            <Link href="/" className="text-black hover:text-gray-600 transition-colors">
                Home
            </Link>
            <Link href="/shop" className="text-black hover:text-gray-600 transition-colors">
                Shop
            </Link>
            <Link href="/about" className="text-black hover:text-gray-600 transition-colors">
                About Us
            </Link>
            <Link href="/contact" className="text-black hover:text-gray-600 transition-colors">
                Contact Us
            </Link>
            <Link href="/tracking" className="text-black hover:text-gray-600 transition-colors">
                Tracking
            </Link>
        </div>
    );
}