import Image from "next/image";

export default function Reviews() {
    const reviews = [
        {
            id: '1',
            user: {
                name: 'Sophia R.',
                avatar: '/face/black-beauty.jpg',
            },
            rating: 5,
            date: 'May 15, 2024',
            comment: 'This serum is absolutely divine! My skin has never looked more radiant. The gold flakes give such a luxurious feel and the hydration lasts all day.',
            productImages: [
                '/face-product.jpg',
                '/fragrance.jpeg',
                '/header-picture.png'
            ],
            verifiedPurchase: true,
        },
        {
            id: '2',
            user: {
                name: 'Emma L.',
                avatar: '/face/card-left.png',
            },
            rating: 4,
            date: 'April 28, 2024',
            comment: 'Love how this makes my skin glow! The scent is subtle and pleasant. Only giving 4 stars because I wish the bottle was slightly larger.',
            productImages: [
                '/face-product.jpg',
                '/hair-product.jpg'
            ],
            verifiedPurchase: true,
        },
        {
            id: '3',
            user: {
                name: 'Olivia M.',
                avatar: '/face/cute-girl.png',
            },
            rating: 5,
            date: 'March 10, 2024',
            comment: 'Worth every penny! My fine lines have visibly reduced after just 3 weeks of use. The gold flakes make me feel like I\'m pampering myself every night.',
            productImages: [
                '/face-product.jpg',
                '/brush.webp'
            ],
            verifiedPurchase: true,
        },
    ];

    const averageRating = 4.8;
    const totalReviews = 245;

    const renderStars = (rating) => {
        return (
            <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                    <svg
                        key={i}
                        className={`w-5 h-5 ${i < rating ? 'text-pink-500' : 'text-gray-200'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                ))}
            </div>
        );
    };

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div className="text-center md:text-left">
                    <h2 className="text-3xl font-bold text-gray-900 mb-3 font-serif">Customer Reviews</h2>
                    <div className="flex items-center justify-center md:justify-start mb-2">
                        <div className="flex items-center">
                            {renderStars(averageRating)}
                            <span className="ml-2 text-gray-700 text-lg font-medium">{averageRating}</span>
                        </div>
                        <span className="mx-2 text-gray-400">|</span>
                        <span className="text-gray-600">{totalReviews} reviews</span>
                    </div>
                </div>

                <div className="w-full md:w-auto">
                    <div className="relative">
                        <select
                            id="sort"
                            className="appearance-none bg-white border-2 border-pink-100 rounded-full py-3 pl-5 pr-10 text-gray-700 focus:outline-none focus:border-pink-300 focus:ring-1 focus:ring-pink-200 w-full md:w-48"
                        >
                            <option>Most recent</option>
                            <option>Highest rated</option>
                            <option>Lowest rated</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-pink-400">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Reviews List */}
            <div className="space-y-6">
                {reviews.map((review) => (
                    <div key={review.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-200">
                        <div className="flex items-start">
                            <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-pink-100 mr-4 flex-shrink-0">
                                <Image
                                    src={review.user.avatar}
                                    alt={review.user.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="flex-1">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                    <h3 className="text-lg font-semibold text-gray-900">{review.user.name}</h3>
                                    <p className="text-sm text-pink-500 mt-1 sm:mt-0">
                                        <svg className="w-4 h-4 inline mr-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                        </svg>
                                        {review.date}
                                    </p>
                                </div>

                                <div className="mt-2 flex items-center">
                                    {renderStars(review.rating)}
                                    {review.verifiedPurchase && (
                                        <span className="ml-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-pink-50 text-pink-700 border border-pink-200">
                                            Verified Purchase
                                        </span>
                                    )}
                                </div>

                                <p className="mt-3 text-gray-700 leading-relaxed">{review.comment}</p>

                                {review.productImages.length > 0 && (
                                    <div className="mt-4 flex flex-wrap gap-3">
                                        {review.productImages.map((image, index) => (
                                            <div key={index} className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border border-pink-50 group">
                                                <Image
                                                    src={image}
                                                    alt={`Product image ${index + 1}`}
                                                    fill
                                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                                />
                                                {/* <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div> */}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Load More Button */}
            <div className="mt-10 text-center">
                <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-all duration-200">
                    Show More Reviews
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </div>
        </div>
    );
}