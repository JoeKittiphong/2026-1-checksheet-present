import { useRef, useEffect } from 'react';

/**
 * Pagination Component
 * ปุ่มเลื่อนดูหน้าเอกสาร
 */
function Pagination({
    currentPage = 1,
    totalPages = 2,
    onPageChange = () => { }
}) {
    const scrollContainerRef = useRef(null);

    // Auto-scroll active page into view
    useEffect(() => {
        if (scrollContainerRef.current) {
            // Find the button corresponding to current page.
            // Since we map simply, the index corresponds naturally (page 1 is index 0).
            const activeBtn = scrollContainerRef.current.children[currentPage - 1];
            if (activeBtn) {
                activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            }
        }
    }, [currentPage]);

    // Handle mouse wheel for horizontal scrolling
    const handleWheel = (e) => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft += e.deltaY;
        }
    };

    const goToPrev = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const goToNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-white shadow-lg rounded-full px-4 py-2 flex items-center gap-4 border border-gray-300">
            {/* Previous Button */}
            <button
                onClick={goToPrev}
                disabled={currentPage === 1}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors
          ${currentPage === 1
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        : 'bg-blue-500 text-white hover:bg-blue-600 cursor-pointer'
                    }`}
            >
                ◀
            </button>

            {/* Page Indicator */}
            <div
                ref={scrollContainerRef}
                onWheel={handleWheel}
                className="flex items-center gap-2 max-w-[300px] overflow-x-auto px-2 no-scrollbar scroll-smooth"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                        key={page}
                        onClick={() => onPageChange(page)}
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors cursor-pointer flex-shrink-0
              ${currentPage === page
                                ? 'bg-blue-500 text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                    >
                        {page}
                    </button>
                ))}
            </div>

            {/* Next Button */}
            <button
                onClick={goToNext}
                disabled={currentPage === totalPages}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors
          ${currentPage === totalPages
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        : 'bg-blue-500 text-white hover:bg-blue-600 cursor-pointer'
                    }`}
            >
                ▶
            </button>

            {/* Page Info */}
            <span className="text-sm text-gray-600 ml-2">
                หน้า {currentPage} / {totalPages}
            </span>
        </div>
    );
}

export default Pagination;
