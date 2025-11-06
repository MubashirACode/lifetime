import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';


export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect
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
        sticky top-0 z-50 h-[90px] w-full px-4 md:px-16 lg:px-24 xl:px-32 
        flex items-center justify-between transition-all duration-500
        ${scrolled
          ? 'bg-white/80 backdrop-blur-lg shadow-lg border-b border-gray-100'
          : 'bg-white'
        }
      `}
    >
      {/* Logo */}
      <img
        src="/logo2.webp"
        loading="lazy"
        alt="Lifetime Fitness"
        className="w-20 md:w-24 lg:w-24  cursor-pointer transition-all duration-300"
      />

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-6 lg:gap-10 text-gray-900 text-base lg:text-lg font-medium">
        {['Home', 'About', 'Trainer', 'Contact', 'Pricing'].map((item) => (
          <li key={item} className="relative">
            <a
              href={`#${item.toLowerCase()}`}
              className="px-2 py-1 hover:text-blue-600 transition-colors duration-300 
                         after:content-[''] after:absolute after:bottom-0 after:left-0 
                         after:h-[3px] after:w-full after:bg-blue-600 after:scale-x-0 
                         after:origin-left after:transition-transform after:duration-300 
                         hover:after:scale-x-100"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* Join Button */}
      <a href="#contact" className='block'>
        <button
          type="button"
          className=" bg-[#2776d3] hover:bg-yellow-400 text-white hover:text-gray-900  hidden cursor-pointer md:inline  font-bold text-sm px-6 py-2.5 rounded-lg
                   hover:bg-blue-700 active:scale-95 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Join Now
        </button>
      </a>
      {/* Mobile Menu Toggle */}
      <button
        aria-label="menu-btn"
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-gray-900 active:scale-90 transition-all duration-300"
      >
        {isOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`
          absolute top-[90px] left-0 w-full bg-white/95 backdrop-blur-lg p-6 md:hidden 
          shadow-xl border-t border-gray-100 transition-all duration-300 ease-in-out
          ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}
        `}
      >
        <ul className="flex flex-col items-center gap-6 text-gray-900 text-lg font-medium">
          {['Home', 'About', 'Trainer', 'Contact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-600 transition-colors duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className='block'>
          <button className="mt-4 w-full bg-[#2776d3] hover:bg-yellow-400 text-white hover:text-gray-900 font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-105">
            Contact Now
          </button>

        </a>
      </div>
    </nav>
  );
};