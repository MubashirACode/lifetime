import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const phoneNumber = "923040240020";
   const message = "Hello! I'd like to inquire about gym membership.";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-[100] h-[90px] 
        px-4 md:px-16 lg:px-24 xl:px-32 
        flex items-center justify-between 
        transition-all duration-500
        ${scrolled
          ? 'bg-white/75 backdrop-blur-xl shadow-xl border-b border-white/20'
          : 'bg-white/65 backdrop-blur-2xl'
        }
        before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/50 before:to-transparent before:pointer-events-none
      `}
      style={{
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}
    >
      {/* Inner Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-transparent pointer-events-none" />

      {/* Logo */}
      <img
        src="/logo2.webp"
        loading="lazy"
        alt="Lifetime Fitness"
        className="relative z-10 w-20 md:w-24 lg:w-24 cursor-pointer"
      />

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-6 lg:gap-10 text-gray-900 text-base lg:text-lg font-medium relative z-10">
        {['Home', 'About', 'Trainer', 'Contact', 'Pricing'].map((item) => (
          <li key={item} className="relative">
            <a
              href={`#${item.toLowerCase()}`}
              className="px-2 py-1 hover:text-[#2776d3] transition-colors duration-300 
                         after:content-[''] after:absolute after:bottom-0 after:left-0 
                         after:h-[3px] after:w-full after:bg-gradient-to-r after:from-[#2776d3] after:to-[#1e5cb3] 
                         after:scale-x-0 after:origin-left after:transition-transform after:duration-300 
                         hover:after:scale-x-100"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* Join Button */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative "

      >
        <button className="hidden md:inline cursor-pointer w-full bg-[#2776d3] text-white hover:bg-yellow-400 hover:text-gray-900 transition-all font-bold text-sm px-6 py-2.5 rounded-lg active:scale-95 hover:scale-105 shadow-lg hover:shadow-xl border border-white/30">
          Join Now
        </button>
      </a>

      {/* Mobile Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-gray-900 active:scale-90 transition-all relative z-10"
      >
        {isOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`
          fixed top-[90px] left-0 right-0 
          bg-white/70 backdrop-blur-2xl p-6 md:hidden 
          shadow-2xl border-t border-white/20 transition-all duration-300
          ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}
        `}
        style={{
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
      >
        <ul className="flex flex-col items-center gap-6 text-gray-900 text-lg font-medium">
          {['Home', 'About', 'Trainer', 'Contact'].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="hover:text-[#2776d3]">
                {item}
              </a>
            </li>
          ))}
        </ul>


        <a
          href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="relative "

        >


          <button className="mt-4 w-full bg-gradient-to-r from-[#2776d3] to-[#1e5cb3] text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 border border-white/30">
            Contact Now
          </button>


        </a>

      </div>
    </nav>
  );
};