import { useState } from 'react';
import Icon from '../../Icons';
import Button from '../../Button';

const Footer = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <footer className="bg-[#0D000F] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="space-y-8 md:space-y-16 text-center md:text-left">
            <div>
              <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-3xl font-medium mb-2 secondary-font"><span className='block mb-2'>Book your</span><span>musician</span></h2>
            </div>
            <div className="space-y-4 text-xs text-textGray">
              <p>ALL RIGHTS RESERVED</p>
              <p>TERMS AND CONDITIONS</p>
            </div>
            <div className="text-xs text-textGray">
              <p className='mb-2'>
                Designed by <a href="https://www.marketbytes.in" target="_blank" rel="noopener noreferrer" className="text-textGray hover:text-textPurple duration-300 transition-colors">MarketBytes</a>
              </p>
              <svg className='hidden md:flex' width="150" height="1" viewBox="0 0 250 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="0.5" x2="250" y2="0.5" stroke="url(#paint0_linear_1_28446)" />
                <defs>
                  <linearGradient id="paint0_linear_1_28446" x1="0" y1="1.5" x2="250" y2="1.5" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#4D147E" />
                    <stop offset="0.5" stop-color="#F96141" />
                    <stop offset="1" stop-color="#662451" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          <div className="space-y-6 text-center md:text-left">
            <h6 className="text-md font-normal text-textGray mb-3">
              Get in Touch
            </h6>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 bg-transparent border border-textGray rounded-lg focus:border-textPurple focus:outline-none transition-colors duration-200 placeholder-gray-400 text-xs"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 bg-transparent border border-textGray rounded-lg focus:border-textPurple focus:outline-none transition-colors duration-200 placeholder-gray-400 text-xs"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 bg-transparent border border-textGray rounded-lg focus:border-textPurple focus:outline-none transition-colors duration-200 placeholder-gray-400 text-xs"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 bg-transparent border border-textGray rounded-lg focus:border-textPurple focus:outline-none transition-colors duration-200 placeholder-gray-400 text-xs"
                />
              </div>
              <textarea
                name="message"
                placeholder="Message"
                rows="3"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 bg-transparent border border-textGray rounded-lg focus:border-textPurple focus:outline-none transition-colors duration-200 placeholder-gray-400 text-xs resize-none"
              />
              <Button
                name="Submit"
                className="text-textGray text-sm font-normal bg-black px-6 py-2 transition-colors duration-300 rounded-lg"
                onClick={() => alert("Book Now clicked!")}
                dotColor="bg-textOrange"
                gradient="bg-gradient-to-b from-[#F96141] via-[#662451] to-[#4D147E]"
                aria-label="Book a musician now"
                width="full"
              />
            </form>
          </div>
          <div className="grid items-center justify-center md:justify-end text-center md:text-left">
            <h6 className="text-md font-normal text-textGray">
              Contact
            </h6>
            <div className="space-y-4">
              <div className="flex items-center space-x-0 md:space-x-3">
                <a href="mailto:hello@bookyourmusician.com" className="text-xs text-textGray hover:text-textPurple duration-300 transition-colors">hello@bookyourmusician.com</a>
              </div>
              <div className="flex justify-center md:justify-start items-start space-x-0 md:space-x-3">
                <a
                  href="https://www.google.com/maps/place/Valrathia+Towers,+Kakkanad,+Kochi,+Kerala+682037,+India/@10.017653,76.341678,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-textGray hover:text-textPurple duration-300 transition-colors"
                >
                  <p>Book Your Musician Private</p>
                  <p>Limited No. 4/46), 2nd Floor,</p>
                  <p>Suite No 1579 Valrathia</p>
                  <p>Towers, Janagam Naku,</p>
                  <p>Kakkanad, Kochi-682037</p>
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-0 md:space-x-3">
                <a href="tel:+919744899001" target="_blank" rel="noopener noreferrer" className="text-xs text-textGray hover:text-textPurple duration-300 transition-colors">Tel: +91 9744899001</a>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-4 pt-4">
              <a
                href="#"
                className="w-10 h-10 bg-[#6E2271] rounded-full flex items-center justify-center hover:bg-[#5B1C5E] transition-all duration-200 transform hover:scale-110"
                aria-label="Facebook"
              >
                <Icon name="Facebook" width={24} height={24} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#6E2271] hover:bg-[#5B1C5E] rounded-full flex items-center justify-center hover:from-purple-700 transition-all duration-200 transform hover:scale-110"
                aria-label="Instagram"
              >
                <Icon name="Instagram" width={24} height={24} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#6E2271] rounded-full flex items-center justify-center hover:bg-[#5B1C5E] transition-all duration-200 transform hover:scale-110"
                aria-label="Twitter"
              >
                <Icon name="Twitter" width={24} height={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;