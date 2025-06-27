import { useState, useEffect } from 'react';
import Icon from '../../Icons';
import Button from '../../Button';
import apiClient from '../../../api';

const Footer = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    submittedUrl: '',
    referralUrl: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      submittedUrl: window.location.href,
      referralUrl: document.referrer || '',
    }));

    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${import.meta.env.VITE_RECAPTCHA_SITE_KEY}`;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First Name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    if (formData.submittedUrl && !formData.submittedUrl.match(/^https?:\/\/.+/)) {
      newErrors.submittedUrl = 'Invalid URL format';
    }
    if (formData.referralUrl && !formData.referralUrl.match(/^https?:\/\/.+/)) {
      newErrors.referralUrl = 'Invalid URL format';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({ ...prev, [name]: null }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSuccess(null);

    window.grecaptcha.ready(async () => {
      try {
        const token = await window.grecaptcha.execute(import.meta.env.VITE_RECAPTCHA_SITE_KEY, { action: 'submit' });

        await apiClient.post('/api/contact/contacts/create/', {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          submitted_url: formData.submittedUrl,
          referral_url: formData.referralUrl,
          recaptcha_token: token,
        });

        setSuccess('Form submitted successfully! Check your email for confirmation.');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: '',
          submittedUrl: window.location.href,
          referralUrl: document.referrer || '',
        });
        setErrors({});
      } catch (err) {
        setErrors({ form: err.response?.data?.error || 'Something went wrong. Please try again.' });
      } finally {
        setIsSubmitting(false);
      }
    });
  };

  return (
    <footer className="bg-[#0D000F] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="space-y-8 md:space-y-16 text-center md:text-left">
            <div>
              <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-3xl font-medium mb-2 secondary-font">
                <span className="block mb-2">Book your</span>
                <span>musician</span>
              </h2>
            </div>
            <div className="space-y-4 text-xs text-textGray">
              <p>ALL RIGHTS RESERVED</p>
              <p>TERMS AND CONDITIONS</p>
            </div>
            <div className="text-xs text-textGray">
              <p className="mb-2">
                Designed by{' '}
                <a
                  href="https://www.marketbytes.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-textGray hover:text-textPurple duration-300 transition-colors"
                >
                  MarketBytes
                </a>
              </p>
              <svg
                className="hidden md:flex"
                width="150"
                height="1"
                viewBox="0 0 250 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line y1="0.5" x2="250" y2="0.5" stroke="url(#paint0_linear_1_28446)" />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_28446"
                    x1="0"
                    y1="1.5"
                    x2="250"
                    y2="1.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#4D147E" />
                    <stop offset="0.5" stopColor="#F96141" />
                    <stop offset="1" stopColor="#662451" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          <div className="space-y-6 text-center md:text-left">
            <h6 className="text-md font-normal text-textGray mb-3">Get in Touch</h6>
            {errors.form && <p className="text-red-500 text-xs">{errors.form}</p>}
            {success && <p className="text-green-500 text-xs">{success}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2.5 bg-transparent border rounded-lg focus:border-textPurple focus:outline-none transition-colors duration-200 placeholder-gray-400 text-xs text-white ${
                      errors.firstName ? 'border-red-500' : 'border-textGray'
                    }`}
                  />
                  {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2.5 bg-transparent border rounded-lg focus:border-textPurple focus:outline-none transition-colors duration-200 placeholder-gray-400 text-xs text-white ${
                      errors.lastName ? 'border-red-500' : 'border-textGray'
                    }`}
                  />
                  {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2.5 bg-transparent border rounded-lg focus:border-textPurple focus:outline-none transition-colors duration-200 placeholder-gray-400 text-xs text-white ${
                      errors.email ? 'border-red-500' : 'border-textGray'
                    }`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <input
                    type="number"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2.5 bg-transparent border rounded-lg focus:border-textPurple focus:outline-none transition-colors duration-200 placeholder-gray-400 text-xs text-white ${
                      errors.phone ? 'border-red-500' : 'border-textGray'
                    }`}
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="3"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2.5 bg-transparent border rounded-lg focus:border-textPurple focus:outline-none transition-colors duration-200 placeholder-gray-400 text-xs text-white resize-none ${
                    errors.message ? 'border-red-500' : 'border-textGray'
                  }`}
                />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>
              <Button
                name={isSubmitting ? 'Submitting...' : 'Submit'}
                className="text-textGray text-sm font-normal bg-black px-6 py-2 transition-colors duration-300 rounded-lg"
                type="submit"
                dotColor="bg-textOrange"
                gradient="bg-gradient-to-b from-[#F96141] via-[#662451] to-[#4D147E]"
                aria-label="Submit contact form"
                width="full"
                disabled={isSubmitting}
              />
            </form>
          </div>
          <div className="grid items-center justify-center md:justify-end text-center md:text-left">
            <h6 className="text-md font-normal text-textGray mb-4 md:mb-0">Contact</h6>
            <div className="space-y-4">
              <div className="flex items-center space-x-0 md:space-x-3">
                <a
                  href="mailto:hello@bookyourmusician.com"
                  className="text-xs text-textGray hover:text-textPurple duration-300 transition-colors"
                >
                  hello@bookyourmusician.com
                </a>
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
                <a
                  href="tel:+919744899001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-textGray hover:text-textPurple duration-300 transition-colors"
                >
                  Tel: +91 9744899001
                </a>
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