import React from 'react';

interface ContactModalProps {
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ onClose }) => {
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

          <div>
            <h3 className="text-xl font-semibold text-green-600">Social Media</h3>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-green-600 hover:text-green-800"
              >
                Facebook
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-green-600 hover:text-green-800"
              >
                Instagram
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-green-600 hover:text-green-800"
              >
                Twitter
              </a>
            </div>
          </div>

          {/* Optional: Contact Form */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-green-600 mb-4">Send us a message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition duration-300"
              >
                Send Message
              </button>
            </form>
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

export default ContactModal;