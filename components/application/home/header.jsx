import Image from "next/image";

export default function Header() {
    return (
        <header className="relative w-full h-[80vh] bg-gray-100 overflow-hidden">
            <div className="absolute inset-0 bg-gray-400">
                <Image
                    src="/header-picture.png"
                    alt="Header image"
                    fill
                    sizes="100vw"
                    className="rounded-none md:rounded-lg object-cover object-center"
                    priority
                />
            </div>

            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-md">
                    Welcome to <span className="text-amber-700">Beauty Shop</span>
                </h1>

                <p className="text-lg sm:text-xl lg:text-2xl text-white mb-8 max-w-2xl drop-shadow-md">
                    Discover our premium collection of beauty products for your perfect look
                </p>

                <button className="bg-green-800 hover:bg-green-900 cursor-pointer text-white font-semibold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105">
                    Shop Now
                </button>
            </div>

            {/* Optional decorative elements */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
        </header>
    );
}