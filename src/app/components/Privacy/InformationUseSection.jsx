const usageInfo = [
    {
      title: 'Service Delivery',
      description:
        'To respond to inquiries, manage consultations, and provide services as requested.',
    },
    {
      title: 'Marketing',
      description:
        'To send you marketing communications, newsletters, or promotional materials, with your consent.',
    },
    {
      title: 'Website Improvement',
      description:
        'To monitor website performance, improve user experience, and track the effectiveness of our marketing campaigns.',
    },
    {
      title: 'Compliance',
      description:
        'To comply with legal obligations, protect our rights, and prevent fraudulent activities.',
    },
  ];
  
  const InformationUseSection = () => {
    return (
      <section className="bg-white py-16 px-6 flex justify-center">
        <div className="max-w-6xl w-full text-left">
          {/* Section Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#080a62] mb-6">
            How We Use Your Information?
          </h2>
          <p className="text-lg md:text-xl text-[#080a62] mb-10">
            We use the information we collect for the following purposes:
          </p>
  
          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {usageInfo.map((info, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-lg shadow-lg"
              >
                <h3 className="font-semibold text-xl text-[#080a62] mb-2">
                  {info.title}:
                </h3>
                <p className="text-base">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default InformationUseSection;
  