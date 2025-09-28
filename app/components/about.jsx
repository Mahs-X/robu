'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { GraduationCap, Target, HeartHandshake, Zap, Trophy } from 'lucide-react';
import Image from 'next/image';

// Reduced motion support
const reducedMotionCard = {
  initial: { opacity: 0 },
  animate: { opacity: 1 }
};

export default function AboutSection() {
  const shouldReduceMotion = useReducedMotion();

  // Animation variants with reduced motion fallback
  const cardVariants = shouldReduceMotion ? reducedMotionCard : {
    initial: { y: 50, opacity: 0 },
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

  const iconStyle = "w-6 h-6 text-white";
  const iconBg = "bg-indigo-600 p-2 rounded-full shadow-lg flex-shrink-0";

  // Value Proposition Card Component
  const ValuePropCard = ({ Icon, title, description, delay }) => (
    <motion.div
      variants={cardVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: shouldReduceMotion ? 0 : delay }}
      className="flex space-x-4 p-5 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
      role="article"
      aria-label={`Value proposition: ${title}`}
    >
      <div className={iconBg} aria-hidden="true">
        <Icon className={iconStyle} />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-1">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );

  return (
    <section 
      id="about"
      className="py-20 lg:py-32 bg-white font-inter"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Skip link target */}
        <div id="main-about-content" className="sr-only" aria-label="About section main content"></div>

        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase text-indigo-600 tracking-wider">
            আমাদের প্রতিশ্রুতি
          </span>
          <h2 
            id="about-heading"
            className="mt-2 text-4xl sm:text-5xl font-extrabold text-gray-900"
          >
            রবি সায়েন্স কোচিং সেন্টার সম্পর্কে
          </h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Left Column: Teacher Profile */}
          <motion.div
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="space-y-8 mb-12 lg:mb-0 p-6 bg-indigo-50 rounded-3xl shadow-2xl"
          >
            {/* Teacher Profile Card */}
            <div 
              className="bg-white p-6 rounded-2xl shadow-xl border-t-4 border-indigo-500"
              role="complementary"
              aria-label="Teacher profile information"
            >
              <div className="flex items-start space-x-4">
                {/* Teacher Image */}
                <div className="relative w-40 h-40 rounded-full overflow-hidden bg-indigo-100 flex-shrink-0 outline-blue-400 outline-3 ">
                  <Image
                    src="/rae.webp"
                    alt="রবি সায়েন্স কোচিং সেন্টারের প্রতিষ্ঠাতা শিক্ষক"
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <GraduationCap className="w-10 h-10 text-indigo-600 mb-2" aria-hidden="true"/>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">প্রতিষ্ঠাতা ও শিক্ষক</h3>
                  <p className="text-indigo-700 font-semibold text-lg">
                    বরেন্দ্র বিশ্ববিদ্যালয়ের ফ্যাকাল্টি মেম্বার
                  </p>
                </div>
              </div>
              
              <div className="mt-4 space-y-2">
                <p className="text-gray-600">
                  তিনি ঢাকা/রাজশাহী বিশ্ববিদ্যালয় থেকে ইংরেজিতে এবং <strong>রসায়নে (Chemistry-তে) এম.এস.সি (M.Sc.)</strong> সম্পন্ন করেছেন।
                </p>
                <p className="text-gray-600">
                  তাঁর শিক্ষকতার অভিজ্ঞতা <strong>৫+ বছরেরও বেশি</strong>।
                </p>
              </div>
            </div>

            {/* Research Focus Quote */}
            <div 
              className="p-4 border-l-4 border-indigo-400 bg-white rounded-lg shadow-md"
              role="complementary"
              aria-label="Teaching philosophy"
            >
              <p className="text-gray-700 italic leading-relaxed">
                "তিনি প্রতিনিয়ত গবেষণা করেন কিভাবে ছাত্র-ছাত্রীদের আরও ভালো ফল করানো যায় এবং তার সেরা ফলাফল বের করে আনেন।"
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <p className="text-2xl font-bold text-indigo-600">৫+</p>
                <p className="text-xs text-gray-600">বছর অভিজ্ঞতা</p>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <p className="text-2xl font-bold text-indigo-600">৭০+</p>
                <p className="text-xs text-gray-600">A+ প্রাপ্তি</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Value Propositions */}
          <div className="space-y-8" role="list" aria-label="Our value propositions">
            <ValuePropCard
              Icon={HeartHandshake}
              title="বন্ধুত্বপূর্ণ পাঠদান"
              description="শিক্ষক-ছাত্র সম্পর্ক এখানে অত্যন্ত বন্ধুত্বপূর্ণ, যার ফলে কোনো সংকোচ ছাড়াই সকলে প্রশ্ন করতে পারে।"
              delay={0.2}
            />

            <ValuePropCard
              Icon={Target}
              title="ব্যক্তিগত অতিরিক্ত যত্ন"
              description="কোনো শিক্ষার্থী বুঝতে না পারলে, তাকে অতিরিক্ত সময় দিয়ে (Extra Class-এর মাধ্যমে) আলাদাভাবে বুঝিয়ে দেওয়া হয়।"
              delay={0.4}
            />

            <ValuePropCard
              Icon={Trophy}
              title="সাফল্যের নিশ্চয়তা ও স্টাডি শিট"
              description="গত বছর ৭০ এরও অধিক A+ প্রাপ্তি! প্রতিটি টপিক শেষে দেওয়া শিট থেকে SSC-তে ৯৫% কমন আসার সম্ভাবনা থাকে।"
              delay={0.6}
            />
            
            <ValuePropCard
              Icon={Zap}
              title="উন্নত ক্লাসরুম ও রুটিন"
              description="ক্লাস হয় এসি রুমে (AC Room)। সপ্তাহে ৬ দিন ক্লাস এবং প্রতি সপ্তাহে একবার করে পরীক্ষার ব্যবস্থা রয়েছে।"
              delay={0.8}
            />
          </div>
        </div>
      </div>
    </section>
  );
}