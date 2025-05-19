import Image from "next/image";
import ButtonLink from "./ButtonLink";

export default function Header() {
  return (
    <header className="relative w-full min-h-[70vh] bg-gradient-to-r from-[#fff5f5] to-[#fff] overflow-hidden">
      <div className="absolute top-0 left-0 w-1/3 h-full opacity-10">
        <Image
          src="/floral.png"
          alt="Floral decoration"
          fill
          className="object-cover"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 lg:pr-12 flex flex-col justify-center relative z-10">
          <span className="text-lg font-medium text-rose-500 mb-2 tracking-widest">
            LUXURY BEAUTY COLLECTION
          </span>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-gray-800 mb-6 leading-tight">
            Reveal Your <span className="text-rose-400">Natural</span> Radiance
          </h1>

          <p className="text-xl lg:text-2xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
            Elevate your beauty routine with our carefully curated, cruelty-free products 
            that enhance your natural glow while caring for your skin.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <ButtonLink href="/shop" variant="primary">
              Shop Now
            </ButtonLink>
            <ButtonLink href="/about" variant="secondary">
              Our Philosophy
            </ButtonLink>
          </div>

          <div className="mt-12 flex items-center space-x-6">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-rose-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
              </div>
              <span className="text-gray-600">Cruelty Free</span>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-rose-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
              </div>
              <span className="text-gray-600">Natural Ingredients</span>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 h-[50vh] lg:h-[70vh] relative mt-12 lg:mt-0">
          <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/girl-girl.jpg"
              alt="Woman enjoying our beauty products"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
              priority
            />
          </div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-rose-100 rounded-full opacity-30"></div>
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-amber-100 rounded-full opacity-30"></div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-white transform -skew-y-3 origin-top-left"></div>
    </header>
  );
}