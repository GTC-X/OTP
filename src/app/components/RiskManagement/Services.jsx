const CardOne = ({ title, description }) => {
    return (
        <div className="gap-2 flex">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10 text-green-400">
                    <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                </svg>
            </div>
            <div>
                <h3 className="text-lg md:text-2xl font-bold mb-4">{title}</h3>
                <p className="text-white mb-6">{description}</p>
            </div>
        </div>
    )
}

const CardTwo = ({ deliverables }) => {
    return (
        <div className=" p-8 rounded-3xl border-2 h-fit border-[#dc3d52] shadow-inner 4 bg-gradient-to-r from-[#080a62] to-[#dc3d52]">
            <h4 className="font-semibold text-lg mb-2">Deliverables:</h4>
            <ul className="list-none space-y-2">
                {deliverables.map((deliverable, idx) => (
                    <li key={idx} className="text-white flex items-center">
                        <span className="mr-2">➔</span> {deliverable}
                    </li>
                ))}
            </ul>
        </div>
    )
}

const KeyServicesSection = () => {
    return (
        <section className="bg-gradient-to-r from-[#080a62]  to-[#dc3d52] text-white md:py-16 py-8 px-8">
            <div>
                <h2 className="text-3xl font-bold text-center mb-12">Key Services</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
                    <CardOne
                        title='Risk Assessment and Analysis'
                        description='We conduct thorough risk assessments that analyze both market and operational risks. By identifying and quantifying these risks, we craft strategies that mitigate them effectively, ensuring resilience against uncertainties.'
                    />
                    <CardTwo
                        deliverables={[
                            'Understanding specific risks',
                            'Market and operational risk analysis',
                            'Crafting risk mitigation strategies',
                        ]}
                    />
                    <CardTwo
                        deliverables={[
                            'Compliance audits',
                            'Regulatory updates',
                            'Compliance documentation',
                            'Compliance training for staff',
                        ]}
                    />
                    <CardOne
                        title='Regulatory Compliance and Reporting'
                        description='We help you navigate complex regulatory landscapes by ensuring your operations comply with laws. Our services include preparing compliance reports to keep you informed and prepared for audits.'
                    />
                    <CardOne
                        title='Strategic Risk Mitigation'
                        description='After identifying risks, we develop effective mitigation strategies to address the vulnerabilities of your brokerage using best practices and innovative solutions.'
                    />
                    <CardTwo
                        deliverables={[
                            'Risk mitigation strategies',
                            'Implementation of risk controls',
                            'Crisis management plans',
                        ]}
                    />
                    <CardTwo
                        deliverables={[
                            'Crisis response strategies',
                            'Business continuity planning',
                            'Recovery planning',
                        ]}
                    />
                    <CardOne
                        title='Crisis Management & Contingency Planning'
                        description='We develop contingency plans that prepare your brokerage to handle crises efficiently, minimizing disruption to your operations.'
                    />
                </div>
            </div>
        </section>
    );
};

export default KeyServicesSection;
