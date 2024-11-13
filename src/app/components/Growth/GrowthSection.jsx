"use client";
import React from "react";
import Image from "next/image";

const GrowthSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#24358b] via-[#202766] to-[#141b43] py-16 px-6">
      <div className="max-w-6xl mx-auto text-center flex flex-col py-24 h-[600px] items-center justify-center border-b border-gray-50 border-opacity-10">
        {/* Heading Section */}
        <h2 className="text-2xl md:text-[45px] leading-normal font-bold text-white mb-4">
        Unlock Growth and Expand into New Markets

          <br />
          with <span className="text-secondary">EXPERT FOREX MARKETING SOLUTIONS</span>
        </h2>
        
        <h3 className="text-white text-xl md:text-2xl font-semibold mt-6">
          Ready to take your brokerage to the next level?
        </h3>

        <p className="text-lg md:text-xl text-gray-300 mt-4">
          At Market Mavens, we specialize in driving growth for online trading brokers through tailored, 
          data-driven marketing strategies designed to boost brand awareness, generate high-quality leads, 
          and accelerate client acquisition.
        </p>

        {/* Call to Action Button */}
        <div className="mt-10">
          <a
            href="#contact"
            className="inline-block bg-white text-[#141b43] font-bold py-3 px-12 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
          >
            Talk to Us!
          </a>
        </div>
      </div>
      <div className="max-w-6xl mx-auto pt-12 text-center">
      <h3 className="text-white text-3xl md:text-4xl font-semibold my-6">
      Why Choose Us?

        </h3>

        <p className="text-lg md:text-xl text-gray-300 mt-4">
        Our team of fintech marketing experts is dedicated to helping your brokerage achieve scalable growth while
opening doors to new, lucrative markets. Whether you’re looking to strengthen your presence in established markets
or expand into the GCC or Southeast Asia, we have the expertise to guide you through every step of your marketing
journey.
        </p>
      </div>
    </section>
  );
};

export default GrowthSection;
