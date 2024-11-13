import Image from 'next/image';
import GradientButton from '../common/GradientButton'

const RiskHeroSection = () => {
    return (
        <section className=" text-white md:pt-14 md:pb-10 py-8 px-4  mt-14 md:mt-20 3xl:mt-24">
            <div className="max-w-6xl flex flex-col-reverse md:flex-row mx-auto gap-2 items-center">
                <div className='md:w-3/5 w-full text-[#080a62]'>
                    <h1 className="text-3xl md:text-4xl xl:text-5xl  font-bold mb-8">
                        Safeguard Your Brokerage with Comprehensive Risk Management Solutions
                    </h1>
                   
                    <GradientButton href="/contact" text="Get Started Today" />
                </div>
                <div className="lg:w-2/5 flex justify-center relative w-full order-1 lg:order-2">
                    <div className="relative w-full h-80 sm:h-96 md:h-[430px]">
                        <Image
                            src="/images/risk-management/banner.webp" // Replace with the actual image path
                            alt="Phone mockups showcasing trading strategies"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
                
            </div>
            <p className="text-sm md:text-lg my-8 max-w-4xl mx-auto text-primary text-center">
                        Navigating the complex world of online trading requires a robust risk management strategy to protect your assets and ensure compliance with ever-changing regulations. Market Mavens provides comprehensive risk management solutions tailored to the unique needs of online trading brokers.
                    </p>
        </section>
    );
};

export default RiskHeroSection;
