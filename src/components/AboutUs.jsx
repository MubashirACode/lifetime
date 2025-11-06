import React from 'react';



const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M14.4 14.4 9.6 9.6"></path>
        <path d="M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z"></path>
        <path d="m21.5 21.5-1.4-1.4"></path>
        <path d="M3.9 3.9 2.5 2.5"></path>
        <path d="M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z"></path>
      </svg>
    ),
    title: "Modern Equipment",
    desc: "State-of-the-art machines and free weights for all fitness levels"
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
    title: "Expert Trainers",
    desc: "Certified professionals dedicated to your success"
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
        <path d="M4 22h16"></path>
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
      </svg>
    ),
    title: "Proven Results",
    desc: "Thousands of success stories from our members"
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
    ),
    title: "Flexible Hours",
    desc: "Open 6 days a week, early morning to late night"
  }
];

export const AboutUs = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
            Welcome to <span className="text-[#2776d3]">Lifetime Fitness</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            More than just a gym — we're a community dedicated to helping you achieve your fitness goals through personalized training, world-class facilities, and unwavering support.
          </p>
        </div>

        {/* Image + Text Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10 items-center mb-16 justify-center  md:mb-20">
          {/* Image - Left on md+, Full width on mobile */}
          <div className="order-2 md:order-1 animate-slideInLeft flex justify-center md:justify-end">
            <img
              src='/visit.webp'
              alt="Modern gym interior with professional equipment"
              className="
                w-[100%] 
                
               
                md:w-[90%] 
                lg:w-[80%]
                xl:w-[80%]
                rounded-xl 
                shadow-2xl 
                object-cover 
                h-auto 
                hover:scale-[1.02] 
                transition-transform 
                duration-500
              "
              loading="lazy"
            />
          </div>

          {/* Text - Right on md+, Full width on mobile */}
          <div className="space-y-4 md:space-y-6 order-1 md:order-2 animate-slideInRight">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              Your Fitness Journey Starts Here
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              At Lifetime Fitness, we believe that fitness is not just about physical strength—it's about building confidence, discipline, and a healthier lifestyle. Our mission is to provide an environment where everyone, from beginners to elite athletes, can thrive.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              With over a decade of experience, we've helped thousands transform their lives. Our cutting-edge facility features the latest equipment, spacious training areas, and a motivating atmosphere that keeps you coming back for more.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-xl border-2 border-gray-300 hover:border-[#2776d3] hover:shadow-xl transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-[#2776d3] mb-4 group-hover:text-[#fec200] transition-colors">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#2776d3] transition-colors">
                {feature.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; }
        .animate-slideInLeft { animation: slideInLeft 0.8s ease-out forwards; }
        .animate-slideInRight { animation: slideInRight 0.8s ease-out forwards; }
        .animate-fadeInUp { animation: fadeInUp 0.6s ease-out forwards; }
      `}</style>
    </section>
  );
};