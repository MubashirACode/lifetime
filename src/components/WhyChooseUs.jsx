// src/components/WhyChooseUsSlider.jsx
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules'; // Navigation removed
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';
// 'swiper/css/navigation' removed

const gymSlides = [
  { img: '/gym1.webp', title: 'Premium Equipment', desc: 'Top-brand machines for all fitness levels' },
  { img: '/gym2.webp', title: 'Spacious Gym Floor', desc: 'Clean, airy, and fully equipped' },
  { img: '/gym3.webp', title: 'Group Classes', desc: 'Zumba, Yoga, HIIT every week' },
  { img: '/gym4.webp', title: 'Locker & Shower', desc: 'Secure storage & hygienic facilities' },
  { img: '/gym5.webp', title: 'Protein Bar', desc: 'Post-workout shakes & snacks' },
  { img: '/gym6.webp', title: '24/7 Access', desc: 'Train anytime that suits you' },
  { img: '/gym7.webp', title: 'Personal Training', desc: 'One-on-one sessions with experts' },
  { img: '/gym8.webp', title: 'Cardio Zone', desc: 'Treadmills, bikes, and more' },
  { img: '/gym9.webp', title: 'Strength Area', desc: 'Free weights & power racks' },
  { img: '/gym10.webp', title: 'Recovery Zone', desc: 'Sauna & massage chairs' },
  { img: '/gym11.webp', title: 'Kids Play Area', desc: 'Safe space for children' },
  { img: '/gym12.webp', title: 'Parking Facility', desc: 'Free & secure parking' },
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

          {/* Main Slider - NO ARROWS */}
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <Swiper
              modules={[Autoplay, Pagination]} // Navigation removed
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
              // navigation={true} → REMOVED
              className="why-choose-slider"
            >
              {gymSlides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="group relative overflow-hidden rounded-xl h-64 bg-gray-200 cursor-pointer"
                    onClick={() => openLightbox(index)}
                  >
                    <img
                      src={slide.img}
                      alt={slide.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="font-bold text-lg">{slide.title}</h3>
                      <p className="text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                        {slide.desc}
                      </p>
                    </div>
                    {/* Click Indicator */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>
      </section>

      {/* LIGHTBOX POPUP - WITH ARROWS */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90">
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

          {/* Large Image */}
          <div className="relative max-w-5xl w-full h-full flex items-center justify-center">
            <img
              src={gymSlides[currentIndex].img}
              alt={gymSlides[currentIndex].title}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
            {/* Caption */}
            <div className="absolute bottom-6 left-6 right-6 bg-black/60 backdrop-blur-sm text-white p-4 rounded-lg">
              <h3 className="text-2xl font-bold">{gymSlides[currentIndex].title}</h3>
              <p className="text-sm mt-1">{gymSlides[currentIndex].desc}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}