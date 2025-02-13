import * as React from 'react';

interface TeamModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: string;
  name: string;
  position: string;
  bio?: string;
}

const TeamModal: React.FC<TeamModalProps> = ({ isOpen, onClose, image, name, position, bio }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto relative">
      <button 
          onClick={onClose} 
          className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white w-8 h-8 flex items-center justify-center rounded transition-colors"
        >
          ×
        </button>
          <div className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3 flex-shrink-0">
                <img 
                  src={image} 
                  alt={name}
                  className="w-full h-[300px] object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
                  style={{ objectPosition: 'top' }}
                />
              </div>
              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold mb-2">{name}</h2>
                <h3 className="text-xl text-gray-600 mb-4">{position}</h3>
                <div className="prose max-w-none">
                  {bio?.split('\n').map((paragraph, index) => (
                    <p key={index} className="mb-4">{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default TeamModal; 