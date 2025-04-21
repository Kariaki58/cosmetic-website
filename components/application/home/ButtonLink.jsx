import Link from 'next/link';

const ButtonLink = ({ 
    href, 
    children, 
    variant = 'primary',
    className = '',
    ...props 
}) => {
    const baseClasses = "font-medium py-3 px-8 rounded-full transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-300";
    
    const variants = {
        primary: `bg-rose-500 hover:bg-rose-600 text-white shadow-lg hover:shadow-xl hover:scale-105`,
        secondary: `border-2 border-rose-400 hover:bg-rose-50 text-rose-500 hover:scale-105`,
        text: `text-rose-500 hover:text-rose-600 hover:underline`
    };

    return (
        <Link
            href={href}
            className={`${baseClasses} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
            {variant !== 'text' && (
                <svg 
                className="w-5 h-5 ml-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                aria-hidden="true"
                >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
            )}
        </Link>
    );
    };

export default ButtonLink;