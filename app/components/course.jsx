'use client';

import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Atom, SunSnow, FlaskConical, Leaf, BookOpen, ClipboardCheck, GraduationCap, Zap, Calendar, ShieldCheck, Users, Clock } from 'lucide-react';

export default function CourseStructure() {
  const [selectedPayment, setSelectedPayment] = useState('one-time');
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

  // Course data
  const subjects = [
    {
      icon: Atom,
      name: "পদার্থবিদ্যা (Physics)",
      description: "থিওরি ও প্র্যাকটিক্যাল ক্লাসের মাধ্যমে ধারণা পরিষ্কার করা",
      color: "blue"
    },
    {
      icon: FlaskConical, 
      name: "রসায়ন (Chemistry)",
      description: "মৌলিক ধারণা থেকে এডভান্সড সব টপিক সহজভাবে শেখানো",
      color: "green"
    },
    {
      icon: Leaf,
      name: "জীববিজ্ঞান (Biology)",
      description: "ডায়াগ্রাম ও মডেলের মাধ্যমে জটিল টপিকগুলো বুঝানো",
      color: "emerald"
    }
  ];

  const features = [
    {
      icon: GraduationCap,
      title: "গবেষণাভিত্তিক শিক্ষা",
      description: "বরেন্দ্র বিশ্ববিদ্যালয়ের শিক্ষকের নিরন্তর গবেষণা থেকে প্রাপ্ত সেরা পদ্ধতি"
    },
    {
      icon: BookOpen,
      title: "স্টাডি শিট নির্ভর প্রস্তুতি", 
      description: "প্রতি টপিক শেষে বিশেষ শিট যা থেকে ৯৫% কমন আসার সম্ভাবনা"
    },
    {
      icon: ClipboardCheck,
      title: "সাপ্তাহিক মূল্যায়ন",
      description: "সপ্তাহে একবার পরীক্ষা মাধ্যমে দুর্বলতা চিহ্নিতকরণ ও উন্নতি"
    },
    {
      icon: SunSnow,
      title: "এসি ক্লাসরুম সুবিধা",
      description: "আরামদায়ক এসি রুমে সপ্তাহে ৬ দিন ক্লাস"
    }
  ];

  const paymentOptions = [
    {
      id: 'one-time',
      name: 'এককালীন ফি',
      price: '৭,০০০',
      originalPrice: '৯,০০০',
      savings: '২,০০০ টাকা সাশ্রয়',
      period: 'সম্পূর্ণ ৬ মাসের কোর্স',
      features: ['সমস্ত স্টাডি মেটেরিয়াল', 'বোনাস মডেল টেস্ট', 'প্রাইওরিটি সাপোর্ট'],
      popular: true
    },
    {
      id: 'monthly', 
      name: 'মাসিক কিস্তি',
      price: '১,৫০০',
      period: 'প্রতি মাসে, মোট ৬ মাস',
      total: 'মোট ৯,০০০ টাকা',
      features: ['নিয়মিত স্টাডি মেটেরিয়াল', 'সাপ্তাহিক পরীক্ষা', 'বেসিক সাপোর্ট'],
      flexible: true
    }
  ];

  const stats = [
    { icon: Users, value: '8০+', label: 'সক্রিয় শিক্ষার্থী' },
    { icon: ShieldCheck, value: '৯৫%', label: 'কমন শিট সাফল্য' },
    { icon: Clock, value: '৬ মাস', label: 'কোর্স সময়কাল' },
    { icon: Zap, value: '৭০+', label: 'গত বছরের A+' }
  ];

  return (
    <section id="courses" className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-indigo-50 font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Skip link target */}
        <div id="main-courses-content" className="sr-only">
          কোর্স ও ফি কাঠামো প্রধান বিষয়বস্তু
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
            কোর্স ও ফি কাঠামো
          </motion.span>
          <motion.h1 
            className="mt-2 text-4xl sm:text-5xl font-extrabold text-gray-900"
            variants={containerVariants}
          >
            SSC বিজ্ঞান বিভাগ (৬ মাস)
          </motion.h1>
          <motion.p 
            className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto"
            variants={containerVariants}
          >
            বরেন্দ্র বিশ্ববিদ্যালয়ের শিক্ষকের গবেষণাভিত্তিক বিশেষায়িত প্রস্তুতি। 
            শুধুমাত্র <strong>পদার্থবিদ্যা, রসায়ন ও জীববিজ্ঞান</strong> এর উপর গভীর ফোকাস।
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
              className="bg-white p-6 rounded-2xl shadow-lg text-center"
            >
              <stat.icon className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Subjects Focus */}
        <motion.div 
          className="mb-20"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            যে বিষয়গুলোতে বিশেষ গুরুত্ব দেওয়া হয়
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {subjects.map((subject, index) => (
              <motion.div
                key={subject.name}
                variants={cardVariants}
                transition={{ delay: shouldReduceMotion ? 0 : index * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 text-center hover:shadow-2xl transition-shadow duration-300"
              >
                <div className={`w-16 h-16 bg-${subject.color}-100 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <subject.icon className={`w-8 h-8 text-${subject.color}-600`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{subject.name}</h3>
                <p className="text-gray-600 leading-relaxed">{subject.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Course Features */}
        <motion.div 
          className="mb-20"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              আমাদের কোর্সের মূল বিশেষত্ব
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  variants={cardVariants}
                  transition={{ delay: shouldReduceMotion ? 0 : index * 0.1 }}
                  className="flex space-x-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-indigo-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Fee Structure */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            কোর্স ফি এবং পেমেন্টের বিকল্প
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            আমরা শিক্ষার্থীদের সুবিধা অনুযায়ী ফি প্রদানের দুটি সহজ বিকল্প রেখেছি
          </p>

          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {paymentOptions.map((option, index) => (
              <motion.div
                key={option.id}
                variants={cardVariants}
                transition={{ delay: shouldReduceMotion ? 0 : index * 0.2 }}
                className={`relative bg-white rounded-3xl shadow-2xl p-8 border-2 ${
                  option.popular ? 'border-indigo-500 ring-2 ring-indigo-200' : 'border-gray-200'
                }`}
              >
                {option.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-indigo-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      সর্বাধিক জনপ্রিয়
                    </span>
                  </div>
                )}

                {option.flexible && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      নমনীয় পেমেন্ট
                    </span>
                  </div>
                )}

                <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">{option.name}</h3>
                
                <div className="text-center mb-6">
                  <span className="text-4xl font-extrabold text-indigo-600">{option.price} টাকা</span>
                  {option.originalPrice && (
                    <span className="text-lg text-gray-500 line-through ml-2">{option.originalPrice} টাকা</span>
                  )}
                </div>

                {option.savings && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center mb-6">
                    <span className="text-green-700 font-semibold">🎉 {option.savings}</span>
                  </div>
                )}

                {option.total && (
                  <p className="text-gray-600 text-center mb-6">{option.total}</p>
                )}

                <p className="text-gray-700 text-center mb-6 font-medium">{option.period}</p>

                <ul className="space-y-3 mb-8">
                  {option.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                  onClick={() => setSelectedPayment(option.id)}
                  className={`w-full py-4 rounded-xl font-bold text-lg ${
                    option.popular 
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg' 
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200 border border-gray-300'
                  } transition-all duration-300`}
                >
                  {option.popular ? 'এনরোল করুন 🚀' : 'এনরোল করুন'}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mt-16 bg-white rounded-3xl shadow-2xl p-8 lg:p-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            আপনার ভবিষ্যতের инвести今天就 শুরু করুন
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            এই কোর্সটি একটি নির্দিষ্ট সময়ের মধ্যে SSC-এর জন্য আপনার সেরা ফল নিশ্চিত করতে ডিজাইন করা হয়েছে। 
            আজই আমাদের সাথে যোগাযোগ করে আপনার আসন নিশ্চিত করুন।
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
              className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold text-lg shadow-lg hover:bg-indigo-700 transition-colors"
            >
              📞 এখনই কল করুন - 01798754876
            </motion.button>
            <motion.button
              whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
              className="px-8 py-4 bg-white text-indigo-600 border border-indigo-300 rounded-xl font-bold text-lg shadow-md hover:bg-indigo-50 transition-colors"
            >
              💬 মেসেজ করুন
            </motion.button>
          </div>

          <p className="text-sm text-gray-500 mt-6">
            ⏰ সীমিত আসন - প্রথম আসবে প্রথম পাবে
          </p>
        </motion.div>
      </div>
    </section>
  );
}