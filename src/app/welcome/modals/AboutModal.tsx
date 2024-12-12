import React from 'react';

const AboutModal: React.FC = () => {
  return (
    <div 
      className="fixed inset-0 z-[9999] bg-black bg-opacity-50 flex justify-center items-center"
    >
      <div 
        className="bg-white rounded-lg p-6 w-[500px] max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold text-green-700 mb-4">About Sport Together</h2>
        <div className="text-gray-700 space-y-4">
          <p>
            Sport Together is an innovative platform designed to connect sports enthusiasts 
            and make sports booking easier than ever.
          </p>
          <h3 className="text-xl font-semibold text-green-600">Our Mission</h3>
          <p>
            We aim to:
            <ul className="list-disc pl-5">
              <li>Simplify sports court booking</li>
              <li>Connect players with similar interests</li>
              <li>Promote an active and healthy lifestyle</li>
            </ul>
          </p>
          <h3 className="text-xl font-semibold text-green-600">Key Features</h3>
          <p>
            <ul className="list-disc pl-5">
              <li>Easy court booking</li>
              <li>User-friendly interface</li>
              <li>Wide range of sports options</li>
              <li>Community connection</li>
            </ul>
          </p>
        </div>
        <button
          className="mt-6 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default AboutModal;