import React from 'react';

interface HeaderProps {
  onHomeClick: () => void;
  onAboutClick: () => void;
  onContactClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onHomeClick, onAboutClick, onContactClick }) => {
  const [showAboutModal, setShowAboutModal] = React.useState(false);
  const [showContactModal, setShowContactModal] = React.useState(false);

  const handleAboutClick = () => {
    setShowAboutModal(true);
  };

  const handleContactClick = () => {
    setShowContactModal(true);
  };

  const handleCloseModal = () => {
    setShowAboutModal(false);
    setShowContactModal(false);
  };

  return (
    <header className="bg-[#00765a] text-white py-4 px-6 flex justify-end">
      <div className="nav-container">
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" onClick={onHomeClick} className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" onClick={handleAboutClick} className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" onClick={handleContactClick} className="hover:underline font-bold">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Modal - positioned with high z-index to be on top of all components */}
      {(showAboutModal || showContactModal) && (
        <div 
          className="fixed inset-0 z-[9999] bg-black bg-opacity-50 flex justify-center items-center"
          onClick={handleCloseModal}
        >
          <div 
            className="bg-white rounded-lg p-6 w-[500px] max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside
          >
            {showAboutModal && (
              <>
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
              </>
            )}

            {showContactModal && (
              <>
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
                      <a href="#" className="text-green-600 hover:text-green-800">Facebook</a>
                      <a href="#" className="text-green-600 hover:text-green-800">Instagram</a>
                      <a href="#" className="text-green-600 hover:text-green-800">Twitter</a>
                    </div>
                  </div>
                </div>
              </>
            )}

            <button
              className="mt-6 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;