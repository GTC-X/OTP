import Image from "next/image";

const PrivacyPolicySection = () => {
  return (
    <section className="relative px-6 bg-gradient-to-r from-[#0a0747] via-[#0c0d4c] to-[#340e38] py-12 lg:py-16 2xl:py-28">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center pt-16">
        
        {/* Text Content */}
        <div className="md:w-1/2  mb-20">
          <h1 className="text-white text-2xl md:text-4xl xl:text-5xl font-bold my-10">
            Privacy & <br /> Cookie Policy
          </h1>
          <p className="text-gray-300 text-base md:text-lg mb-6">
            At Market Mavens, we are committed to safeguarding your privacy.
            This Privacy & Cookie Policy explains how we collect, use, and protect your personal
            information, as well as how we use cookies and similar technologies on our website.
          </p>
          <p className="text-white text-base md:text-xl">
            By using our website, you agree to the terms of this{" "}
            <span className="text-secondary font-bold">Privacy & Cookie Policy</span>.
          </p>
        </div>

        {/* Image */}
        <div className="relative w-full md:w-1/2 h-72 md:h-96 mt-10 md:mt-0">
         
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicySection;
