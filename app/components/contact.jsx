'use client';

import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, User, MessageCircle, Shield } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  const shouldReduceMotion = useReducedMotion();

  // Reduced motion variants
  const reducedMotion = {
    initial: { opacity: 0 },
    animate: { opacity: 1 }
  };

  const cardVariants = shouldReduceMotion ? reducedMotion : {
    initial: { y: 30, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const containerVariants = shouldReduceMotion ? {} : {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Format phone number for Bangladeshi numbers
    if (name === 'phone') {
      const formattedPhone = value.replace(/\D/g, '').replace(/(\d{4})(\d{3})(\d{4})/, '$1-$2-$3');
      setFormData(prev => ({ ...prev, [name]: formattedPhone }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', phone: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Contact information
  const contactInfo = [
    {
      icon: Phone,
      title: "ফোন নাম্বার",
      details: ["017XX-XXXXXX", "018XX-XXXXXX"],
      description: "সকাল ৯টা থেকে রাত ৯টা পর্যন্ত"
    },
    {
      icon: MapPin,
      title: "ঠিকানা", 
      details: ["রাজশাহী সিটি", "বরেন্দ্র বিশ্ববিদ্যালয়ের নিকটে"],
      description: "Google Maps এ দেখুন"
    },
    {
      icon: Clock,
      title: "ক্লাস সময়",
      details: ["শনি - বৃহস্পতি: সকাল ৯টা - রাত ৯টা", "শুক্রবার: বন্ধ"],
      description: "সাপ্তাহিক ছুটি"
    },
    {
      icon: Mail,
      title: "ইমেইল",
      details: ["info@robiscience.edu.bd", "admission@robiscience.edu.bd"],
      description: "২৪ ঘন্টার মধ্যে রিপ্লাই"
    }
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-indigo-50 font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Skip link target */}
        <div id="main-contact-content" className="sr-only">
          যোগাযোগ ফর্ম এবং পরিচিতি প্রধান বিষয়বস্তু
        </div>

        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span 
            className="text-sm font-semibold uppercase text-indigo-600 tracking-wider"
            variants={containerVariants}
          >
            যোগাযোগ
          </motion.span>
          <motion.h1 
            className="mt-2 text-4xl sm:text-5xl font-extrabold text-gray-900"
            variants={containerVariants}
          >
            ভর্তি ও পরামর্শের জন্য যোগাযোগ করুন
          </motion.h1>
          <motion.p 
            className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto"
            variants={containerVariants}
          >
            এসএসসি বিজ্ঞান বিভাগে ভর্তি, ফি কাঠামো বা যেকোনো পরামর্শের জন্য নিচের ফর্মটি পূরণ করুন। 
            আমরা ২৪ ঘন্টার মধ্যে আপনার সাথে যোগাযোগ করব।
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Form */}
          <motion.div
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10"
          >
            <div className="flex items-center mb-8">
              <MessageCircle className="w-8 h-8 text-indigo-600 mr-3" aria-hidden="true" />
              <h2 className="text-2xl font-bold text-gray-900">দ্রুত মেসেজ পাঠান</h2>
            </div>

            {/* Submission Status */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6"
              >
                <p className="text-green-700 font-medium text-center">
                  ✅ আপনার মেসেজ সফলভাবে পাঠানো হয়েছে! আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।
                </p>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-50 border h-200 border-red-200 rounded-xl p-4 mb-6"
              >
                <p className="text-red-700 font-medium text-center">
                  ❌ মেসেজ পাঠানো যায়নি। অনুগ্রহ করে পরে আবার চেষ্টা করুন বা সরাসরি ফোন করুন।
                </p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  <User className="w-4 h-4 inline mr-1" aria-hidden="true" />
                  আপনার সম্পূর্ণ নাম *
                </label>
                <motion.input
                  whileFocus={shouldReduceMotion ? {} : { scale: 1.02 }}
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="আরিফ হোসেন"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                  aria-describedby="name-help"
                />
                <p id="name-help" className="mt-1 text-sm text-gray-500">
                  আপনার পুরো নাম লিখুন যেমনটি এসএসসি সার্টিফিকেটে আছে
                </p>
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  <Phone className="w-4 h-4 inline mr-1" aria-hidden="true" />
                  মোবাইল নাম্বার *
                </label>
                <motion.input
                  whileFocus={shouldReduceMotion ? {} : { scale: 1.02 }}
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="017XX-XXX-XXX"
                  pattern="[0-9]{4}-[0-9]{3}-[0-9]{4}"
                  maxLength="13"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                  aria-describedby="phone-help"
                />
                <p id="phone-help" className="mt-1 text-sm text-gray-500">
                  বাংলাদেশি মোবাইল নাম্বার (যেমন: 017XX-XXX-XXX)
                </p>
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  <MessageCircle className="w-4 h-4 inline mr-1" aria-hidden="true" />
                  আপনার বার্তা *
                </label>
                <motion.textarea
                  whileFocus={shouldReduceMotion ? {} : { scale: 1.02 }}
                  id="message"
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="আমি এসএসসি বিজ্ঞান বিভাগে ভর্তি হতে চাই। দয়া করে আমাকে ফি কাঠামো এবং ক্লাসের সময়সূচী সম্পর্কে জানান।"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 resize-vertical"
                  aria-describedby="message-help"
                />
                <p id="message-help" className="mt-1 text-sm text-gray-500">
                  আপনার প্রশ্ন বা পরামর্শ বিস্তারিত লিখুন। আমরা দ্রুত রিপ্লাই দেব।
                </p>
              </div>

              {/* Trust Badge */}
              <div className="flex items-center justify-center p-3 bg-gray-50 rounded-lg border border-gray-200">
                <Shield className="w-5 h-5 text-green-600 mr-2" aria-hidden="true" />
                <span className="text-sm text-gray-600">
                  আপনার তথ্য সম্পূর্ণ সুরক্ষিত। আমরা কখনো স্প্যাম মেসেজ পাঠাই না।
                </span>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={shouldReduceMotion || isSubmitting ? {} : { scale: 1.02 }}
                whileTap={shouldReduceMotion || isSubmitting ? {} : { scale: 0.98 }}
                className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                  isSubmitting 
                    ? 'bg-gray-400 text-gray-200 cursor-not-allowed' 
                    : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg hover:shadow-xl'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    পাঠানো হচ্ছে...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <Send className="w-5 h-5 mr-2" aria-hidden="true" />
                    মেসেজ পাঠান
                  </span>
                )}
              </motion.button>

              {/* Alternative Contact */}
              <p className="text-center text-sm text-gray-500">
                অথবা সরাসরি কল করুন:{" "}
                <a href="tel:+88017XXXXXXXX" className="text-indigo-600 font-semibold hover:underline">
                  017XX-XXXXXX
                </a>
              </p>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: shouldReduceMotion ? 0 : 0.2 }}
            className="space-y-8"
          >
            {/* Contact Info Cards */}
            <div className="grid gap-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={cardVariants}
                  transition={{ delay: shouldReduceMotion ? 0 : index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-indigo-500 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-indigo-600" aria-hidden="true" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <div className="space-y-1">
                        {item.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-700 font-medium">{detail}</p>
                        ))}
                      </div>
                      <p className="text-sm text-gray-500 mt-2">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map Placeholder */}
            <motion.div
              variants={cardVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: shouldReduceMotion ? 0 : 0.4 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <MapPin className="w-5 h-5 text-indigo-600 mr-2" aria-hidden="true" />
                আমাদের অবস্থান
              </h3>
              <div className="bg-gray-200 rounded-xl h-48 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <MapPin className="w-12 h-12 mx-auto mb-2 text-indigo-500" aria-hidden="true" />
                  <p className="font-medium">Google Maps এ দেখুন</p>
                  <p className="text-sm">রাজশাহী সিটি, বরেন্দ্র বিশ্ববিদ্যালয়ের নিকটে</p>
                </div>
              </div>
              <div className="mt-4 text-center">
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-indigo-600 font-semibold hover:underline"
                >
                  <MapPin className="w-4 h-4 mr-1" aria-hidden="true" />
                  Google Maps এ দিকনির্দেশনা দেখুন
                </a>
              </div>
            </motion.div>

            {/* Emergency Contact */}
            <motion.div
              variants={cardVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: shouldReduceMotion ? 0 : 0.6 }}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-2xl p-6 text-white"
            >
              <h3 className="text-lg font-semibold mb-2">জরুরি যোগাযোগ</h3>
              <p className="text-indigo-100 mb-4">
                ভর্তি সম্পর্কিত জরুরি কোনো প্রশ্ন থাকলে সরাসরি কল করুন
              </p>
              <div className="text-center">
                <a 
                  href="tel:+88017XXXXXXXX" 
                  className="inline-flex items-center bg-white text-indigo-600 px-6 py-3 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
                  এখনই কল করুন
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}