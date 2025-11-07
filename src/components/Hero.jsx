import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export const Hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
        pauseOnHover: false,
        fade: true,
        arrows: false,
        dotsClass: 'slick-dots custom-dots',
        appendDots: (dots) => (
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <ul className="flex gap-3"> {dots} </ul>
            </div>
        ),
        customPaging: () => (
            <div className="w-3 h-3 rounded-full bg-white/50 hover:bg-[#fec200] transition-all duration-300"></div>
        ),
    };

    const fallbackImage = 'https://via.placeholder.com/1920x1080?text=Gym+Image+Not+Found';

    const slides = [
        {
            img: '/gym1.webp',
            title: "Elite Equipment",
            subtitle: "Epic Results",
            desc: "Experience top-tier fitness gear engineered for peak performance and transformative workouts.",
        },
        {
            img: '/gym2.webp',
            title: "Expert Guidance",
            subtitle: "Unmatched Success",
            desc: "Our certified trainers deliver personalized coaching to elevate your fitness journey.",
        },
        {
            img: '/gym3.webp',
            title: "Unite in Fitness",
            subtitle: "Excel as One",
            desc: "Join vibrant group classes that inspire and empower you to achieve greatness.",
        },
    ];

    return (
        <section id="home" className="relative w-full h-[90vh] overflow-hidden">
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={index} className="relative w-full h-screen">
                        {/* Background Image */}
                        <img
                            src={slide.img || fallbackImage}
                            alt={slide.title}
                            loading="lazy"
                            className="absolute inset-0 w-full h-full object-cover"
                            onError={(e) => (e.target.src = fallbackImage)}
                        />

                        {/* Dark Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>

                        {/* Content - LEFT ALIGNED */}
                        <div className="absolute inset-0 flex items-center">
                            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                                <div className="max-w-2xl animate-slideInLeft">
                                    {/* Title - NO BREAK */}
                                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-2 drop-shadow-2xl whitespace-nowrap">
                                        {slide.title}
                                    </h1>

                                    {/* Subtitle - NO BREAK */}
                                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#fec200] leading-tight mb-6 drop-shadow-2xl whitespace-nowrap">
                                        {slide.subtitle}
                                    </h1>

                                    {/* Description */}
                                    <p className="text-base md:text-lg lg:text-xl text-gray-200 font-medium max-w-lg mb-10 leading-relaxed drop-shadow-md">
                                        {slide.desc}
                                    </p>

                                    {/* CTA Button */}
                                    <a href="#contact" className="block">
                                        <button
                                            className="
                        bg-[#fec200] 
                       
                        text-gray-900 
                        hover:text-[#fec200] 
                        hover:bg-[#2776d3]
                        font-bold 
                        text-base md:text-lg 
                        px-8 md:px-6 
                        py-4 md:py-3 
                        rounded-lg 
                        shadow-2xl 
                        hover:shadow-[#fec200]/50 
                        transform 
                        hover:scale-105 
                        active:scale-95 
                        transition-all 
                        duration-300 
                        flex 
                        items-center 
                        cursor-pointer
                        gap-3 
                        group
                      "
                                        >
                                            JOIN NOW
                                            <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>

            {/* Custom Animations & Dots */}
            <style jsx>{`
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-slideInLeft {
          animation: slideInLeft 1s ease-out forwards;
        }
        .custom-dots {
          bottom: 2.5rem;
        }
        .custom-dots li button:before {
          display: none;
        }
        .slick-dots li.slick-active div {
          background-color: #fec200 !important;
          transform: scale(1.3);
        }
      `}</style>
        </section>
    );
};