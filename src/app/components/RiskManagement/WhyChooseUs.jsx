import Image from 'next/image';

const RiskWhyChooseUsSection = () => {
    return (
        <section >
            <div className="max-w-6xl mx-auto md:py-16 py-8 px-8 flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2">
                    <h2 className="text-4xl font-bold mb-6">Why Choose Market Mavens <span className='text-[#dc3d52]'>Risk Management?</span></h2>
                    <p className="text-lg mb-4">
                        Market Mavens stands out for its strategic focus on comprehensive risk management tailored specifically for online trading brokers. Our team’s deep understanding of the fintech sector ensures your brokerage can navigate risks effectively.
                    </p>
                    <p className="text-lg mb-4">
                        Partnering with us means investing in the security and longevity of your business.
                    </p>
                </div>
                <div className="relative lg:w-1/2 w-full h-[300px]">
                    <Image
                        src="/images/risk-management/laptop.webp" // Replace with the actual image path
                        alt="Market Mavens Risk Management"
                        layout="fill"
                        className="object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default RiskWhyChooseUsSection;
