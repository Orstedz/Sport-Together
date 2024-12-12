import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import { AboutModal, ContactModal } from "./components/Modals"; 

const WelcomePage: React.FC = () => {
  const navigate = useNavigate();
  
  // State for managing modal visibility
  const [showAboutModal, setShowAboutModal] = useState<boolean>(false);
  const [showContactModal, setShowContactModal] = useState<boolean>(false);

  // Navigation handlers
  const handleHomeClick = () => {
    // Navigate to login page
    navigate('/login');
  };

  const handleAboutClick = () => {
    // Open About modal
    setShowAboutModal(true);
    // Close Contact modal if open
    setShowContactModal(false);
  };

  const handleContactClick = () => {
    // Open Contact modal
    setShowContactModal(true);
    // Close About modal if open
    setShowAboutModal(false);
  };

  // Modal close handler
  const handleCloseModal = () => {
    setShowAboutModal(false);
    setShowContactModal(false);
  };

  // Explore button handler
  const handleExploreClick = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-[#00765a] text-white flex flex-col relative">
      {/* Header Component */}
      <Header 
        onHomeClick={handleHomeClick}
        onAboutClick={handleAboutClick}
        onContactClick={handleContactClick}
      />
      
      {/* Main Content - Only show when no modal is open */}
      {!(showAboutModal || showContactModal) && (
        <MainContent onExploreClick={handleExploreClick} />
      )}
      
      {/* Footer Component */}
      <Footer />

      {/* Modals - Conditionally Rendered */}
      {showAboutModal && (
        <AboutModal onClose={handleCloseModal} />
      )}
      
      {showContactModal && (
        <ContactModal onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default WelcomePage;