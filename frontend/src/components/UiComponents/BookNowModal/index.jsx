import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Button from '../../Button';
import apiClient from '../../../api';

const BookNowModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    submittedUrl: '',
    referralUrl: '',
  });
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    submittedUrl: '',
    referralUrl: '',
    form: '',
  });
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

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  const validateForm = () => {
    const newErrors = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
      submittedUrl: '',
      referralUrl: '',
      form: '',
    };
    let isValid = true;

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First Name is required';
      isValid = false;
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last Name is required';
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }
    if (formData.phone.trim() && !/^\+?\d{8,15}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number (8-15 digits)';
      isValid = false;
    }
    if (formData.submittedUrl && !formData.submittedUrl.match(/^https?:\/\/.+/)) {
      newErrors.submittedUrl = 'Invalid URL format';
      isValid = false;
    }
    if (formData.referralUrl && !formData.referralUrl.match(/^https?:\/\/.+/)) {
      newErrors.referralUrl = 'Invalid URL format';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
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
        onClose();
      } catch (err) {
        setErrors({ form: err.response?.data?.error || 'Something went wrong. Please try again.' });
      } finally {
        setIsSubmitting(false);
      }
    });
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2, ease: 'easeIn' } },
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.5, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <motion.div
            className="absolute inset-0 bg-black"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
            aria-label="Close modal"
            role="button"
          />
          <motion.div
            className="relative bg-[#0D000F] text-white rounded-lg shadow-lg max-w-sm w-full mx-4 p-6"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            role="dialog"
            aria-labelledby="modal-title"
            aria-modal="true"
          >
            <button
              className="absolute top-4 right-4 text-textGray hover:text-textPurple transition-colors duration-200"
              onClick={onClose}
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
            <h6 id="modal-title" className="text-md font-normal text-textGray mb-6 mt-6 text-left">
              Please use the form below to get in touch
            </h6>
            {errors.form && <p className="text-red-500 text-xs mb-4">{errors.form}</p>}
            {success && <p className="text-green-500 text-xs mb-4">{success}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2.5 bg-transparent border rounded-lg focus:outline-none transition-colors duration-200 placeholder-gray-400 text-xs text-white ${
                      errors.firstName ? 'border-red-500' : 'border-textGray focus:border-textPurple'
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
                    className={`w-full px-4 py-2.5 bg-transparent border rounded-lg focus:outline-none transition-colors duration-200 placeholder-gray-400 text-xs text-white ${
                      errors.lastName ? 'border-red-500' : 'border-textGray focus:border-textPurple'
                    }`}
                  />
                  {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                </div>
              </div>
              <div className="grid gap-4">
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2.5 bg-transparent border rounded-lg focus:outline-none transition-colors duration-200 placeholder-gray-400 text-xs text-white ${
                      errors.email ? 'border-red-500' : 'border-textGray focus:border-textPurple'
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
                    className={`w-full px-4 py-2.5 bg-transparent border rounded-lg focus:outline-none transition-colors duration-200 placeholder-gray-400 text-xs text-white ${
                      errors.phone ? 'border-red-500' : 'border-textGray focus:border-textPurple'
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
                  className={`w-full px-4 py-2.5 bg-transparent border rounded-lg focus:outline-none transition-colors duration-200 placeholder-gray-400 text-xs text-white resize-none ${
                    errors.message ? 'border-red-500' : 'border-textGray focus:border-textPurple'
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
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BookNowModal;