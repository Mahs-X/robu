'use client';

import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Youtube, 
  Instagram, 
  MessageCircle,
  ArrowUp,
  BookOpen,
  User,
  Zap,
  Trophy,
  Shield,
  Heart
} from 'lucide-react';

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const shouldReduceMotion = useReducedMotion();

  // Back to top functionality
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Reduced motion variants
  const reducedMotion = {
    initial: { opacity: 0 },
    animate: { opacity: 1 }
  };

  const cardVariants = shouldReduceMotion ? reducedMotion : {
    initial: { y: 20, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Footer data
  const quickLinks = [
    { icon: BookOpen, name: 'হোম', href: '#home' },
    { icon: User, name: 'আমাদের সম্পর্কে', href: '#about' },
    { icon: Zap, name: 'কোর্সসমূহ', href: '#courses' },
    { icon: Trophy, name: 'সফলতার গল্প', href: '#reviews' },
    { icon: MessageCircle, name: 'যোগাযোগ', href: '#contact' }
  ];

  const contactInfo = [
    { icon: Phone, text: '017XX-XXXXXX', href: 'tel:+88017XXXXXXXX' },
    { icon: Mail, text: 'info@robiscience.edu.bd', href: 'mailto:info@robiscience.edu.bd' },
    { icon: MapPin, text: 'রাজশাহী সিটি, বরেন্দ্র বিশ্ববিদ্যালয়ের নিকটে', href: 'https://maps.google.com' },
    { icon: Clock, text: 'শনি-বৃহস্পতি: সকাল ৯টা - রাত ৯টা', href: null }
  ];

  const socialLinks = [
    { icon: Facebook, name: 'Facebook', href: 'https://facebook.com/robiscience', color: 'text-blue-500' },
    { icon: Youtube, name: 'YouTube', href: 'https://youtube.com/robiscience', color: 'text-red-500' },
    { icon: Instagram, name: 'Instagram', href: 'https://instagram.com/robiscience', color: 'text-pink-500' }
  ];

  const legalLinks = [
    { name: 'প্রাইভেসি পলিসি', href: '/privacy' },
    { name: 'টার্মস অ্যান্ড কন্ডিশন', href: '/terms' },
    { name: 'রিফান্ড পলিসি', href: '/refund' }
  ];

  return (
    <footer className="bg-gray-900 text-white relative" role="contentinfo">
      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: showBackToTop ? 1 : 0, 
          scale: showBackToTop ? 1 : 0 
        }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-indigo-600 rounded-full shadow-2xl flex items-center justify-center hover:bg-indigo-700 transition-colors duration-300"
        aria-label="Back to top"
      >
        <ArrowUp className="w-6 h-6" aria-hidden="true" />
      </motion.button>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand Column */}
          <motion.div
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center mr-3">
                <BookOpen className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-white">রবি সায়েন্স</h3>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              রাজশাহীর সেরা এসএসসি বিজ্ঞান কোচিং সেন্টার। বরেন্দ্র বিশ্ববিদ্যালয়ের শিক্ষকের 
              গবেষণাভিত্তিক পাঠদান ও ব্যক্তিগত যত্নে আপনার সাফল্য নিশ্চিত।
            </p>

            {/* Trust Badges */}
            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-300">
                <Shield className="w-4 h-4 text-green-400 mr-2" aria-hidden="true" />
                <span>যাচাইকৃত শিক্ষক প্রোফাইল</span>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <Heart className="w-4 h-4 text-red-400 mr-2" aria-hidden="true" />
                <span>৭০+ A+ প্রাপ্ত ছাত্র</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: shouldReduceMotion ? 0 : 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-6 text-white border-l-4 border-indigo-500 pl-3">
              দ্রুত লিংক
            </h4>
            <ul className="space-y-3" role="list">
              {quickLinks.map((link, index) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={shouldReduceMotion ? {} : { x: 5 }}
                    className="flex items-center text-gray-300 hover:text-white transition-colors duration-200 group"
                  >
                    <link.icon className="w-4 h-4 mr-3 text-indigo-400 group-hover:text-indigo-300" aria-hidden="true" />
                    <span>{link.name}</span>
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: shouldReduceMotion ? 0 : 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-6 text-white border-l-4 border-indigo-500 pl-3">
              যোগাযোগ
            </h4>
            <ul className="space-y-4" role="list">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start">
                  <item.icon className="w-5 h-5 text-indigo-400 mr-3 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  {item.href ? (
                    <a 
                      href={item.href} 
                      className="text-gray-300 hover:text-white transition-colors duration-200 leading-relaxed"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-gray-300 leading-relaxed">{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social & Newsletter */}
          <motion.div
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: shouldReduceMotion ? 0 : 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-6 text-white border-l-4 border-indigo-500 pl-3">
              সোশ্যাল মিডিয়া
            </h4>
            
            {/* Social Media Links */}
            <div className="flex space-x-4 mb-8">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={shouldReduceMotion ? {} : { scale: 1.1 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                  className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-300 ${social.color}`}
                  aria-label={`Follow us on ${social.name}`}
                >
                  <social.icon className="w-5 h-5" aria-hidden="true" />
                </motion.a>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gray-800 rounded-xl p-4">
              <h5 className="text-sm font-semibold mb-2 text-white">
                নিউজলেটার সাবস্ক্রাইব করুন
              </h5>
              <p className="text-xs text-gray-300 mb-3">
                ভর্তি তথ্য ও অফার পান সরাসরি ইমেইলে
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="আপনার ইমেইল"
                  className="flex-1 px-3 py-2 bg-gray-700 text-white text-sm rounded-lg border border-gray-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none"
                  aria-label="Email for newsletter subscription"
                />
                <motion.button
                  whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                  className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-300"
                >
                  সাবস্ক্রাইব
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: shouldReduceMotion ? 0 : 0.4 }}
          className="border-t border-gray-800 mt-12 pt-8"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {currentYear} রবি সায়েন্স কোচিং সেন্টার। সকল অধিকার সংরক্ষিত।
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center space-x-6 text-sm">
              {legalLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={shouldReduceMotion ? {} : { color: "#ffffff" }}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            {/* Payment Methods */}
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>পেমেন্ট মাধ্যম:</span>
              <div className="flex space-x-1">
                <span className="bg-gray-800 px-2 py-1 rounded text-xs">bKash</span>
                <span className="bg-gray-800 px-2 py-1 rounded text-xs">Nagad</span>
                <span className="bg-gray-800 px-2 py-1 rounded text-xs">Cash</span>
              </div>
            </div>
          </div>

          {/* Accreditation */}
          <div className="text-center mt-6 pt-6 border-t border-gray-800">
            <p className="text-xs text-gray-500">
              একটি বিশ্বস্ত শিক্ষাপ্রতিষ্ঠান | রাজশাহী শিক্ষা বোর্ড অনুমোদিত | বরেন্দ্র বিশ্ববিদ্যালয়ের সহযোগিতায়
            </p>
          </div>
        </motion.div>
      </div>

      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "রবি সায়েন্স কোচিং সেন্টার",
            "description": "রাজশাহীর প্রিমিয়াম এসএসসি বিজ্ঞান কোচিং সেন্টার",
            "url": "https://robiscience.edu.bd",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Rajshahi",
              "addressRegion": "Rajshahi Division",
              "addressCountry": "BD"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+880-17XX-XXXXXX",
              "contactType": "admissions"
            },
            "sameAs": socialLinks.map(social => social.href)
          })
        }}
      />
    </footer>
  );
}