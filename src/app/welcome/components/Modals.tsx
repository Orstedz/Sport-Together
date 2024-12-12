import React from 'react';

// Define the prop interface
interface ModalProps {
  onClose: () => void;
}

const AboutModal: React.FC<ModalProps> = ({ onClose }) => {
  return (
    <div 
      className="fixed inset-0 z-[9999] bg-black bg-opacity-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg p-6 w-[500px] max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold text-green-700 mb-4">About Sport Together</h2>
        <div className="text-gray-700 space-y-4">
          <p>
            Sport Together is a revolutionary platform designed to connect sports enthusiasts 
            and make sports booking easier and more accessible.
          </p>
          
          <h3 className="text-xl font-semibold text-green-600">Our Mission</h3>
          <p>
            We aim to break down barriers in sports participation by providing a seamless 
            platform for finding and booking sports facilities, connecting with teammates, 
            and enjoying your favorite sports.
          </p>

          <h3 className="text-xl font-semibold text-green-600">Key Features</h3>
          <ul className="list-disc list-inside">
            <li>Easy sports facility booking</li>
            <li>Team formation and player matching</li>
            <li>Real-time availability updates</li>
            <li>User-friendly interface</li>
          </ul>
        </div>

        <button
          className="mt-6 w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

const ContactModal: React.FC<ModalProps> = ({ onClose }) => {
  return (
    <div 
      className="fixed inset-0 z-[9999] bg-black bg-opacity-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg p-6 w-[500px] max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold text-green-700 mb-4">Contact Us</h2>
        <div className="text-gray-700 space-y-4">
          <p>We'd love to hear from you!</p>
          
          <div>
            <h3 className="text-xl font-semibold text-green-600">Customer Support</h3>
            <p>Email: support@sporttogether.com</p>
            <p>Phone: +84 123 456 7890</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-green-600">Address</h3>
            <p>Sport Together Headquarters</p>
            <p>123 Sports Street</p>
            <p>City, Country</p>
          </div>
        </div>

        <button
          className="mt-6 w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export { AboutModal, ContactModal };