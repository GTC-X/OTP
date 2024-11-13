import Link from "next/link";
import Image from "next/image";

const HeroBanner = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#080a62] via-[#2a125f] to-[#dc3d52]  text-white py-16 lg:py-32 3xl:py-36">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12">
        {/* Left Section */}
        <div className=" w-full text-center max-w-2xl mx-auto  lg:text-center pt-20">
          <h3 className="text-2xl md:text-3xl xl:text-[40px] 3xl:text-6xl font-light leading-tight pb-2">
            One-Stop Turnkey
          </h3>
          <h1 className="text-2xl md:text-[35px] xl:text-[40px] 3xl:text-[65px]  font-light md:leading-[60px] pb-5">
            <span className="font-black">Empowering Businesses  </span>
            with Advanced IT Solutions
          </h1>

         

          <div className="mx-auto max-w-5xl">
            <h2 className="text-lg md:text-[20px] xl:text-[24x] 3xl:text-[30px] font-light leading-[30px] pb-5">
              <span className="font-normal">Innovative, Reliable, and Scalable Technology Services Designed to Accelerate Growth and Drive Success in a Digital World.</span>
            </h2>
          </div>
          <div className="mt-8 inline-block bg-white hover:bg-secondary text-[#0a0747] font-semibold py-4 px-8 rounded-full text-lg hover:border-white hover:text-white transition w-56 text-center">
            <Link href="/contact" passHref>
                Talk to Us!
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
