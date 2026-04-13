"use client";

import { useState } from "react";
import Image from "next/image";

type SlidesViewerProps = {
  title: string;
  slides: string[];
};

export function SlidesViewer({ title, slides }: SlidesViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  if (!slides || slides.length === 0) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center text-slate-500">
        No slide images available.
      </div>
    );
  }

  return (
    <div className="mt-8">
      {/* top controls */}
      <div className="flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={goPrev}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-lg font-semibold text-slate-700 transition hover:border-orange-500 hover:text-orange-500"
          aria-label="Previous slide"
        >
          ←
        </button>

        <p className="min-w-[120px] text-center text-sm font-medium text-slate-600">
          Slide {currentIndex + 1} of {slides.length}
        </p>

        <button
          type="button"
          onClick={goNext}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-lg font-semibold text-slate-700 transition hover:border-orange-500 hover:text-orange-500"
          aria-label="Next slide"
        >
          →
        </button>
      </div>

      {/* centered slide */}
      <div className="mt-6 flex justify-center">
        <div className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="relative aspect-[16/9] w-full bg-slate-100">
            <Image
              src={slides[currentIndex]}
              alt={`${title} slide ${currentIndex + 1}`}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}