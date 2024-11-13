'use client'
import { useState } from 'react';
import Image from 'next/image';

const keyServices = [
  {
    title: 'Platform Optimization & Performance Enhancement',
    description: 'Your trading platform is the core of your brokerage\'s operations. We focus on optimizing its performance to ensure fast, reliable, and efficient service delivery. Our experts analyze your current platform setup and implement enhancements that reduce latency, increase speed, and ensure stability, even during high market volatility.',
    deliverables: [
      'System Performance Audits',
      'Latency Reduction Solutions',
      'Real-time Performance Monitoring',
      'Scalability Improvements',
    ],
    icon: '/consltant/icon6.svg',
    hoverIcon: '/consltant/icon2.svg',
  },
  {
    title: 'Customizable & Branded CRM Solutions',
    description: 'Market Mavens offers a customizable and branded CRM solution designed specifically for online trading brokers, allowing for customizations that fit your specific operational requirements.',
    deliverables: [
      'Multi-Layer IB Program',
      'Wallet System',
      'Data Filtration',
      'Easy Integration with Third-Party Platforms',
    ],
    icon: '/consltant/icon4.svg',
    hoverIcon: '/consltant/icon8.svg',
  },
  {
    title: 'Cybersecurity & Data Protection',
    description: 'In an industry where security breaches can devastate a company\'s reputation and finances, ensuring robust cybersecurity is critical. We provide comprehensive security assessments and implement advanced security measures to protect your data and systems from cyber threats.',
    deliverables: [
      'Security Vulnerability Assessments',
      'Implementation of Encryption and Firewalls',
      'Regular Security Updates and Patches',
      'Training and Awareness Programs for Staff',
    ],
    icon: '/consltant/icon5.svg',
    hoverIcon: '/consltant/icon9.svg',
  },
  {
    title: 'Technology Integration & Innovation',
    description: 'We help you integrate the latest technological advancements into your platform, from artificial intelligence and machine learning to blockchain. These integrations can streamline operations and enhance analytical capabilities.',
    deliverables: [
      'AI-driven Trading Algorithms',
      'Blockchain for Secure Transactions',
      'API Integrations',
      'Custom Software Solutions',
    ],
    icon: '/consltant/icon3.svg',
    hoverIcon: '/consltant/icon7.svg',
  },
  {
    title: 'User Experience (UX) Design & Improvement',
    description: 'A seamless user experience can significantly enhance client satisfaction and retention. We design and refine user interfaces that are visually appealing, intuitive, and easy to navigate.',
    deliverables: [
      'UX/UI Design',
      'Usability Testing',
      'Interface Streamlining',
      'Feedback Implementation',
    ],
    icon: '/consltant/icon.svg',
    hoverIcon: '/consltant/icon0.svg',
  },
];

const KeyServices = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <section className="bg-[url(/home/Homepage-08.webp)] bg-cover bg-center py-16 px-8 mt-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">Key Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {keyServices.map((service, index) => (
            <div
              key={index}
              className={`relative px-6 rounded-2xl bg-gradient-to-r from-[#0f0936] via-[#0c0a4c] to-[#090b65] border-opacity-15 hover:bg-gradient-to-r hover:from-secondary hover:via-[#090a62] hover:to-primary bg-no-repeat transition-all duration-300 cursor-pointer group overflow-hidden border border-gray-50 h-80`}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              {/* Icon and Title Section */}
              <div className="flex flex-col items-start justify-end absolute bottom-0 left-0 right-0 p-6 transition-all duration-500 group-hover:translate-y-[-163%]">
                <div className="w-12 h-12">
                  <Image
                    src={hoverIndex === index ? service.hoverIcon : service.hoverIcon}
                    width={50}
                    height={50}
                    alt={service.title}
                    className="object-contain"
                  />
                </div>
                <h3 className={`text-lg font-semibold ${hoverIndex === index ? 'text-white' : 'text-white'}`}>
                  {service.title}
                </h3>
              </div>

              {/* Description - Hidden until hover */}
              <div className="absolute bottom-0 left-0 right-0 px-6  text-sm text-gray-300 opacity-0 group-hover:opacity-100 group-hover:translate-y-[-15%] transition-all duration-500">
                <p>{service.description}</p>
                <ul className="list-disc list-inside mt-4 text-white">
                  {service.deliverables.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyServices;
