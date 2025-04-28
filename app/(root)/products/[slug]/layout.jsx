import Link from "next/link";

export default async function ProductPageLayout({ children, params }) {
    const slug = (await params).slug;
    console.log({ slug })

    return (
        <main>
            <div>
                {children}
                <ul className="flex justify-around mt-10">
                    <li>
                        <Link href={`/products/${slug}`}>
                            Description
                        </Link>
                    </li>
                    <li>
                        <Link href={`/products/${slug}/additional-info`}>
                            Additional Info
                        </Link>
                    </li>
                    <li>
                        <Link href={`/products/${slug}/review`}>
                            Review
                        </Link>
                    </li>
                </ul>
            </div>
        </main>
    );
}
