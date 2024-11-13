import { FaCheckCircle } from "react-icons/fa";

const InformationCollect = () => {
  return (
    <section className="ng-white py-16 px-6 flex justify-center">
      <div className="max-w-4xl w-full bg-gradient-to-r from-[#aa165e] to-[#080a62] text-white p-12 rounded-2xl shadow-lg mt-[-200px] z-40">
        <h2 className="text-center text-2xl md:text-4xl font-bold mb-6">
          Information We Collect
        </h2>
        <p className="text-center text-base mb-8">
          We collect the following types of personal information when you
          interact with our website or use our services:
        </p>

        <div className="space-y-4">
          {/* Personal Information */}
          <div className="flex items-start">
            <FaCheckCircle className="text-green-400 mr-3" size={36} />
            <p>
              <strong>Personal Information:</strong> Name, email address, phone
              number, and company details when you fill out forms (such as
              contact forms or consultation requests).
            </p>
          </div>

          {/* Technical Information */}
          <div className="flex items-start">
            <FaCheckCircle className="text-green-400  mr-3" size={36} />
            <p>
              <strong>Technical Information:</strong> IP address, browser type,
              device information, time zone settings, and operating system data
              automatically collected through cookies and other tracking
              technologies.
            </p>
          </div>

          {/* Usage Information */}
          <div className="flex items-start">
            <FaCheckCircle className="text-green-400 mr-3" size={36} />
            <p>
              <strong>Usage Information:</strong> Information about how you
              interact with our website, such as pages viewed, links clicked,
              and navigation paths.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InformationCollect;
