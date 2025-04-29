'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function ProductNavigation({ slug }) {
    const pathname = usePathname();

    const isActive = (href) => {
        if (href === `/products/${slug}`) {
            return pathname === href;
        }
        return pathname.startsWith(href);
    };

    return (
        <ul className="flex justify-around mt-10">
            <li>
                <Link 
                    href={`/products/${slug}`}
                    className={clsx(
                        "px-4 py-2 rounded-md",
                        isActive(`/products/${slug}`) 
                            ? "font-bold border-b-2 border-black text-black" 
                            : "text-gray-600 hover:text-gray-900"
                    )}
                >
                    Description
                </Link>
            </li>
            <li>
                <Link 
                    href={`/products/${slug}/additional-info`}
                    className={clsx(
                        "px-4 py-2 rounded-md",
                        isActive(`/products/${slug}/additional-info`) 
                            ? "font-bold border-b-2 border-black text-black" 
                            : "text-gray-600 hover:text-gray-900"
                    )}
                >
                    Additional Info
                </Link>
            </li>
            <li>
                <Link 
                    href={`/products/${slug}/reviews`}
                    className={clsx(
                        "px-4 py-2 rounded-md",
                        isActive(`/products/${slug}/reviews`) 
                            ? "font-bold border-b-2 border-black text-black" 
                            : "text-gray-600 hover:text-gray-900"
                    )}
                >
                    Reviews
                </Link>
            </li>
        </ul>
    );
}