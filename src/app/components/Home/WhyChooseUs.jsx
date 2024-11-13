import Image from 'next/image';

const services = [
  {
    title: 'Vision',
    description: 'To be a global leader in IT solutions, empowering businesses to thrive in a digital-first world through innovative technology and unparalleled support.',
    icon: '/H10.svg',
  },
  {
    title: 'Mission',
    description: 'We are committed to delivering transformative IT solutions that enhance productivity, security, and innovation for our clients, fostering their success and enabling them to achieve their strategic objectives.',
    icon: '/H11.svg',
  }
];

const WhyChooseUsSection = () => {
  return (
    <section className="bg-gradient-to-r from-[#080a62] via-[#2a125f] to-[#dc3d52] py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">Vision & Mission</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative p-6 rounded-2xl bg-gradient-to-b from-[#0f0936] via-[#0c0a4c] to-[#0a0c81] border-opacity-15 hover:bg-gradient-to-r hover:from-secondary hover:via-[#090a62] hover:to-primary bg-no-repeat transition-all duration-300 cursor-pointer group h-auto overflow-hidden border border-gray-50`}
            >
              {/* Icon and Title Container */}
              <div
                className="flex flex-col items-start justify-start h-auto mb-4"
              >
                <div className="w-24 h-24 mb-4">
                  <Image
                    src={service.icon}
                    width={100}
                    height={100}
                    alt={service.title}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-white sm:text-xl">{service.title}</h3>
              </div>

              {/* Description - Visible on hover, but no longer using translate */}
              <p
                className="text-sm text-gray-300 opacity-100 group-hover:opacity-100 transition-opacity duration-500 ease-in-out sm:text-lg"
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
