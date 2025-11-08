// src/components/WhyChooseUsSlider.jsx
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { X, ChevronLeft, ChevronRight , Search} from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';

const gymSlides = [
  '/gym1.webp',
  '/gym2.webp',
  '/gym3.webp',
  '/gym4.webp',
  '/gym5.webp',
  '/gym6.webp',
  '/gym7.webp',
  '/gym8.webp',
  '/gym9.webp',
  '/gym10.webp',
  '/gym11.webp',
  '/gym12.webp',
];

export default function WhyChooseUsSlider() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % gymSlides.length);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + gymSlides.length) % gymSlides.length);
  };

  return (
    <>
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-16">
            <span className="bg-gradient-to-r from-[#2776d3] to-[#1e5cb3] text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider inline-block mb-4">
              Why Choose Us
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
              Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2776d3] to-[#1e5cb3]">Excellence</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Modern facilities, expert trainers, and a community that keeps you motivated.
            </p>
          </div>

          {/* Main Slider - Only Images */}
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              pagination={{ clickable: true }}
              className="why-choose-slider"
            >
              {gymSlides.map((img, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="group relative overflow-hidden rounded-xl h-64 bg-gray-200 cursor-pointer"
                    onClick={() => openLightbox(index)}
                  >
                    <img
                      src={img}
                      alt={`Gym facility ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" // Faster duration
                      loading="lazy"
                    />
                    {/* Hover Zoom Indicator - No Blur */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/20 will-change-opacity">
                      <div className="bg-white/30 rounded-full p-3">
                        <Search className="w-8 h-8 text-white" strokeWidth={2} />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>
      </section>

      {/* LIGHTBOX POPUP - Only Image */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition z-10"
          >
            <X className="w-10 h-10" />
          </button>

          {/* Prev Button */}
          <button
            onClick={goPrev}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition z-10"
          >
            <ChevronLeft className="w-12 h-12" />
          </button>

          {/* Next Button */}
          <button
            onClick={goNext}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition z-10"
          >
            <ChevronRight className="w-12 h-12" />
          </button>

          {/* Fullscreen Image */}
          <div className="relative max-w-6xl w-full h-full flex items-center justify-center">
            <img
              src={gymSlides[currentIndex]}
              alt={`Gym facility ${currentIndex + 1}`}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
}