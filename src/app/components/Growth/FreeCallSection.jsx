"use client";
import React from "react";

const FreeCallSection = () => {
  return (
    <section className="bg-gradient-to-l from-[#141b43] via-[#202766] to-[#24358b] py-16 text-center text-white">
      <div className="container mx-auto px-4">
        {/* Main Call-to-Action */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Book Your Free Introduction Call Today!
          </h2>
          <p className="text-base md:text-lg max-w-5xl mx-auto mb-8">
            Don’t miss out on the chance to grow your brokerage and connect with
            clients in new markets. Schedule a free introduction call with our
            experts today to discover how we can transform your marketing and
            fuel your brokerage’s growth!
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-[#141b43] font-bold py-3 px-12 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
          >
            Talk to Us!
          </a>
        </div>

        {/* Secondary Section with Supporting Text */}
        <div className="bg-gradient-to-r from-[#141b43] via-[#aa165e] to-[#dc3d52] rounded-[50px] p-16 max-w-5xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Let’s Work Together to Grow Your Forex Brokerage!
          </h3>
          <p className="text-base md:text-lg">
            At Market Mavens, your growth is our success. We’ll provide you with
            expert support and personalized strategies to dominate the forex
            market.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FreeCallSection;
