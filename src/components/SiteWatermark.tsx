import { useEffect, useState } from 'react';

const SiteWatermark = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <div 
          className="text-[#FF6B00] text-[8vw] font-bold whitespace-nowrap select-none"
          style={{ 
            opacity: 0.15,
            textShadow: '4px 4px 12px rgba(255, 107, 0, 0.3)',
            letterSpacing: '0.1em',
            transform: 'rotate(-15deg)'
          }}
        >
          САЙТ В РАЗРАБОТКЕ
        </div>
      </div>
    </div>
  );
};

export default SiteWatermark;
