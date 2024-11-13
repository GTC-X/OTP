import Image from 'next/image';

const overviewItems = [
  {
    title: 'Mission',
    description:
      'To empower online trading brokers through expert-led strategies that deliver measurable results, scalable growth, and sustainable profitability.',
    bgColor: 'bg-white',
    headingColor: 'text-primary',
    textColor: 'text-[#080a62]',
    borderColor: 'border-primary',
  },
  {
    title: 'Vision',
    description:
      'To be the leading consultancy firm in the fintech sector, renowned for our ability to drive success and innovation in the online trading industry.',
    bgColor: 'bg-white',
    headingColor: 'text-primary',
    textColor: 'text-[#080a62]',
    borderColor: 'border-primary',
  },
  {
    title: 'Team',
    description:
      'Our team is composed of industry experts with deep experience in fintech, marketing, risk management, and technology.',
    bgColor: 'bg-white',
    headingColor: 'text-primary',
    textColor: 'text-[#080a62]',
    borderColor: 'border-primary',
  },
  {
    title: 'Approach',
    description:
      'We take the time to understand your challenges and goals, crafting customized solutions that deliver maximum ROI.',
    bgColor: 'bg-white',
    headingColor: 'text-primary',
    textColor: 'text-[#080a62]',
    borderColor: 'border-primary',
  },
];

const OverviewSection = () => {
  return (
    <section className="bg-white pb-16 px-4">
      <div className="max-w-6xl mx-auto bg-[url(/about/bg-1.webp)] bg-cover bg-center p-4 md:p-10 bg-opacity-40">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#080a62] pt-5">Overview</h2>
        </div>

        {/* Dynamic Overview Cards */}
        {overviewItems.map((item, index) => (
          <div
            key={index}
            className={`group relative mb-8 flex flex-col lg:flex-row cursor-pointer items-start md:items-center ${item.bgColor} rounded-3xl p-5 md:p-16 gap-4 md:gap-8 border-2 transition-all duration-300 hover:bg-gradient-to-l from-[#080a62] to-[#dc3d52] hover:border-transparent`}
          >
            <div className={`lg:w-3/12 md:border-r-2 ${item.borderColor} transition-all duration-300 group-hover:border-white`}>
              <h3
                className={`text-2xl md:text-3xl mb-0 font-bold w-48 ${item.headingColor} transition-all duration-300 group-hover:text-white group-hover:translate-y-0 translate-y-2`}
              >
                {item.title}
              </h3>
            </div>
            <div className="lg:w-9/12">
              <p
                className={`text-lg mb-4 text-primary transition-all duration-300 group-hover:text-white  group-hover:translate-y-0 translate-y-2`}
              >
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OverviewSection;
