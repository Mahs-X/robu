// app/page.js
import React from "react";
import Hero from "./components/hero";
import About from "./components/about";
import CourseStructure from "./components/course";
import ContactPage from "./components/contact";
import Review from "./components/review";
import Footer from "./components/footer";
import Head from "next/head";

export const metadata = {
  title: "রবি সায়েন্স কোচিং সেন্টার রাজশাহী | ক্লাস ১-১০ বিজ্ঞান প্রস্তুতি",
  description:
    "বরেন্দ্র বিশ্ববিদ্যালয়ের শিক্ষকদের তত্ত্বাবধানে রাজশাহীর সেরা এসএসসি বিজ্ঞান কোচিং। ৯৫% কমন শিট, ৭০+ A+ ফলাফল। বিনামূল্যে ডেমো ক্লাস বুক করুন।",
  keywords: [
    "রাজশাহী কোচিং সেন্টার",
    "SSC বিজ্ঞান কোচিং",
    "রবি সায়েন্স কোচিং",
    "বিজ্ঞান প্রস্তুতি",
    "এসএসসি প্রস্তুতি রাজশাহী",
    "বরেন্দ্র বিশ্ববিদ্যালয় শিক্ষক",
  ],
  alternates: {
    canonical: "https://robiscience.edu.bd",
  },
  openGraph: {
    title: "রবি সায়েন্স কোচিং - রাজশাহীর সেরা বিজ্ঞান প্রস্তুতি",
    description: "এসএসসি বিজ্ঞানে A+ নিশ্চিত করতে আজই ভর্তি হোন",
    url: "https://robiscience.edu.bd",
    type: "website",
    images: [
      {
        url: "https://robiscience.edu.bd/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "রবি সায়েন্স কোচিং - এসএসসি বিজ্ঞান প্রস্তুতি",
      },
    ],
  },
};

export default function HomePage() {
  return (
    <>
    <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="রবি সায়েন্স কোচিং সেন্টার" />
        <meta name="robots" content="index, follow" />
        <meta name="google-site-verification" content="886frThO_SX107yVFha2VM7-WF6OLQM41PdsL1VpOTU" />
      </Head>
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Course Section */}
      <CourseStructure />

      {/* Contact Section */}
     
      <Review />
 <ContactPage />

 <Footer />
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "EducationalOrganization",
                "name": "রবি সায়েন্স কোচিং সেন্টার",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Rajshahi",
                  "addressCountry": "BD",
                },
                "description":
                  "রাজশাহীর সেরা ক্লাস ১-১০ বিজ্ঞান কোচিং সেন্টার",
                "telephone": "+880-XXXX-XXXXXX",
                "areaServed": "Rajshahi Division",
                "educationalLevel": "Primary and Secondary Education",
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "reviewCount": "70",
                  "bestRating": "5",
                  "worstRating": "1",
                },
                "review": [
                  {
                    "@type": "Review",
                    "author": { "@type": "Person", "name": "আরিফ হোসেন" },
                    "reviewBody":
                      "আমার সবচেয়ে বড় সমস্যা ছিল রসায়নের কঠিন টপিকগুলো। কিন্তু স্যার এমন সহজ করে বুঝিয়ে দিতেন যে মনে হতো গল্প শুনছি। আর পরীক্ষার আগে স্যারের দেওয়া ৯৫% কমন শিট তো ম্যাজিকের মতো কাজ করেছে!",
                    "reviewRating": { "@type": "Rating", "ratingValue": "5" },
                  },
                  {
                    "@type": "Review",
                    "author": { "@type": "Person", "name": "মিসেস ফারহানা আক্তার" },
                    "reviewBody":
                      "আমাদের চিন্তা ছিল, এত অভিজ্ঞ শিক্ষক হয়তো খুব কঠোর হবেন। কিন্তু ক্লাস শুরুর পর দেখলাম স্যার সবার সাথে কতটা ফ্রেন্ডলি। আমার মেয়ে কোনো দ্বিধা ছাড়াই সব প্রশ্ন করতে পারে।",
                    "reviewRating": { "@type": "Rating", "ratingValue": "5" },
                  },
                ],
              },
              {
                "@type": "Course",
                "name": "SSC বিজ্ঞান বিভাগ (৬ মাস)",
                "description": "পদার্থবিদ্যা, রসায়ন ও জীববিজ্ঞানে বিশেষায়িত প্রস্তুতি",
                "provider": { "@type": "EducationalOrganization", "name": "রবি সায়েন্স কোচিং সেন্টার", "address": "Rajshahi" },
                "hasCourseInstance": {
                  "@type": "CourseInstance",
                  "courseMode": "offline",
                  "duration": "P6M",
                  "courseSchedule": "6 days per week",
                },
                "offers": [
                  { "@type": "Offer", "name": "এককালীন ফি", "price": "7000", "priceCurrency": "BDT" },
                  { "@type": "Offer", "name": "মাসিক কিস্তি", "price": "1500", "priceCurrency": "BDT", "billingPeriod": "monthly" },
                ],
              },
              {
                "@type": "EducationalOrganization",
                "name": "রবি সায়েন্স কোচিং সেন্টার",
                "founder": {
                  "@type": "Person",
                  "name": "প্রতিষ্ঠাতা শিক্ষক",
                  "alumniOf": { "@type": "CollegeOrUniversity", "name": "বরেন্দ্র বিশ্ববিদ্যালয়" },
                  "hasCredential": "এম.এস.সি ইন কেমিস্ট্রি",
                  "description": "৫+ বছর শিক্ষকতা অভিজ্ঞতা",
                },
                "description": "রাজশাহীর প্রিমিয়াম এসএসসি বিজ্ঞান কোচিং সেন্টার",
                "address": { "@type": "PostalAddress", "addressLocality": "Rajshahi", "addressRegion": "Rajshahi Division" },
              },
            ],
          }),
        }}
      />
    </>
  );
}
