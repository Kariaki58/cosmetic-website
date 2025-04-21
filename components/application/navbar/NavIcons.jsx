import Link from 'next/link';
import Image from 'next/image';

export default function NavIcons() {
    return (
        <div className="flex items-center space-x-6">
            <Link href="/search" className="text-black hover:text-gray-600 transition-colors">
                <Image
                    src="/icons/search.svg"
                    alt="Search Icon"
                    width={24}
                    height={24}
                    className="object-contain"
                />
            </Link>
            <Link href="/favorites" className="text-black hover:text-gray-600 transition-colors">
                <Image
                    src="/icons/favourite.svg"
                    alt="Favourite Icon"
                    width={24}
                    height={24}
                    className="object-contain"
                />
            </Link>
            <Link href="/cart" className="text-black hover:text-gray-600 transition-colors">
                <Image
                    src="/icons/shop.svg"
                    alt="Favourite Icon"
                    width={24}
                    height={24}
                    className="object-contain"
                />
            </Link>
            <Link href="/account" className="text-black hover:text-gray-600 transition-colors">
                <Image
                    src="/icons/person.svg"
                    alt="Favourite Icon"
                    width={24}
                    height={24}
                    className="object-contain"
                />
            </Link>
        </div>
    );
}