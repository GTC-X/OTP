import Image from 'next/image';
import { FaCheck } from "react-icons/fa";

const services = [
  {
    title: 'Data-Driven Forex Marketing Strategies',
    description: 'We use cutting-edge analytics to create marketing campaigns that deliver measurable results—ensuring you reach the right audience at the right time.',
    icon: '/H10.svg',  // Assuming you have an icon
  },
  {
    title: 'Custom Solutions for Global Growth',
    description: 'Our approach is focused on measurable outcomes. We craft customized strategies that deliver tangible results, enhancing profitability and scalability for your brokerage. Your success is our benchmark.',
    icon: '/H11.svg',
  },
  {
    title: 'Expertise in Emerging Markets',
    description: 'From marketing and risk management to technology consultancy, we provide a full suite of services tailored to the unique needs of online trading brokers. This integrated approach allows you to streamline operations and focus on growth.',
    icon: '/H12.svg',
  },
 
];

const GrowthOffer = () => {
  return (
    <section className="bg-gradient-to-r from-[#090b63] via-[#090b63] to-[#100934] py-16">
      <div className="max-w-6xl mx-auto bg-[url(/home/Homepage-08.webp)] bg-cover bg-center p-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">What We Offer:
        </h2>
        <div className="grid grid-cols-1 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative p-6 rounded-2xl bg-gradient-to-r from-[#0f0936] via-[#0c0a4c] to-[#090b65] border-opacity-15 hover:bg-gradient-to-r hover:from-secondary hover:via-[#090a62] hover:to-primary bg-no-repeat transition-all duration-300 cursor-pointer group h-64 overflow-hidden border border-gray-50`}
            >
              {/* Icon and Title Container */}
              <div
                className="flex flex-col items-start justify-end absolute bottom-0 left-0 right-0 p-6 transition-all duration-500 group-hover:translate-y-[-50%]"
              >
                <div className="w-20 h-20">
                  <Image
                    src={service.icon}
                    width={80}
                    height={80}
                    alt={service.title}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-white">{service.title}</h3>
              </div>

              {/* Description - Initially hidden and shown on hover */}
              <p
                className="absolute bottom-0 left-0 right-0 p-6 text-base text-gray-300 opacity-0 group-hover:opacity-100 group-hover:translate-y-[-20%] transition-all duration-500"
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-6xl mx-auto pt-16">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
          Partner with Market Mavens to:
        </h2>

        {/* Flex container for points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left text-white">
          {/* Left Column */}
          <div className="space-y-4">
            <p className="flex items-center">
              <FaCheck className="text-green-500 mr-2" />
              Accelerate your brand's global reach
            </p>
            <p className="flex items-center">
              <FaCheck className="text-green-500 mr-2" />
              Gain a competitive edge with expert guidance
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <p className="flex items-center">
              <FaCheck className="text-green-500 mr-2" />
              Generate more leads from high-value clients
            </p>
            <p className="flex items-center">
              <FaCheck className="text-green-500 mr-2" />
              Enter new markets confidently with proven strategies
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};


export default GrowthOffer