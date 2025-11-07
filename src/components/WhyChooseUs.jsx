// src/components/WhyChooseUsSlider.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const gymSlides = [
  { img: '/gym1.webp', title: 'Premium Equipment', desc: 'Top-brand machines for all fitness levels' },
  { img: '/gym2.webp', title: 'Spacious Gym Floor', desc: 'Clean, airy, and fully equipped' },
  { img: '/gym3.webp', title: 'Group Classes', desc: 'Zumba, Yoga, HIIT every week' },
  { img: '/gym4.webp', title: 'Locker & Shower', desc: 'Secure storage & hygienic facilities' },
  { img: '/gym5.webp', title: 'Protein Bar', desc: 'Post-workout shakes & snacks' },
  { img: '/gym6.webp', title: '24/7 Access', desc: 'Train anytime that suits you' },
  // Add more if you want
];

export default function WhyChooseUsSlider() {
  return (
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

        {/* Slider */}
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
            {gymSlides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="group relative overflow-hidden rounded-xl h-64 bg-gray-200">
                  <img
                    src={slide.img}
                    alt={slide.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loadin g="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="font-bold text-lg">{slide.title}</h3>
                    <p className="text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                      {slide.desc}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}