import React, { useEffect, useState } from 'react';
import partner1 from '../images/mtl-logo.png';
import partner2 from '../images/videotron.png';
import partner3 from '../images/iga.png';
import partner4 from '../images/loblaws.png';
import partner5 from '../images/bell.png';
import partner6 from '../images/desjardins.png';

const PartnerCarousel = () => {
  const [position, setPosition] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true); // New state for controlling transition

  const partners = [
    { id: 1, name: 'Partner 1', logo: partner1 },
    { id: 2, name: 'Partner 2', logo: partner2 },
    { id: 3, name: 'Partner 3', logo: partner3 },
    { id: 4, name: 'Partner 4', logo: partner4 },
    { id: 5, name: 'Partner 5', logo: partner5 },
    { id: 6, name: 'Partner 6', logo: partner6 },
  ];

  const logoWidth = 140; // Width of each logo container
  const spacing = 48; // 3rem (mx-12) spacing between logos
  const totalWidth = partners.length * (logoWidth + spacing);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        const newPosition = prev - 1;

        if (Math.abs(newPosition) >= totalWidth) {
          // Disable transition before resetting position
          setIsTransitioning(false);
          return 0;
        }

        // Enable transition for normal scrolling
        setIsTransitioning(true);
        return newPosition;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [totalWidth]);

  return (
    <div className="w-full bg-white py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-6">Our Partners</h2>
        <div className="relative overflow-hidden">
          <div
            className={`flex items-center ${
              isTransitioning ? 'transition-transform duration-300' : ''
            }`}
            style={{ transform: `translateX(${position}px)` }}
          >
            {/* Double the partners array to create seamless loop */}
            {[...partners, ...partners].map((partner, index) => (
              <div key={`${partner.id}-${index}`} className="flex-shrink-0 mx-12">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-12 w-32 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerCarousel;
