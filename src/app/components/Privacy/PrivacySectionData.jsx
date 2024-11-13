import React from 'react'

const PrivacySectionData = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 mt-[-120px]">
    <div className="max-w-6xl mx-auto pt-20">
      
      {/* Data Security Section */}
      <div className="mb-10">
        <h2 className="text-2xl md:text-4xl font-bold text-[#080a62]">Data Security</h2>
        <p className="text-lg text-[#4A4A68] mt-4">
          We take appropriate security measures to protect your personal information from unauthorized access, disclosure, or alteration. However, no method of transmission over the Internet or electronic storage is completely secure, and we cannot guarantee absolute security.
        </p>
      </div>
      
      {/* Your Data Rights Section */}
      <div className="mb-10">
        <h2 className="text-2xl md:text-4xl font-bold text-[#080a62]">Your Data Rights</h2>
        <p className="text-lg text-[#4A4A68] mt-4">You have the right to:</p>
        <ul className="mt-4 space-y-3 text-lg text-[#4A4A68]">
          <li className="flex items-start">
            <span className="text-green-600 mr-2">✔</span>
            <strong>Access:</strong> Request a copy of the personal data we hold about you.
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">✔</span>
            <strong>Correction:</strong> Request corrections to inaccurate or incomplete data.
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">✔</span>
            <strong>Deletion:</strong> Request deletion of your data when it is no longer needed for the purposes it was collected.
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">✔</span>
            <strong>Objection:</strong> Object to certain types of processing, such as direct marketing.
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">✔</span>
            <strong>Restriction:</strong> Request that we restrict how we use your data.
          </li>
        </ul>
        <p className="mt-4 text-lg text-[#4A4A68]">
          To exercise any of these rights, please contact us at [your email address].
        </p>
      </div>
      
      {/* Third-Party Links Section */}
      <div className="mb-10">
        <h2 className="text-2xl md:text-4xl font-bold text-[#080a62]">Third-Party Links</h2>
        <p className="text-lg text-[#4A4A68] mt-4">
          Our website may contain links to external sites that are not operated by Market Mavens. We are not responsible for the content or privacy practices of these third-party sites. We encourage you to review their privacy policies when visiting external websites.
        </p>
      </div>
      
      {/* Changes to Privacy & Cookie Policy Section */}
      <div>
        <h2 className="text-2xl md:text-4xl font-bold text-[#080a62]">Changes to This Privacy & Cookie Policy</h2>
        <p className="text-lg text-[#4A4A68] mt-4">
          We may update this Privacy & Cookie Policy from time to time to reflect changes in our practices or legal obligations. Any changes will be posted on this page, and we encourage you to review it regularly.
        </p>
      </div>
    </div>
  </section>
  )
}

export default PrivacySectionData