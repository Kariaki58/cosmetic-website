import Image from "next/image";
import Link from "next/link";

const DiscountCards = () => {
    const cards = [
        {
            id: 1,
            title: "Special Hair Care Deals",
            discount: "Flat 25% Discount",
            copy: "Revitalize your locks with premium care",
            image: "/card-left.png",
            link: "/shop?category=hair",
            bgColor: "bg-gray-50"
        },
        {
            id: 2,
            title: "Save Big on Skincare",
            discount: "Flat 25% Discount",
            copy: "Nourish your skin with our bestsellers",
            image: "/card-right.png",
            link: "/shop?category=skincare",
            bgColor: "bg-rose-600"
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 pb-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {cards.map((card) => (
                <div
                    key={card.id}
                    className={`relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${card.bgColor} min-h-[280px]`}
                >
                    {/* Background Container */}
                    <div className="absolute inset-0 w-full h-full z-0"></div>
                
                    {/* Image - On top of background */}
                    <div className="relative z-10 h-full flex">
                        <div className="w-2/5 relative">
                            <Image
                                src={card.image}
                                alt={card.title}
                                fill
                                className="object-cover object-center"
                            />
                        </div>

                        {/* Content */}
                        <div className="w-3/5 p-6 flex flex-col justify-center">
                            <span className="inline-block bg-white text-rose-600 px-4 py-2 rounded-full text-sm font-bold mb-4 shadow-sm w-max">
                                {card.discount}
                            </span>
                            <h3 className={`text-2xl font-bold ${card.id === 1? 'text-gray-900': 'text-white' } mb-2`}>{card.title}</h3>
                            <p className={`${card.id === 1 ? 'text-gray-700' : 'text-white'} mb-4`}>{card.copy}</p>
                            <Link
                                href={card.link}
                                className={`inline-flex items-center gap-2 font-semibold ${card.id === 1 ? 'text-rose-600 hover:text-rose-800' : 'text-white hover:text-gray-200' }transition-colors`}
                            >
                                Shop Now
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DiscountCards;