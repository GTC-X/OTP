"use client";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";



const DynamicSection = () => {
  return (
    <section className="bg-white pb-16 px-6">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Cookies and Similar Technologies</h2>
      <p className=" mb-8 text-lg md:text-xl">
        Our website uses cookies to enhance your browsing experience and provide personalized services. A cookie is a small text file that is stored on your device when you visit a website.
      </p>

      {/* Types of Cookies Section */}
      <div className="mb-8">
        <h3 className="text-2xl md:text-3xl font-semibold my-4">Types of Cookies We Use:</h3>
        <ul className="space-y-4 pt-4">
          <li className="flex items-start">
            <FaCheckCircle className="text-green-500 mt-1 mr-3" size={24} />
            <div>
              
              <p><strong className="text-lg mr-4">Essential Cookies:</strong>
                These cookies are necessary for the website to function properly, enabling basic features like page navigation and access to secure areas.
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-green-500 mt-1 mr-3" size={24} />
            <div>
              
              <p><strong className="text-lg mr-4">Performance Cookies:</strong>
                We use these cookies to collect information on how visitors interact with our website, helping us improve functionality and performance.
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-green-500 mt-1 mr-3" size={24} />
            <div>
              
              <p><strong className="text-lg mr-4">Targeting/Advertising Cookies:</strong>
                These cookies track browsing habits and are used to deliver content and advertising that are relevant to your interests.
              </p>
            </div>
          </li>
        </ul>
      </div>

      {/* Managing Cookies Section */}
      <div className="mt-8">
        <h3 className="text-2xl md:text-3xl font-semibold my-4">Managing Cookies:</h3>
        <p>
          You can manage or disable cookies through your browser settings. However, disabling certain cookies may affect the functionality of our website. For more information on managing cookies, visit your browser's help section.
        </p>
      </div>
    </div>
  </section>
  );
};

export default DynamicSection;
