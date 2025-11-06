import React, { useState } from 'react';

export const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

const contactInfo = [
 {
  icon: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  ),
  title: "Location",
  content: (
    <a
      href="https://maps.app.goo.gl/jFsyt51d9CCFrj1U7"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block cursor-pointer hover:text-[#2776d3] transition-colors group"
    >
      <span className="block leading-tight">
        Plot 2 64, Jamia Hammadia Masjid Big #2,<br />
        2 Shah Faisal Ave, near Hammadia Masjid,<br />
        Block 2 Shah Faisal Colony 2,<br />
        Shah Faisal Town, Karachi 75230
      </span>
      <span className="block text-xs font-medium text-[#2776d3] mt-1 group-hover:underline">
        V5H2+VG Shah Faisal Town
      </span>
    </a>
  )
},
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>
    ),
    title: "Phone",
    content: (
      <a href="tel:+923040240020" className="hover:text-yellow-400 transition-colors">
        03040240020
      </a>
    )
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
      </svg>
    ),
    title: "Email",
    content: (
      <a href="mailto:info@lifetimefitness.com" className="hover:text-yellow-400 transition-colors">
        info@lifetimefitness.com
      </a>
    )
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
    ),
    title: "Opening Hours",
    content: (
      <>
        <span className="font-semibold text-black ">Boys Timings:</span><br />
        Morning: <strong>6:00 AM - 11:00 AM</strong><br />
        Evening: <strong>4:00 PM - 12:00 AM</strong>
      </>
    )
  }
];

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
            Get in <span className="text-[#2776d3]">Touch</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to start your fitness journey? Contact us today and let's make it happen together!
          </p>
        </div>

        {/* Form + Info Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Form - HIGHLIGHTED */}
          <div className="animate-slideInLeft">
            <form
              onSubmit={handleSubmit}
              className="
                space-y-6 
                bg-white 
                p-6 md:p-8 
                rounded-2xl 
                shadow-2xl 
                border-2 
                border-gray-300 
                hover:border-[#2776d3] 
                hover:shadow-[#2776d3]/20 
                transition-all 
                duration-500 
                ring-4 
                ring-transparent 
                hover:ring-[#2776d3]/10
              "
            >
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2776d3] focus:ring-2 focus:ring-[#2776d3]/20 transition-all duration-300 outline-none"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2776d3] focus:ring-2 focus:ring-[#2776d3]/20 transition-all duration-300 outline-none"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell us about your fitness goals..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2776d3] focus:ring-2 focus:ring-[#2776d3]/20 transition-all duration-300 outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="
                  w-full 
                  bg-[#2776d3] 
                  hover:bg-[#fec200] 
                  text-white 
                  hover:text-gray-900 
                  font-bold 
                  text-lg 
                  py-4 
                  rounded-xl 
                  shadow-lg 
                  hover:shadow-2xl 
                  hover:shadow-[#fec200]/50 
                  transform 
                  hover:-translate-y-1 
                  transition-all 
                  duration-300 
                  flex 
                  items-center 
                  justify-center 
                  gap-2
                  cursor-pointer
                "
              >
                Send Message
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </form>
          </div>

          {/* Contact Info - HIGHLIGHTED */}
          <div className="space-y-6 animate-slideInRight">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="
                  group 
                  bg-white 
                  p-6 
                  rounded-xl 
                  border-2 
                  border-gray-300 
                  hover:border-[#2776d3] 
                  hover:shadow-2xl 
                  hover:shadow-[#2776d3]/20 
                  transition-all 
                  duration-500 
                  flex 
                  items-start 
                  gap-4 
                  ring-4 
                  ring-transparent 
                  hover:ring-[#2776d3]/10
                "
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <div className="text-[#2776d3]  font-semibold transition-colors">
                  {info.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 group-hover:text-[#2776d3] transition-colors">
                    {info.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {info.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


    </section>
  );
};