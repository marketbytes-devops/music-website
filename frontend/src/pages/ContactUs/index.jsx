import { useState, useEffect } from 'react';
import StarTitle from '../../components/StarTitle';
import Button from '../../components/Button';
import apiClient from '../../api';

const ContactUs = () => {
  const [isHovered, setIsHovered] = useState(false);
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
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
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
            {errors.form && <p className="text-red-500">{errors.form}</p>}
            {success && <p className="text-green-500">{success}</p>}
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
        </div>
      </div>
    </div>
  );
};

export default ContactUs;