import { useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export default function Pagination({ totalPages = 10, onPageChange }) {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = (page) => {
    setCurrentPage(page);
    onPageChange?.(page);
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      setCurrentPage(newPage);
      onPageChange?.(newPage);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      const newPage = currentPage + 1;
      setCurrentPage(newPage);
      onPageChange?.(newPage);
    }
  };

  const getPageNumbers = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];
    let l;

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - delta && i <= currentPage + delta)
      ) {
        range.push(i);
      }
    }

    range.forEach((i) => {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push("...");
        }
      }
      rangeWithDots.push(i);
      l = i;
    });

    return rangeWithDots;
  };

  const pages = getPageNumbers();

  return (
    <div className="flex items-center justify-center gap-2 py-8">
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className="p-2 text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-colors rounded cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <MdChevronLeft size={18} />
      </button>

      {pages.map((page, index) =>
        page === "..." ? (
          <span key={`dots-${index}`} className="px-2 text-gray-400">
            ...
          </span>
        ) : (
          <button
            key={page}
            onClick={() => handlePageClick(page)}
            className={`w-10 h-10 rounded transition-all duration-200 font-medium cursor-pointer ${
              currentPage === page
                ? "bg-gray-800 text-white"
                : "text-gray-700 hover:bg-gray-200 hover:text-gray-900"
            }`}
          >
            {page}
          </button>
        ),
      )}

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="p-2 text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-colors rounded cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <MdChevronRight size={18} />
      </button>
    </div>
  );
}
