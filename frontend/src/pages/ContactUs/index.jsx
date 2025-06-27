import { useState } from "react";
import StarTitle from "../../components/StarTitle";
import Button from "../../components/Button";

const ContactUs = () => {
  const [isHovered, setIsHovered] = useState(false);
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
    alert("Form submitted successfully!");
  };

  return (
    <div className="bg-[#0D000F] min-h-screen text-white">
      <header
        className="flex items-center justify-center pt-8 sm:pt-8 md:pt-16"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <StarTitle
          title="Contact Us"
          className="text-lg xs:text-lg sm:text-xl md:text-xl lg:text-xl"
          isParentHovered={isHovered}
        />
      </header>

      <div className="max-w-3xl mx-auto py-16 px-6">
        <div className="grid gap-12">
          <div className="space-y-6 text-center md:text-left">
            <h6 className="text-md font-normal text-textGray mb-3">
              Please use the form below to get in touch
            </h6>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 bg-transparent border border-textGray rounded-lg focus:border-textPurple focus:outline-none transition-colors duration-200 placeholder-gray-400 text-xs text-white"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 bg-transparent border border-textGray rounded-lg focus:border-textPurple focus:outline-none transition-colors duration-200 placeholder-gray-400 text-xs text-white"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 bg-transparent border border-textGray rounded-lg focus:border-textPurple focus:outline-none transition-colors duration-200 placeholder-gray-400 text-xs text-white"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 bg-transparent border border-textGray rounded-lg focus:border-textPurple focus:outline-none transition-colors duration-200 placeholder-gray-400 text-xs text-white"
                />
              </div>
              <textarea
                name="message"
                placeholder="Message"
                rows="3"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 bg-transparent border border-textGray rounded-lg focus:border-textPurple focus:outline-none transition-colors duration-200 placeholderಮplace-gray-400 text-xs text-white resize-none"
              />
              <Button
                name="Submit"
                className="text-textGray text-sm font-normal bg-black px-6 py-2 transition-colors duration-300 rounded-lg"
                onClick={handleSubmit}
                dotColor="bg-textOrange"
                gradient="bg-gradient-to-b from-[#F96141] via-[#662451] to-[#4D147E]"
                aria-label="Submit contact form"
                width="full"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;