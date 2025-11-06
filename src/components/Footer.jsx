import React from 'react'
import  logo3 from '../assets/logo3.png'
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail, Clock, Dumbbell } from 'lucide-react';
export const Footer = () => {
    return (
        <div>

           <footer className="bg-gradient-to-br from-[#1e5cb3] via-[#2776d3] to-[#1e5cb3] text-white relative overflow-hidden">
            {/* Decorative Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 left-10">
                    <Dumbbell className="w-32 h-32 transform rotate-45" />
                </div>
                <div className="absolute bottom-10 right-10">
                    <Dumbbell className="w-32 h-32 transform -rotate-45" />
                </div>
            </div>

            <div className="relative px-6 md:px-16 lg:px-24 xl:px-32 pt-16 pb-8">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                    {/* About Section */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-0 mb-6">
                            <div className="  p-3 rounded-xl">
                              <img src={logo3} alt="" className='w-20 md:w-24 lg:w-24  cursor-pointer transition-all duration-300'/>
                            </div>
                            <h2 className="text-3xl font-black text-white">
                                LIFETIME <span className="text-yellow-400">FITNESS</span>
                            </h2>
                        </div>
                        <p className="text-white/90 leading-relaxed mb-6 text-sm">
                            Transform your life at Lifetime Fitness – where champions are made! We're not just a gym, 
                            we're a complete fitness ecosystem dedicated to helping you achieve your ultimate physique. 
                            With state-of-the-art equipment, expert trainers, and a motivating community, your fitness 
                            journey starts here. Join us and unleash your inner strength!
                        </p>
                        
                        {/* Social Media Links */}
                        <div className="flex gap-4">
                            <a href="#" className="bg-white/10 hover:bg-yellow-400 backdrop-blur-sm p-3 rounded-lg transition-all hover:scale-110 group">
                                <Facebook className="w-5 h-5 text-white group-hover:text-gray-900" />
                            </a>
                            <a href="#" className="bg-white/10 hover:bg-yellow-400 backdrop-blur-sm p-3 rounded-lg transition-all hover:scale-110 group">
                                <Instagram className="w-5 h-5 text-white group-hover:text-gray-900" />
                            </a>
                            <a href="#" className="bg-white/10 hover:bg-yellow-400 backdrop-blur-sm p-3 rounded-lg transition-all hover:scale-110 group">
                                <Twitter className="w-5 h-5 text-white group-hover:text-gray-900" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold text-xl mb-6 text-yellow-400 flex items-center gap-2">
                            <div className="w-1 h-6 bg-yellow-400 rounded-full"></div>
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#home" className="text-white/80 hover:text-yellow-400 hover:pl-2 transition-all text-sm flex items-center gap-2 group">
                                    <span className="w-0 group-hover:w-2 h-0.5 bg-yellow-400 transition-all"></span>
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="text-white/80 hover:text-yellow-400 hover:pl-2 transition-all text-sm flex items-center gap-2 group">
                                    <span className="w-0 group-hover:w-2 h-0.5 bg-yellow-400 transition-all"></span>
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#pricing" className="text-white/80 hover:text-yellow-400 hover:pl-2 transition-all text-sm flex items-center gap-2 group">
                                    <span className="w-0 group-hover:w-2 h-0.5 bg-yellow-400 transition-all"></span>
                                    Pricing Plans
                                </a>
                            </li>
                            <li>
                                <a href="#trainers" className="text-white/80 hover:text-yellow-400 hover:pl-2 transition-all text-sm flex items-center gap-2 group">
                                    <span className="w-0 group-hover:w-2 h-0.5 bg-yellow-400 transition-all"></span>
                                    Our Trainers
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-white/80 hover:text-yellow-400 hover:pl-2 transition-all text-sm flex items-center gap-2 group">
                                    <span className="w-0 group-hover:w-2 h-0.5 bg-yellow-400 transition-all"></span>
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-bold text-xl mb-6 text-yellow-400 flex items-center gap-2">
                            <div className="w-1 h-6 bg-yellow-400 rounded-full"></div>
                            Get In Touch
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3 text-sm">
                                <div className="bg-white/10 backdrop-blur-sm p-2 rounded-lg mt-0.5">
                                    <MapPin className="w-4 h-4 text-yellow-400" />
                                </div>
                                <div>
                                    <p className="text-white/90 leading-relaxed">
                                        123 Fitness Street, Karachi<br />
                                        Sindh, Pakistan
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-3 text-sm">
                                <div className="bg-white/10 backdrop-blur-sm p-2 rounded-lg">
                                    <Phone className="w-4 h-4 text-yellow-400" />
                                </div>
                                <a href="tel:+923001234567" className="text-white/90 hover:text-yellow-400 transition-colors">
                                    +92 300 1234567
                                </a>
                            </div>
                            
                            <div className="flex items-center gap-3 text-sm">
                                <div className="bg-white/10 backdrop-blur-sm p-2 rounded-lg">
                                    <Mail className="w-4 h-4 text-yellow-400" />
                                </div>
                                <a href="mailto:info@lifetimefitness.com" className="text-white/90 hover:text-yellow-400 transition-colors">
                                    info@lifetimefitness.com
                                </a>
                            </div>
                            
                            <div className="flex items-start gap-3 text-sm">
                                <div className="bg-white/10 backdrop-blur-sm p-2 rounded-lg mt-0.5">
                                    <Clock className="w-4 h-4 text-yellow-400" />
                                </div>
                                <div className="text-white/90">
                                    <p className="font-semibold mb-1">Opening Hours:</p>
                                    <p>Mon - Sat: 6:00 AM - 10:00 PM</p>
                                    <p>Sunday: 7:00 AM - 8:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/20 mb-6"></div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/70 text-sm text-center md:text-left">
                        © 2024 <span className="font-bold text-yellow-400">Lifetime Fitness</span>. All Rights Reserved.
                    </p>
                    <div className="flex gap-6 text-sm">
                        <a href="#" className="text-white/70 hover:text-yellow-400 transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-white/70 hover:text-yellow-400 transition-colors">
                            Terms & Conditions
                        </a>
                    </div>
                </div>

               
            </div>
        </footer>

        </div>
    )
}
