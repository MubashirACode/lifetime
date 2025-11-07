
import React, { useState } from 'react';
import { Award, Target } from 'lucide-react';


const trainers = [
  {
    img: '/trainer1.webp',
    name: "Shehryar Ahmed",
    exp: "6 Years",
    role: "Body Composition Specialist",
    mainConcern: ["Motivational Coaching", "Strength Conditioning", "Body Composition Analysis"],
    expertise: ["Strength Training", "Aerobics", "Weight Loss & Weight Gain Training", "CV Training", "CrossFit"]
  },
  {
    img: '/trainer2.webp',
    name: "Sheraz",
    exp: "15 Years",
    role: "Motivation & Conditioning Expert",
    mainConcern: ["Motivation", "Muscle Gain", "Weight Loss"],
    expertise: ["Strength Training", "Aerobics", "HIIT", "CV Training"]
  },
  {
    img: '/trainer3.webp',
    name: "Raheel",
    exp: "12+ Years",
    role: "Science Based Strength Training",
    mainConcern: ["Muscle Building", "Fat Loss", "Endurance Based", "Detailed Training Techniques"],
    expertise: ["Science Based Strength Training", "Ultimate Performance Workouts", "Functional Training", "CrossFit", "Aerobics"]
  },
  {
    img: '/trainer4.webp',
    name: "Noman Yousuf Khan",
    exp: "11 Years",
    role: "Goal Achievement Coach",
    mainConcern: ["Goal Achievements", "Proper Technique", "Motivation", "Nutrition Guidance", "Body Composition"],
    expertise: ["Strength Training", "Hypertrophy Training", "HIIT", "Weight Gain & Weight Loss", "Rehab Exercises", "CrossFit"]
  },
  {
    img: '/trainer5.png', // ya jo image hai
    name: "Asra Zahir",
    exp: "10+ Years",
    role: "Female Fitness Trainer",
    gender: "female",
    mainConcern: ["Strength Training", "Fat Loss", "Weight Gain", "One-on-One Training", "Confidence Building"],
    expertise: ["Strength Training", "Zumba", "Yoga", "Aerobics", "Stretching", "Custom Diet Plans", "Nutrition Guidance"]
  },
  {
    img: '/trainer6.png', // ya jo image hai
    name: "Neha Khan",
    exp: "2.5 Years",
    role: "Female Fitness Coach",
    gender: "female",
    mainConcern: ["Goal Achievements", "Motivation", "Nutrition Guidance"],
    expertise: ["Strength Training", "Weight Gain", "Weight Loss", "Holistic Training", "Stretching", "Cardio"]
  }
];

export default function Trainer() {
  const [hovered, setHovered] = useState(null);

  const maleTrainers = trainers.filter(t => !t.gender || t.gender !== 'female');
  const femaleTrainers = trainers.filter(t => t.gender === 'female');

  return (
    <section id='trainer' className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className=" mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="bg-gradient-to-r from-[#2776d3] to-[#1e5cb3] text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider inline-block mb-4">
            Expert Team
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2776d3] to-[#1e5cb3]">Elite Trainers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Certified professionals dedicated to transforming your fitness journey with expertise and passion
          </p>
        </div>

        {/* MALE TRAINERS - 4 GRID */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-10">
            Male Trainers
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {maleTrainers.map((trainer, index) => {
              const isHovered = hovered === `male-${index}`;
              return (
                <div
                  key={index}
                  className="group"
                  onMouseEnter={() => setHovered(`male-${index}`)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl flex flex-col h-full">
                    <div className="relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 h-[380px] flex items-end justify-center">
                      <img
                        src={trainer.img}
                        alt={trainer.name}
                        // --- THIS IS THE CORRECTED LINE ---
                        className="h-full w-auto object-cover transition-all duration-500 group-hover:scale-105"
                        style={{
                          filter: isHovered ? 'brightness(1.1)' : 'brightness(1)',
                          transform: isHovered ? 'translateY(-10px)' : 'translateY(0)',
                        }}
                      />
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-[#2776d3] to-[#1e5cb3] text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                        {trainer.exp}
                      </div>
                    </div>

                    <div className="p-6 flex-1 flex flex-col">
                      <div className="mb-4">
                        <h4 className="text-xl font-black text-gray-900 mb-1">{trainer.name}</h4>
                        <p className="text-[#2776d3] font-bold text-sm">{trainer.role}</p>
                      </div>

                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Target className="w-4 h-4 text-yellow-500" />
                          <h5 className="font-bold text-sm text-gray-700">Focus:</h5>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {trainer.mainConcern.map((concern, idx) => (
                            <span key={idx} className="text-xs bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-medium">
                              {concern}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Award className="w-4 h-4 text-[#2776d3]" />
                          <h5 className="font-bold text-sm text-gray-700">Expertise:</h5>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {trainer.expertise.slice(0, 3).map((skill, idx) => (
                            <span key={idx} className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                              {skill}
                            </span>
                          ))}
                          {trainer.expertise.length > 3 && (
                            <span className="text-xs bg-gray-200 text-gray-700 px-3 py-1 rounded-full font-medium">
                              +{trainer.expertise.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                      <a href="#contact" className='block mt-auto pt-6'> {/* Use mt-auto to push button to bottom */}
                        <button className="w-full bg-[#2776d3] text-white hover:bg-yellow-400 hover:text-gray-900 font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-105">
                          Book Session
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* FEMALE TRAINERS - 2 GRID - BLUE + YELLOW THEME */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-10">
            Female Trainers
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {femaleTrainers.map((trainer, index) => {
              const isHovered = hovered === `female-${index}`;
              return (
                <div
                  key={index}
                  className="group"
                  onMouseEnter={() => setHovered(`female-${index}`)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl flex flex-col h-full">
                    {/* Image Container */}
                    <div className="relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 h-[380px] flex items-end justify-center">
                      <img
                        src={trainer.img}
                        alt={trainer.name}
                        // --- THIS IS THE CORRECTED LINE ---
                        className=" xl:h-[40vh] md:h-[40vh] sm:h-[40vh]  h-[40vh]    w-auto object-cover transition-all duration-500 group-hover:scale-105"
                        style={{
                          filter: isHovered ? 'brightness(1.1)' : 'brightness(1)',
                          transform: isHovered ? 'translateY(-10px)' : 'translateY(0)',
                        }}
                      />
                      {/* Experience Badge - Blue Gradient */}
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-[#2776d3] to-[#1e5cb3] text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                        {trainer.exp}
                      </div>
                      {/* Women's Coach Badge - Yellow */}
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                        Women's Coach
                      </div>
                    </div>

                    {/* Info Section */}
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="mb-4">
                        <h4 className="text-xl font-black text-gray-900 mb-1">{trainer.name}</h4>
                        <p className="text-[#2776d3] font-bold text-sm">{trainer.role}</p>
                      </div>

                      {/* Main Focus - Yellow Tags */}
                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Target className="w-4 h-4 text-yellow-500" />
                          <h5 className="font-bold text-sm text-gray-700">Focus:</h5>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {trainer.mainConcern.map((concern, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-medium"
                            >
                              {concern}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Expertise - Blue Tags */}
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Award className="w-4 h-4 text-[#2776d3]" />
                          <h5 className="font-bold text-sm text-gray-700">Expertise:</h5>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {trainer.expertise.slice(0, 3).map((skill, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                          {trainer.expertise.length > 3 && (
                            <span className="text-xs bg-gray-200 text-gray-700 px-3 py-1 rounded-full font-medium">
                              +{trainer.expertise.length - 3}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <a href="#contact" className="block mt-auto pt-6"> {/* Use mt-auto to push button to bottom */}
                        <button className="w-full bg-[#2776d3] text-white hover:bg-yellow-400 hover:text-gray-900 font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-105">
                          Book Session
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
