"use client";

const SharingInformationSection = () => {
  return (
    <section className="bg-white py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#080a62] mb-6">Sharing Your Information</h2>
        <p className=" text-lg md:text-xl text-[#4A4A68] mb-12">
          We do not sell or rent your personal information to third parties. However, we may share your information with:
        </p>

        {/* Content Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Box 1 */}
          <div className="bg-white border rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-[#080a62] mb-2">Service Providers:</h3>
            <p className="text-[#4A4A68]">
              Trusted third-party vendors who help us with business operations (e.g., hosting services, marketing platforms).
            </p>
          </div>

          {/* Box 2 */}
          <div className="bg-white border rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-[#080a62] mb-2">Legal Compliance:</h3>
            <p className="text-[#4A4A68]">
              If required by law or to protect our legal rights, we may disclose personal information.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SharingInformationSection;
