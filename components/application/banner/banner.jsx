import Image from "next/image";


export default function Banner() {
    return (
        <div className="absolute top-0 left-0 right-0 h-full opacity-10">
            <Image
                src="/shop-banner.avif"
                alt="shop banner"
                fill
                className="object-cover"
            />
        </div>
    )
}