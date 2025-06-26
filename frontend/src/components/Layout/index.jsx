import  { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const Layout = () => {
  const location = useLocation();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const sectionId = hash.replace('#', '');
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowScrollTop(scrollY > 300);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="pb-20 border-[#2B2B2B] border-b-[0.2px] border-t-0 border-l-0 border-r-0">
        <Navbar />
      </div>
      <div className="main-content">
        <Outlet />
      </div>
      <Footer />
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-12 h-12 rounded-full flex items-center justify-center transition-opacity duration-300 ${
          showScrollTop ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } hover:bg-[#F96141]/10 transition-colors duration-300`}
        aria-label="Scroll to top"
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="18"
            cy="18"
            r="16"
            stroke="#2B2B2B"
            strokeWidth="2"
            fill="none"
          />
          <circle
            cx="18"
            cy="18"
            r="16"
            stroke="#F96141"
            strokeWidth="2"
            fill="none"
            strokeDasharray="100"
            strokeDashoffset={100 - scrollProgress}
            transform="rotate(-90 18 18)"
          />
          <g transform="translate(14, 14) scale(0.5)">
            <path
              d="M6.99951 0.790283C7.08974 0.790283 7.17667 0.825415 7.24072 0.888916V0.889893L12.7153 6.36353L12.7231 6.37231L12.7319 6.38013C12.7655 6.41145 12.7923 6.44949 12.811 6.49146C12.8297 6.53337 12.8405 6.57839 12.8413 6.62427C12.8421 6.67009 12.833 6.71555 12.8159 6.75806C12.7987 6.80065 12.7732 6.83983 12.7407 6.87231C12.7083 6.90468 12.6699 6.93032 12.6274 6.94751C12.5848 6.96472 12.5386 6.97371 12.4927 6.9729C12.4468 6.97205 12.4017 6.96129 12.3599 6.94263C12.3179 6.92393 12.2799 6.89713 12.2485 6.86353L12.2407 6.85474L7.34229 1.9563V16.8684C7.34217 16.9589 7.30565 17.0456 7.2417 17.1096C7.17754 17.1738 7.09024 17.2102 6.99951 17.2102C6.90891 17.2101 6.8224 17.1737 6.7583 17.1096C6.69425 17.0456 6.65783 16.959 6.65771 16.8684V1.9563L5.48975 3.12427L1.76709 6.84595L1.75928 6.85474L1.75049 6.86353C1.7193 6.89698 1.68188 6.92395 1.64014 6.94263C1.59817 6.96133 1.55228 6.97209 1.50635 6.9729C1.46052 6.97369 1.41507 6.96465 1.37256 6.94751C1.32996 6.9303 1.29079 6.9048 1.2583 6.87231C1.22587 6.83985 1.20029 6.8006 1.18311 6.75806C1.16602 6.71559 1.15788 6.67004 1.15869 6.62427C1.15952 6.57845 1.16937 6.53332 1.18799 6.49146C1.20667 6.44952 1.23351 6.41143 1.26709 6.38013L1.27588 6.37231L6.7583 0.889893C6.82238 0.826006 6.90903 0.790339 6.99951 0.790283Z"
              fill="#6C2750"
              stroke="#F96141"
              strokeWidth="1.56842"
            />
          </g>
        </svg>
      </button>
    </>
  );
};

export default Layout;