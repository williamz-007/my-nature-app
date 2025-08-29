'use client';

import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Form() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear status when user starts typing
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: '' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus({
        type: 'error',
        message: 'Please fill in all fields.'
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      console.log('Submitting form data:', formData);
      
      // Use the correct API endpoint that matches our route
      const response = await fetch('/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('Response status:', response.status);
      console.log('Response ok:', response.ok);

      if (!response.ok) {
        // Check if response is JSON
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          const result = await response.json();
          console.log('Error response:', result);
          setSubmitStatus({
            type: 'error',
            message: result.error || `HTTP Error: ${response.status}`
          });
        } else {
          // Not JSON response, likely 404 or server error
          const text = await response.text();
          console.log('Non-JSON response:', text);
          setSubmitStatus({
            type: 'error',
            message: `API Error (${response.status}): Make sure /api/contacts/route.ts exists`
          });
        }
        return;
      }

      const result = await response.json();
      console.log('Success response:', result);

      setSubmitStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });

    } catch (error) {
      console.error('Network/Parse error:', error);
      setSubmitStatus({
        type: 'error',
        message: `Network error: ${error instanceof Error ? error.message : 'Unknown error'}. Check console for details.`
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full bg-white py-40 item-start justify-start ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
        
        {/* LEFT SIDE */}
        <div className="flex flex-col gap-8">
          {/* Heading */}
          <h2 className="text-4xl font-medium font-serif text-[#4B5320]">You can find us at</h2>

          {/* Email */}
          <div className="space-y-1">
            <h3 className="text-sm font-regular text-gray-400">EMAIL</h3>
            <p className="text-gray-600 text-lg">hello@example.com</p>
          </div>

          {/* Phone */}
          <div className="space-y-1">
            <h3 className="text-sm font-regular text-gray-400">PHONE NUMBER </h3>
            <p className="text-gray-600 text-lg">+1 (234) 567-890</p>
          </div>

          {/* Location */}
          <div className="space-y-1">
            <h3 className="text-sm font-regular text-gray-400">LOCATION</h3>
            <p className="text-gray-600 text-lg">2360 Hood Avenue, San Diego, CA, 92123</p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            {/* Twitter */}
            <div className="w-12 h-12 flex items-center justify-center bg-[#4B5320] rounded-full cursor-pointer">
              <svg
      className="w-6 h-6 text-white"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 
        1.014-.611 1.794-1.574 2.163-2.724-.951.564-2.005.974-3.127 
        1.195-.897-.959-2.178-1.559-3.594-1.559-2.72 
        0-4.924 2.204-4.924 4.924 0 .39.045.765.127 
        1.124-4.09-.205-7.719-2.165-10.148-5.144-.424.729-.666 
        1.577-.666 2.475 0 1.708.87 3.216 2.188 
        4.099-.807-.026-1.566-.247-2.229-.616v.062c0 
        2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.317 
        0-.626-.03-.928-.086.627 1.956 2.444 3.379 4.6 
        3.419-1.68 1.318-3.809 2.105-6.102 
        2.105-.396 0-.787-.023-1.175-.068 2.179 1.397 4.768 
        2.212 7.557 2.212 9.054 0 14-7.496 
        14-13.986 0-.21 0-.423-.015-.634.961-.689 
        1.8-1.56 2.46-2.548z"/>
    </svg>
            </div>

            {/* Instagram */}
            <div className="w-12 h-12 flex items-center justify-center bg-[#4B5320] rounded-full cursor-pointer">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM17.5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
              </svg>
            </div>

            {/* YouTube */}
            <div className="w-12 h-12 flex items-center justify-center bg-[#4B5320] rounded-full cursor-pointer">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M21.8 8.001a2.751 2.751 0 0 0-1.94-1.948C18.042 6 12 6 12 6s-6.042 0-7.86.053a2.75 2.75 0 0 0-1.94 1.948A28.892 28.892 0 0 0 2 12a28.89 28.89 0 0 0 .2 3.999 2.751 2.751 0 0 0 1.94 1.948C5.958 18 12 18 12 18s6.042 0 7.86-.053a2.75 2.75 0 0 0 1.94-1.948A28.89 28.89 0 0 0 22 12a28.892 28.892 0 0 0-.2-3.999ZM10 15.5v-7l6 3.5-6 3.5Z"></path>
              </svg>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-white px-8 flex flex-col gap-8">
          <h3 className="text-4xl font-medium font-serif text-[#4B5320]">
            Let&apos;s Get In Touch
          </h3>

          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              disabled={isSubmitting}
              className="border-b-1 border-gray-300 py-3 focus:outline-none focus:border-yellow-500 placeholder-gray-400"
            />
            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              disabled={isSubmitting}
              className="border-b-1 border-gray-300 py-3 focus:outline-none focus:border-yellow-500 placeholder-gray-400"
            />
            {/* Message */}
            <textarea
              rows={4}
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              disabled={isSubmitting}
              className="border-b-1 border-gray-300 py-3 focus:outline-none focus:border-yellow-500 placeholder-gray-400"
            ></textarea>
            
            {/* Status Message */}
            {submitStatus.type && (
              <div className={`p-3 rounded-lg text-sm ${
                submitStatus.type === 'success' 
                  ? 'bg-green-50 text-green-800 border border-green-200' 
                  : 'bg-red-50 text-red-800 border border-red-200'
              }`}>
                {submitStatus.message}
              </div>
            )}
            
            {/* Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`mt-2 font-medium py-4 rounded-lg transition w-fit px-8 text-sm ${
                isSubmitting 
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-yellow-300 text-[#4B5320] hover:bg-yellow-400/40'
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}