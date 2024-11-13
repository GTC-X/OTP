'use client';
import { FaArrowRight } from "react-icons/fa";
import Image from 'next/image';
import Link from "next/link";

const services = [
  {
    title: 'Software Development',
    description: 'Our software development team specializes in crafting custom applications tailored to your business objectives. From web and mobile apps to complex enterprise solutions, we focus on creating efficient, user-friendly, and scalable software that enhances productivity and meets your specific needs.',
    icon: '/consltant/icon2.svg',
    gradientClass: 'bg-gradient-to-r from-[#080a62] to-[#dc3d52]', // Gradient color
    learnMore: "marketing-consultancy"
  },
  {
    title: 'Cloud Solutions',
    description: 'Unlock the full potential of the cloud with our scalable and flexible cloud solutions. We help you transition to cloud-based platforms, optimize existing infrastructures, and enable seamless collaboration and remote access, all while reducing costs and improving efficiency.',
    icon: '/consltant/icon9.svg',
    gradientClass: 'bg-gradient-to-r from-[#080a62] to-[#dc3d52]', // Gradient color
    learnMore: "risk-management"
  },
  {
    title: 'Managed IT Services',
    description: 'Let us manage your IT infrastructure so you can focus on growing your business. Our managed IT services provide 24/7 monitoring, regular maintenance, and on-demand support to ensure your systems remain reliable, secure, and up-to-date, minimizing downtime and enhancing productivity.',
    icon: '/consltant/icon7.svg',
    gradientClass: 'bg-gradient-to-r from-[#080a62] to-[#dc3d52]', // Gradient color
    learnMore: "technology-consultancy"
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-white py-16 px-4 bg-[url(/home/bg-4.webp)] bg-cover bg-right bg-no-repeat">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-[#080a62]">Our Services</h2>
          <p className="text-lg mt-4 text-gray-600">
          Let us manage your IT infrastructure so you can focus on growing your business. Our managed IT services provide 24/7 monitoring, regular maintenance, and on-demand support to ensure your systems remain reliable, secure, and up-to-date, minimizing downtime and enhancing productivity.
          </p>
        </div>

        {/* Service Cards */}
        <div className="space-y-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative flex flex-col md:flex-row items-center rounded-2xl shadow-lg bg-white  border-2 border-primary"
            >
              <div className={`md:w-1/5 w-full flex items-center justify-center rounded-t-xl md:rounded-tr-none md:rounded-l-xl ${service.gradientClass}`}>
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={112}
                  height={112}
                  className="w-16 h-16 md:w-40 md:h-40"
                />
              </div>
              <div className="md:w-4/5  px-6 rounded-r-2xl pb-8 md:pb-0 pt-4 md:pt-0">
                <h3 className="text-lg font-bold text-[#080a62]">{service.title}</h3>
                <p className="text-gray-600 mt-2">{service.description}</p>
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
