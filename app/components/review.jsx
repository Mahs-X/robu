'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Quote, Star, Award, Heart, Shield, Users } from 'lucide-react';
import Image from 'next/image';

export default function ReviewsSection() {
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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const containerVariants = shouldReduceMotion ? {} : {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 }
  };

  // Reviews data
  const reviews = [
    {
      id: 1,
      image: "/p1.webp",
      name: "আরিফ হোসেন",
      role: "সফল ছাত্র, এসএসসি ব্যাচ [২০XX]",
      title: "ছাত্রের সফলতার বিষয়ে মতামত",
      content: "আমার সবচেয়ে বড় সমস্যা ছিল রসায়নের কঠিন টপিকগুলো। কিন্তু স্যার এমন সহজ করে বুঝিয়ে দিতেন যে মনে হতো গল্প শুনছি। আর পরীক্ষার আগে স্যারের দেওয়া ৯৫% কমন শিট তো ম্যাজিকের মতো কাজ করেছে! আমি আমার স্বপ্নের A+ পেয়েছি। স্যার, সত্যিই আপনাকে ধন্যবাদ।",
      highlight: "A+ প্রাপ্তি",
      rating: 5,
      type: "student"
    },
    {
      id: 2,
      image: "/p2.webp", 
      name: "মিসেস ফারহানা আক্তার",
      role: "ছাত্রী: সোনালী আক্তার, অভিভাবক",
      title: "বন্ধুত্বপূর্ণ পরিবেশ নিয়ে অভিভাবকের অনুভূতি",
      content: "আমাদের চিন্তা ছিল, এত অভিজ্ঞ শিক্ষক হয়তো খুব কঠোর হবেন। কিন্তু ক্লাস শুরুর পর দেখলাম স্যার সবার সাথে কতটা ফ্রেন্ডলি। আমার মেয়ে কোনো দ্বিধা ছাড়াই সব প্রশ্ন করতে পারে, আর না বুঝলে স্যার আলাদাভাবে সময় দিয়ে বুঝিয়ে দেন। এই ব্যক্তিগত মনোযোগ একটি কোচিং সেন্টারে খুবই বিরল। আমরা রবি সায়েন্স কোচিং সেন্টারে ভর্তি করে খুবই সন্তুষ্ট।",
      highlight: "ব্যক্তিগত মনোযোগ",
      rating: 5,
      type: "parent"
    },
    {
      id: 3,
      image: "/p3.webp",
      name: "ড. হাসান জামান",
      role: "ছাত্র: রাতুল হাসান, অভিভাবক",
      title: "শিক্ষকের গবেষণা ও যত্নের বিষয়ে মন্তব্য",
      content: "আমি একজন পেশাদার ব্যক্তি হিসেবে জানি, শেখানোর ক্ষেত্রে গবেষণা এবং নতুন পদ্ধতির গুরুত্ব কতখানি। বরেন্দ্র বিশ্ববিদ্যালয়ের শিক্ষক হিসেবে স্যার প্রতিনিয়ত যে রিসার্চ বেসড টিচিং দেন, তার ফলস্বরূপ আমার ছেলের রেজাল্ট অপ্রত্যাশিতভাবে ভালো হয়েছে। সপ্তাহে ৬ দিনের ক্লাস ও এসি রুমের সুবিধাও অসাধারণ।",
      highlight: "গবেষণাভিত্তিক শিক্ষা",
      rating: 5,
      type: "professional"
    },
    {
      id: 4,
      image: "/p4.webp", // Will use placeholder
      name: "নাসিমা বেগম",
      role: "ছাত্র: রিয়াদ আহমেদ, অভিভাবক",
      title: "মাসিক ফি এবং পরীক্ষা পদ্ধতির প্রশংসা",
      content: "একবারে ৭,০০০ টাকা ফি দেওয়া আমাদের জন্য একটু কঠিন ছিল। কিন্তু মাসিক কিস্তিতে (১,৫০০ টাকা) ফি দেওয়ার সুবিধা থাকায় আমরা স্বস্তি পেয়েছি। আর প্রতি সপ্তাহের পরীক্ষা রিয়াদের প্রস্তুতিকে অনেক গোছালো করে দিয়েছে। পরীক্ষার ভয় অনেকটাই কেটে গেছে।",
      highlight: "মাসিক কিস্তি সুবিধা",
      rating: 5,
      type: "parent"
    }
  ];

  const stats = [
    { icon: Star, value: "৪.৯/৫", label: "সন্তুষ্টির হার", color: "amber" },
    { icon: Users, value: "৭০+", label: "সফল ছাত্র", color: "indigo" },
    { icon: Award, value: "৯৫%", label: "কমন শিট সাফল্য", color: "green" },
    { icon: Heart, value: "১০০%", label: "অভিভাবক সন্তুষ্টি", color: "red" }
  ];

  // Star rating component
  const StarRating = ({ rating }) => (
    <div className="flex space-x-1" aria-label={`রেটিং: ${rating} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "text-amber-400 fill-amber-400" : "text-gray-300"
          }`}
          aria-hidden="true"
        />
      ))}
    </div>
  );

  return (
    <section id="reviews" className="py-20 lg:py-32 bg-gradient-to-br from-white to-indigo-50 font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Skip link target */}
        <div id="main-reviews-content" className="sr-only">
          অভিভাবক ও ছাত্রদের সন্তুষ্টির গল্প প্রধান বিষয়বস্তু
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
            সফলতার গল্প
          </motion.span>
          <motion.h1 
            className="mt-2 text-4xl sm:text-5xl font-extrabold text-gray-900"
            variants={containerVariants}
          >
            অভিভাবক ও ছাত্রদের সন্তুষ্টির গল্প
          </motion.h1>
          <motion.p 
            className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto"
            variants={containerVariants}
          >
            আমাদের শিক্ষক বরেন্দ্র বিশ্ববিদ্যালয়ের ফ্যাকাল্টি হওয়ার কারণে শুধুমাত্র তাঁর দক্ষতা নিয়েই নয়, বরং তাঁর বন্ধুত্বপূর্ণ পাঠদান পদ্ধতি ও ব্যক্তিগত যত্ন নিয়েও অভিভাবক ও ছাত্র-ছাত্রীরা অত্যন্ত সন্তুষ্ট।
          </motion.p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={shouldReduceMotion ? {} : {
            animate: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={cardVariants}
              className="bg-white p-6 rounded-2xl shadow-lg text-center border-t-4 border-indigo-500"
            >
              <stat.icon className={`w-8 h-8 text-${stat.color}-600 mx-auto mb-2`} />
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Reviews Grid */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
          variants={shouldReduceMotion ? {} : {
            animate: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {reviews.map((review, index) => (
            <motion.article
              key={review.id}
              variants={cardVariants}
              className={`bg-white rounded-3xl shadow-2xl p-8 relative overflow-hidden group hover:shadow-3xl transition-all mt-8 duration-300 ${
                index % 2 === 0 ? 'lg:mt-8' : 'lg:-mt-8'
              }`}
              itemScope
              itemType="https://schema.org/Review"
            >
              {/* Decorative Background Element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
              
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-indigo-100 group-hover:text-indigo-200 transition-colors duration-300">
                <Quote className="w-12 h-12" aria-hidden="true" />
              </div>

              {/* Review Header */}
              <div className="flex items-start space-x-4 mb-6 relative z-10">
                <div className="relative w-16 h-16 rounded-full overflow-hidden bg-indigo-100 flex-shrink-0 ring-4 ring-white shadow-lg">
                  <Image
                    src={review.image}
                    alt={`${review.name} এর প্রোফাইল ছবি`}
                    fill
                    sizes="64px"
                    className="object-cover"
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(review.name)}&background=indigo-100&color=indigo-600&size=64`;
                    }}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 
                        className="text-lg font-bold text-gray-900 truncate"
                        itemProp="author"
                        itemScope
                        itemType="https://schema.org/Person"
                      >
                        <span itemProp="name">{review.name}</span>
                      </h3>
                      <p className="text-sm text-indigo-600 font-medium mb-1">{review.role}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                        review.type === 'student' ? 'bg-green-100 text-green-800' :
                        review.type === 'parent' ? 'bg-blue-100 text-blue-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>
                        {review.type === 'student' && 'ছাত্র'}
                        {review.type === 'parent' && 'অভিভাবক'}
                        {review.type === 'professional' && 'পেশাদার'}
                      </div>
                    </div>
                  </div>
                  <StarRating rating={review.rating} />
                </div>
              </div>

              {/* Review Title */}
              <h4 className="text-xl font-semibold text-gray-800 mb-4 relative z-10">
                {review.title}
              </h4>

              {/* Review Content */}
              <div className="relative z-10">
                <blockquote className="text-gray-600 leading-relaxed mb-6 italic" itemProp="reviewBody">
                  "{review.content}"
                </blockquote>

                {/* Highlight Tag */}
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                    <Award className="w-4 h-4 mr-1" aria-hidden="true" />
                    {review.highlight}
                  </div>
                  
                  {/* Verified Badge */}
                  <div className="flex items-center text-green-600 text-sm">
                    <Shield className="w-4 h-4 mr-1" aria-hidden="true" />
                    <span>যাচাইকৃত রিভিউ</span>
                  </div>
                </div>
              </div>

              {/* Schema.org Rating */}
              <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating" className="hidden">
                <meta itemProp="ratingValue" content={review.rating.toString()} />
                <meta itemProp="bestRating" content="5" />
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mt-16 bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-indigo-100"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            আপনার সন্তানকেও A+ এর গল্পের অংশ করুন
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            শতাধিক অভিভাবক ও ছাত্রদের মতো আপনারাও সন্তুষ্টি অনুভব করুন। আজই ভর্তি হোন এবং সাফল্যের গল্প লিখুন।
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="#admission"
              whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
              className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold text-lg shadow-lg hover:bg-indigo-700 transition-colors inline-flex items-center"
            >
              <Users className="w-5 h-5 mr-2" aria-hidden="true" />
              আজই ভর্তি হোন
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
              className="px-8 py-4 bg-white text-indigo-600 border border-indigo-300 rounded-xl font-bold text-lg shadow-md hover:bg-indigo-50 transition-colors inline-flex items-center"
            >
              <Quote className="w-5 h-5 mr-2" aria-hidden="true" />
              আরও রিভিউ পড়ুন
            </motion.a>
          </div>

          <p className="text-sm text-gray-500 mt-6 flex items-center justify-center">
            <Shield className="w-4 h-4 mr-1 text-green-500" aria-hidden="true" />
            সকল রিভিউ যাচাইকৃত এবং অনুমতিপ্রাপ্ত
          </p>
        </motion.div>
      </div>
    </section>
  );
}