import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight, Check, Star, Zap, Award } from 'lucide-react';

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-[#2776d3] to-[#1e5cb3] hover:from-[#1e5cb3] hover:to-[#2776d3] text-white p-3 rounded-full transition-all shadow-lg hover:shadow-xl hover:scale-110"
    >
      <ChevronLeft className="w-6 h-6" />
    </button>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-[#2776d3] to-[#1e5cb3] hover:from-[#1e5cb3] hover:to-[#2776d3] text-white p-3 rounded-full transition-all shadow-lg hover:shadow-xl hover:scale-110"
    >
      <ChevronRight className="w-6 h-6" />
    </button>
  );
};

export default function Pricing() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1, arrows: false } }
    ]
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading Section */}
        <div id='pricing' className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-[#2776d3] to-[#1e5cb3] text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
              Investment Plans
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Choose Your <span className=" bg-clip-text text-blue-600">Perfect Plan</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transform your body with our expertly designed packages. From beginner to elite athlete, we've got you covered.
          </p>
        </div>

        {/* Main Packages Slider */}
        <div className="mb-20 relative">
          <Slider {...settings}>
            {/* Silver Package */}
            <div className="px-4">
              <div className="bg-white mt-10 rounded-2xl p-8 border-2 border-gray-200 hover:border-[#2776d3] transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-2 h-full group">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="bg-gray-100 p-3 rounded-xl group-hover:bg-[#2776d3] transition-colors">
                      <Award className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Silver Package</h3>
                  </div>
                </div>
                
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <p className="text-sm text-gray-500 font-medium mb-2">Registration Fee</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-black text-[#2776d3]">Rs 4,000</span>
                    <span className="text-gray-400 line-through text-lg">Rs 5,000</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#2776d3] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">Full Access to Gym Equipment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#2776d3] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">Electric Equipment Access</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#2776d3] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">Crossfit Training Area</span>
                  </li>
                </ul>

                <div className="mb-6 bg-gradient-to-r from-gray-50 to-white p-4 rounded-xl border border-gray-200 rounded-xl p-4">
                  <p className="text-sm text-gray-500 font-medium mb-1">Monthly Investment</p>
                  <p className="text-3xl font-black text-[#2776d3]">Rs 4,500</p>
                </div>

                <button className="w-full bg-[#2776d3] text-white hover:bg-yellow-400 hover:text-gray-900 font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-105">
                  Join Silver Plan
                </button>
              </div>
            </div>

            {/* Gold Package - Featured */}
            <div className="px-4 mt-10">
              <div className="bg-gradient-to-br from-[#2776d3] to-[#1e5cb3] rounded-2xl p-8 text-white relative h-full transform shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-300">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 px-6 py-2 rounded-full text-sm font-black uppercase tracking-wider shadow-lg flex items-center gap-2">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </span>
                </div>
                
                <div className="flex items-center justify-between mb-6 mt-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                      <Zap className="w-6 h-6 text-yellow-400" />
                    </div>
                    <h3 className="text-2xl font-bold">Gold Package</h3>
                  </div>
                </div>

                <div className="mb-6 pb-6 border-b border-white/20">
                  <p className="text-sm text-white/80 font-medium mb-2">Registration Fee</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-black text-yellow-400">Rs 4,000</span>
                    <span className="text-white/60 line-through text-lg">Rs 6,000</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">Full Access to Gym Equipment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">Electric Equipment Access</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">Crossfit Training Area</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span className="font-bold text-yellow-400">4 Days Hydrotherapy Sessions</span>
                  </li>
                </ul>

                <div className="mb-6 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <p className="text-sm text-white/80 font-medium mb-1">Monthly Investment</p>
                  <p className="text-3xl font-black text-yellow-400">Rs 7,000</p>
                </div>

                <button className="w-full bg-white text-[#2776d3] hover:bg-yellow-400 hover:text-gray-900 font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-105">
                  Join Gold Plan
                </button>
              </div>
            </div>

            {/* Package Options */}
            <div className="px-4 mt-10">
              <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-[#2776d3] transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-2 h-full group">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-gray-100 p-3 rounded-xl group-hover:bg-[#2776d3] transition-colors">
                    <Star className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Package Options</h3>
                </div>

                <ul className="space-y-6 mb-8">
                  <li className="bg-gradient-to-r from-gray-50 to-white p-4 rounded-xl border border-gray-200">
                    <span className="font-bold text-[#2776d3] text-lg block mb-2">Quarterly Plan</span>
                    <div className="flex items-center gap-2 text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Monthly Fee + <span className="font-bold text-green-600">15 Days FREE</span></span>
                    </div>
                  </li>
                  <li className="bg-gradient-to-r from-gray-50 to-white p-4 rounded-xl border border-gray-200">
                    <span className="font-bold text-[#2776d3] text-lg block mb-2">Half Yearly Plan</span>
                    <div className="flex items-center gap-2 text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Monthly Fee + <span className="font-bold text-green-600">1 Month FREE</span></span>
                    </div>
                  </li>
                  <li className="bg-gradient-to-r from-gray-50 to-white p-4 rounded-xl border border-gray-200">
                    <span className="font-bold text-[#2776d3] text-lg block mb-2">Yearly Plan</span>
                    <div className="flex items-center gap-2 text-gray-700">
                      <Check className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Monthly Fee + <span className="font-bold text-green-600">2 Months FREE</span></span>
                    </div>
                  </li>
                </ul>

                <button className="w-full bg-[#2776d3] text-white hover:bg-yellow-400 hover:text-gray-900 font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-105">
                  Choose Your Package
                </button>
              </div>
            </div>
          </Slider>
        </div>

        {/* Additional Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Personal Training */}
          <div className="bg-white border-2 border-gray-200 hover:border-[#2776d3] rounded-2xl p-8 text-white text-center shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="bg-gradient-to-r from-[#2776d3] to-[#1e5cb3] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8" />
            </div>
            <h3 className="text-2xl text-black font-bold mb-3">Personal Training</h3>
            <p className="text-black font-medium mb-6 text-sm">Get one-on-one guidance from certified trainers</p>
            <button className="w-full bg-[#2776d3] hover:bg-yellow-400 text-white hover:text-gray-900 font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-105">
              Contact Now
            </button>
          </div>

          {/* One Day Pass */}
          <div className="bg-white border-2 border-gray-200 hover:border-[#2776d3] rounded-2xl p-8  shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="bg-gradient-to-r from-[#2776d3] to-[#1e5cb3] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center">One Day Pass</h3>
            <ul className="space-y-4 mb-6">
              <li className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                <span className="font-medium text-gray-700">Gym Pass</span>
                <span className="font-bold text-[#2776d3] text-lg">Rs 500</span>
              </li>
              <li className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                <span className="font-medium text-gray-700">Hydrotherapy</span>
                <span className="font-bold text-[#2776d3] text-lg">Rs 800</span>
              </li>
              <li className="flex justify-between items-center bg-gradient-to-r from-[#2776d3] to-[#1e5cb3] p-3 rounded-lg text-white">
                <span className="font-bold">Combined Pass</span>
                <span className="font-black text-yellow-400 text-lg">Rs 1,000</span>
              </li>
            </ul>
            <button className="w-full bg-[#2776d3] text-white hover:bg-yellow-400 hover:text-gray-900 font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-105">
              Get Pass Now
            </button>
          </div>

          {/* Diet Plan */}
          <div className="bg-gradient-to-br from-[#2776d3] to-[#1e5cb3] rounded-2xl p-8 text-white text-center shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Star className="w-8 h-8 text-yellow-400 fill-current" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Customized Diet Plan</h3>
            <div className="mb-4">
              <p className="text-5xl font-black text-yellow-400 mb-2">Rs 1,000</p>
              <p className="text-white/80 text-sm">One-time fee</p>
            </div>
            <p className="text-white/90 mb-6 text-sm">Personalized nutrition plan by expert nutritionists</p>
            <button className="w-full bg-white hover:bg-yellow-400 text-[#2776d3] hover:text-gray-900 font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-105">
              Order Your Plan
            </button>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 text-lg mb-4">
            Still have questions? We're here to help!
          </p>
          <button className="bg-[#2776d3] text-white hover:bg-yellow-400 hover:text-gray-900 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-xl">
            Contact Support Team
          </button>
        </div>
      </div>
    </section>
  );
}