import React from 'react';

interface MainContentProps {
  onExploreClick: () => void;
}

const MainContent: React.FC<MainContentProps> = ({ onExploreClick }) => {
  return (
    <div className="flex-1 flex justify-center items-center">
      <div className="container mx-auto p-4 flex justify-center items-center">
        <div className="flex justify-center items-center gap-10">
          <div className="relative w-96 h-96">
            <img
              src="https://i.etsystatic.com/isla/c99b5d/60995380/isla_500x500.60995380_7htk44zi.jpg?version=0"
              alt="Sport Event"
              className="rounded-full w-full h-full object-cover border-8 border-white"
            />
            <div className="absolute bottom-0 left-0 bg-white rounded-full w-24 h-24 flex justify-center items-center text-5xl text-green-600">
              🌐
            </div>
          </div>
          <div className="text-left">
            <h1 className="text-6xl font-bold mb-4">
              <span className="bg-white p-0 rounded-md text-green-600 relative top-[-20px]">
                Welcome To
              </span>
              <br />
              Sport Booking Service
            </h1>
            <p className="text-2xl text-gray-200 mb-8">
              Book a sports court, connect players, and more.
            </p>
            <button
              className="bg-green-600 text-white py-3 px-6 rounded-md hover:bg-green-700 transition-colors"
              onClick={onExploreClick}
            >
              Explore now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;