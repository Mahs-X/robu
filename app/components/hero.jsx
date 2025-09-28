'use client';

import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { BookOpen, User, Zap, Mail, Menu, X, MapPin } from 'lucide-react';
import Image from 'next/image';

// Reduced motion preference
const reducedMotionVariant = {
  hover: { scale: 1 },
  tap: { scale: 1 }
};

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const navItems = [
    { name: 'হোম', icon: BookOpen, href: '#home' },
    { name: 'কোর্সের বিবরণ', icon: Zap, href: '#courses' },
    { name: 'শিক্ষক', icon: User, href: '#teachers' },
    { name: 'ফলাফল', icon: Zap, href: '#results' },
    { name: 'যোগাযোগ', icon: Mail, href: '#contact' },
  ];

  // Animation variants with reduced motion support
  const liquidVariant = shouldReduceMotion ? reducedMotionVariant : {
    hover: {
      scale: 1.1,
      transition: { duration: 0.3, type: "spring", stiffness: 300 }
    }
  };

  const textAnimation = shouldReduceMotion ? {} : {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 }
  };

  return (
    <>
      {/* Skip to main content for accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white p-2 z-50">
        Skip to main content
      </a>

      <div className="min-h-screen bg-gray-50 font-inter text-gray-800">
        {/* Navigation */}
        <header className="sticky top-0 z-50 shadow-lg bg-white/95 backdrop-blur-sm">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
            <div className="flex justify-between items-center h-20">
              <motion.a 
                href="/"
                whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                className="flex-shrink-0 text-2xl font-extrabold text-indigo-700 cursor-pointer"
                aria-label="Robi Science Coaching Center Home"
              >
                রবি সায়েন্স কোচিং সেন্টার
              </motion.a>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex space-x-2">
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    variants={liquidVariant}
                    whileHover="hover"
                    className="relative px-4 py-2 font-medium text-gray-600 rounded-full transition-colors duration-300 hover:text-indigo-700 overflow-hidden"
                    aria-label={`Navigate to ${item.name}`}
                  >
                    <motion.span
                      className="absolute inset-0 bg-indigo-100 rounded-full -z-10"
                      initial={{ scale: 0 }}
                      variants={shouldReduceMotion ? {} : { hover: { scale: 1 }}}
                    />
                    <span className="flex items-center space-x-2">
                      <item.icon className="w-5 h-5" aria-hidden="true" />
                      <span>{item.name}</span>
                    </span>
                  </motion.a>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden text-gray-600 hover:text-indigo-700 p-2 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-expanded={isMenuOpen}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </nav>

          {/* Mobile Menu */}
          <motion.div
            initial={false}
            animate={isMenuOpen ? "open" : "closed"}
            variants={{
              open: { opacity: 1, height: "auto" },
              closed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.3 }}
            className="lg:hidden shadow-xl bg-white absolute w-full"
          >
            <div className="flex flex-col p-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="w-full text-left py-3 px-4 text-lg font-medium text-gray-700 rounded-lg transition-colors hover:bg-indigo-50 hover:text-indigo-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        </header>

        {/* Hero Section */}
        <main id="main-content">
          <motion.section
            className="pt-16 pb-24 lg:pt-24 lg:pb-36 bg-gradient-to-br from-indigo-50 to-white"
            initial="initial"
            animate="animate"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className="space-y-6">
                <motion.p 
                  className="text-sm font-semibold uppercase text-indigo-600 tracking-wider flex items-center"
                  {...textAnimation}
                >
                  <MapPin className="w-4 h-4 mr-1" aria-hidden="true"/>
                  রাজশাহী থেকে A+ এর পথ
                </motion.p>

                <motion.h1
                  className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900"
                  {...textAnimation}
                >
                  <span className="block">সেরা শিক্ষকের হাত ধরে,</span>
                  <span className="block text-indigo-700">SSC-তে নিশ্চিত A+ এর প্রস্তুতি।</span>
                </motion.h1>

                <motion.p 
                  className="text-lg text-gray-600 max-w-lg"
                  {...textAnimation}
                >
                  বরেন্দ্র বিশ্ববিদ্যালয়ের অভিজ্ঞ অধ্যাপকের তত্ত্বাবধানে <strong>ফিজিক্স, কেমিস্ট্রি ও বায়োলজি</strong>তে সম্পূর্ণ বিজ্ঞানসম্মত প্রস্তুতি নিন। আমাদের ৯৫% কমন শিট আপনাকে দেবে সর্বোচ্চ সাফল্যের নিশ্চয়তা।
                </motion.p>

                {/* CTA Buttons */}
                <motion.div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
                  <motion.a
                    href="#admission"
                    whileHover={shouldReduceMotion ? {} : { scale: 1.05, boxShadow: "0 10px 20px rgba(99, 102, 241, 0.4)" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto px-8 py-3 text-lg font-bold text-white bg-indigo-600 rounded-xl shadow-xl hover:bg-indigo-700 transition-all duration-300 text-center"
                  >
                    ভর্তি শুরু! বিস্তারিত জানুন 🚀
                  </motion.a>
                  <motion.a
                    href="#demo"
                    whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto px-8 py-3 text-lg font-semibold text-indigo-600 bg-white border border-indigo-200 rounded-xl shadow-md hover:bg-indigo-50 transition-all duration-300 text-center"
                  >
                    ডেমো ক্লাস বুক করুন
                  </motion.a>
                </motion.div>
              </div>

              {/* Visual Content */}
              <div className="relative mt-12 lg:mt-0">
                {/* Optimized Image */}
                <div className="w-full h-80 lg:h-[450px] relative rounded-3xl shadow-2xl overflow-hidden">
                  <Image
                    src="/hero.webp"
                    alt="রবি সায়েন্স কোচিং সেন্টারে শিক্ষক ও ছাত্রের বন্ধুত্বপূর্ণ পরিবেশে পড়াশোনা"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                    className="object-cover"
                  />
                </div>

                {/* Stats */}
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="absolute -top-10 -left-10 bg-white p-4 rounded-xl shadow-2xl border border-indigo-100 hidden sm:block"
                >
                  <p className="text-3xl font-extrabold text-green-600">৭০+</p>
                  <p className="text-sm text-gray-600">গত বছরের A+ প্রাপ্তি</p>
                </motion.div>

                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                  className="absolute -bottom-10 right-0 bg-white p-4 rounded-xl shadow-2xl border border-indigo-100"
                >
                  <p className="text-3xl font-extrabold text-pink-600">৯৫%</p>
                  <p className="text-sm text-gray-600">পরীক্ষায় কমন শিট</p>
                </motion.div>
              </div>
            </div>
          </motion.section>
        </main>
      </div>
    </>
  );
}