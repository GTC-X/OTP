const services = [
    {
      title: 'Brand Positioning and Strategy',
      description:
        'In a crowded marketplace, your brand is your most valuable asset. We work closely with you to develop a strong brand identity that resonates with your target audience. Our team conducts in-depth market research to identify key differentiators and craft a compelling brand narrative. Whether you’re entering a new market or looking to refresh your brand, we ensure that your positioning is sharp, relevant, and impactful.',
      deliverables: [
        'Market Research & Analysis',
        'Brand Identity Development',
        'Positioning Statements & Taglines',
        'Competitive Analysis',
      ],
    },
    {
      title: 'Digital Marketing & Social Media Campaigns',
      description:
        'Digital presence is non-negotiable in the fintech space. We design and execute comprehensive digital marketing strategies that drive traffic, generate leads, and convert prospects into loyal clients. From paid search and display advertising to social media campaigns, our strategies are designed to maximize ROI and reach the right audience at the right time.',
      deliverables: [
        'Search Engine Marketing (SEM)',
        'Social Media Advertising',
        'Content Marketing & SEO',
        'Email Marketing Campaigns',
      ],
    },
    {
      title: 'Client Acquisition & Retention Strategies',
      description:
        'Acquiring new clients is only half the battle; retaining them is where true growth lies. We help you build and implement strategies that not only attract high-value clients but also keep them engaged and satisfied. Our retention strategies are tailored to meet the specific needs of online trading brokers, ensuring long-term client relationships and sustained growth.',
      deliverables: [
        'Lead Generation Campaigns',
        'Onboarding Process Optimization',
        'Client Loyalty Programs',
        'Customer Relationship Management (CRM) Integration',
      ],
    },
    {
      title: 'Data-Driven Marketing Insights',
      description:
        'In the fintech industry, data is king. We leverage advanced analytics to track the performance of your marketing campaigns and provide actionable insights that drive continuous improvement. By understanding what works and what doesn’t, we help you allocate resources more effectively and achieve better results with every campaign.',
      deliverables: [
        'Campaign Performance Tracking & Reporting',
        'Customer Segmentation & Analysis',
        'Predictive Analytics for Client Behavior',
        'ROI Optimization Techniques',
      ],
    },
  ];
  
  const KeyServices = () => {
    return (
      <section className="bg-white py-10 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-[#080a62]">Key Services</h2>
          </div>
  
          {/* Services List */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <div key={index} className="p-8 bg-gray-50 shadow-md rounded-lg">
                <h3 className="text-lg md:text-xl font-bold text-[#080a62] mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 md:min-h-[190px] text-base">{service.description}</p>
                <div className="bg-white p-4 rounded-lg shadow-inner bg-[url(/marketing/bg-4.webp)] bg-cover bg-center">
                  <h4 className="font-semibold text-lg text-[#080a62] mb-2">Deliverables:</h4>
                  <ul className="list-none space-y-2">
                    {service.deliverables.map((deliverable, idx) => (
                      <li key={idx} className="text-gray-700 flex items-center">
                        <span className="mr-2">➔</span> {deliverable}
                      </li>
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
  