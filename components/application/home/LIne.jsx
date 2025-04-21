import { useState, useEffect, useRef } from 'react';

const InfiniteScrollLine = () => {
    const categories = [
        { id: 1, name: 'Skincare' },
        { id: 2, name: 'Makeup' },
        { id: 3, name: 'Hair Care' },
        { id: 4, name: 'Fragrances' },
        { id: 5, name: 'Nail Care' },
        { id: 6, name: 'Body Care' },
        { id: 7, name: 'Bath & Shower' },
        { id: 8, name: 'Men\'s Grooming' },
        { id: 9, name: 'Beauty Tools' },
        { id: 10, name: 'Gift Sets' },
    ];

    const containerRef = useRef(null);
    const requestRef = useRef();
    const [scrollSpeed, setScrollSpeed] = useState(1);
    const [isHovering, setIsHovering] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const animate = () => {
        if (!containerRef.current || isDragging) return;
        
        containerRef.current.scrollLeft += scrollSpeed;
        
        // Reset to create infinite loop
        if (containerRef.current.scrollLeft >= containerRef.current.scrollWidth / 2) {
        containerRef.current.scrollLeft = 0;
        }
        
        requestRef.current = requestAnimationFrame(animate);
    };

    useEffect(() => {
        requestRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(requestRef.current);
    }, [scrollSpeed, isDragging]);

    useEffect(() => {
        setScrollSpeed(isHovering ? 0.3 : 1);
    }, [isHovering]);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - containerRef.current.offsetLeft);
        setScrollLeft(containerRef.current.scrollLeft);
        cancelAnimationFrame(requestRef.current);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - containerRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        containerRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        requestRef.current = requestAnimationFrame(animate);
    };

    return (
        <div className="bg-gradient-to-r from-rose-700 to-pink-700 py-6 shadow-lg">
            <div 
                ref={containerRef}
                className="flex overflow-x-hidden no-scrollbar select-none"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
            >
                {[...categories, ...categories].map((category, index) => (
                <div 
                    key={`${category.id}-${index}`} 
                    className="flex-shrink-0 px-6 transition-all duration-300 hover:scale-110"
                >
                    <div className="text-xl font-medium text-white hover:text-rose-100 whitespace-nowrap">
                    {category.name}
                    <span className="ml-2 text-rose-200">•</span>
                    </div>
                </div>
                ))}
            </div>

            <style jsx>{`
                .no-scrollbar::-webkit-scrollbar {
                display: none;
                }
                .no-scrollbar {
                -ms-overflow-style: none;
                scrollbar-width: none;
                }
            `}</style>
        </div>
    );
};

export default InfiniteScrollLine;