import Link from 'next/link';

const FintechExpertiseSection = () => {
  return (
    <section className="relative pb-16 px-8 md:px-16">
      {/* Image as Overlay */}
      {/* <div className='absolute inset-0 bg-[url(/home/fin.webp)] bg-contain bg-center bg-no-repeat opacity-30 pointer-events-none' /> */}

      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row z-10">
        {/* Left Text Section */}
        <div className="md:w-[500px] w-full text-left">
          <h2 className="text-3xl md:text-[45px] xl:text-[55px] md:leading-[50px] xl:leading-[60px] font-bold text-[#080a62]">
            Exclusive <br></br><span className='text-secondary'>Fintech Expertise</span>
          </h2>
          <p className="text-lg mt-4 text-[#080a62]">
            Guiding online trading brokers with innovative and scalable strategies based on multi-years of experience for maximum growth and profitability.          </p>
          <Link href='/contact' className="inline-block mt-8 bg-gradient-to-r from-[#080a62] to-[#dc3d52] hover:bg-gradient-to-l text-white font-semibold py-3 px-8 rounded-full text-lg shadow-lg transition-all duration-300">
            Book Now
          </Link>
        </div>

        {/* Right Section for possible future content */}
        <div className="md:w-1/2 w-full"></div>
      </div>
    </section>
  );
};

export default FintechExpertiseSection;
