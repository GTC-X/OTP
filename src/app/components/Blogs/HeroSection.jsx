import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="bg-white py-10 md:py-0 mb-10  mt-14 md:mt-20 3xl:mt-24">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between border-b border-gray-200">
        {/* Content Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-[#080a62] mb-4">
            Market Updates
          </h1>
          <p className="text-md md:text-lg mb-6">
            Stay informed with our daily trading updates. Get the latest insights and trends to enhance your market strategies.
          </p>
          <Link href="#" className="inline-block bg-gradient-to-r from-[#080a62] to-[#dc3d52] text-white font-semibold py-3 px-8 rounded-full text-lg">
            View Now
          </Link>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 hidden md:flex justify-center">
          <div className="relative w-full h-64 md:h-[500px]">
            <Image
              src="/blogs/Blogs-02.webp" // Update with the actual image path
              alt="Market Updates Laptop"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection