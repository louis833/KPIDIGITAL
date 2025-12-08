import { ChevronLeft, ChevronRight } from "lucide-react";

interface PresentationNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
}

export function PresentationNavigation({
  currentSlide,
  totalSlides,
  onPrevious,
  onNext,
}: PresentationNavigationProps) {
  return (
    <div className="fixed bottom-8 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="bg-black text-white rounded-sm shadow-2xl px-6 py-4 flex items-center justify-between">
          <button
            onClick={onPrevious}
            disabled={currentSlide === 0}
            className="flex items-center gap-2 px-4 py-2 rounded-sm hover:bg-gray-800 transition-colors disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Previous</span>
          </button>
          
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-400">
              Slide {currentSlide + 1} of {totalSlides}
            </span>
            <div className="flex gap-1.5">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <div
                  key={index}
                  className={`h-1.5 rounded-full transition-all ${
                    index === currentSlide
                      ? "w-8 bg-white"
                      : "w-1.5 bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
          
          <button
            onClick={onNext}
            disabled={currentSlide === totalSlides - 1}
            className="flex items-center gap-2 px-4 py-2 rounded-sm hover:bg-gray-800 transition-colors disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent"
          >
            <span>Next</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}