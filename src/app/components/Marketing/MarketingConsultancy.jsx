import Image from 'next/image';
import Link from 'next/link';


const MarketingConsultancy = () => {
  return (
    <section className="relative bg-[url(/marketing/m-banner.webp)] bg-cover bg-center bg-no-repeat text-white py-16 lg:py-32 3xl:py-36">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12">
        {/* Left Section */}
        <div className="lg:w-2/3 w-full text-center lg:text-left pt-20">
          <h3 className="text-2xl md:text-[38px] xl:text-[40px] 3xl:text-6xl font-light leading-[55px]">
          <b className='font-bold'>Elevate </b>Your <br></br>
          Brokerage’s Brand with
          </h3>
          <h1 className="text-2xl md:text-[40px] xl:text-[40px] 3xl:text-6xl md:leading-[55px] pb-5 font-black text-secondary md:w-96">
            <span className="text-white">EXPERT </span> <br></br>
            MARKETING STRATEGIES 
          </h1>
          
          <div className="mt-8 inline-block bg-white hover:bg-secondary text-[#0a0747] font-semibold py-4 px-8 rounded-full text-lg hover:border-white hover:text-white transition w-56 text-center">
            <Link href="#" passHref>
                Talk to Us!
            </Link>
          </div>
        </div>

        {/* Right Section (Candlestick Chart) */}
        <div className="hidden lg:block lg:w-1/3">
          
        </div>
      </div>
    </section>
  );
};

export default MarketingConsultancy