'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function MobileBottomNav() {
    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40">
            <div className="flex justify-around items-center h-16">
                <Link href="/search" className="flex flex-col items-center justify-center p-2 text-black">
                    <Image
                        src="/icons/search.svg"
                        alt="Search Icon"
                        width={24}
                        height={24}
                        className="object-contain"
                    />
                </Link>
                
                <Link href="/favorites" className="flex flex-col items-center justify-center p-2 text-black">
                    <Image
                        src="/icons/favourite.svg"
                        alt="Favourite Icon"
                        width={24}
                        height={24}
                        className="object-contain"
                    />
                </Link>
                
                <Link href="/cart" className="flex flex-col items-center justify-center p-2 text-black">
                    <div className="relative">
                        <Image
                            src="/icons/shop.svg"
                            alt="Favourite Icon"
                            width={24}
                            height={24}
                            className="object-contain"
                        />
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span>
                    </div>
                </Link>
                
                <Link href="/dashboard" className="flex flex-col items-center justify-center p-2 text-black">
                    <Image
                        src="/icons/person.svg"
                        alt="Favourite Icon"
                        width={24}
                        height={24}
                        className="object-contain"
                    />
                </Link>
            </div>
        </div>
    );
}