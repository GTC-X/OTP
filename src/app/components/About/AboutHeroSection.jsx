import Image from 'next/image';
import GradientButton from '../common/GradientButton'

const FintechSection = () => {
  return (
    <section className="bg-white pt-16 pb-10 px-4 mt-14 md:mt-16 3xl:mt-20">
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between">

        {/* Right Image Section (shows first on mobile) */}
        <div className="lg:w-1/2 hidden md:flex justify-center relative lg:order-2">
          <div className="relative w-full h-[300px] md:h-[500px]">
            <Image
              src="/about/banner.webp" // Replace with the actual image path
              alt="Phone mockups showcasing trading strategies"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Left Text Section (shows second on mobile) */}
        <div className="lg:w-1/2 text-center lg:text-left lg:order-1">
          <h1 className="text-2xl md:text-3xl xl:text-3xl font-bold c mb-10">Innovating the future of online trading through expert consultancy and unmatched fintech solutions.</h1>

          <GradientButton href="/contact" text="Get Started Today" />
        </div>

      </div>
      <div className='text-center max-w-5xl mx-auto'>
        <p className="text-xl font-semibold text-[#080a62] mb-4">
          Market Mavens was founded with a singular goal:
        </p>
        <p className="text-base md:text-lg  mb-6">
          To provide online trading brokers with the expertise and tools needed to thrive in an increasingly competitive market.
          Our team of seasoned professionals brings decades of combined experience in marketing, risk management, and technology consultancy, all aimed at driving measurable results and sustainable growth for our clients.
        </p>
      </div>
    </section>
  );
};

export default FintechSection;
