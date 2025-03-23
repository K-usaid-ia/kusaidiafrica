import { useState, useRef } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

export default function ContactForm() {
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null,
  });
  
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    setStatus({ submitting: true, success: false, error: null });
    
    setTimeout(() => {
      setStatus({
        submitting: false,
        success: true,
        error: null,
      });
    }, 2000);
    
    return true;
  };
  
  const resetForm = () => {
    setStatus({
      submitting: false,
      success: false,
      error: null,
    });
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  return (
    <>
      {status.success ? (
        <div className="bg-green-50 border border-green-200 text-green-700 p-2 rounded-lg">
          <p className="font-medium text-xs">Thank you!</p>
          <p className="text-[10px]">We'll reply soon.</p>
          <button 
            onClick={resetForm}
            className="mt-1 text-blue-600 font-medium text-[10px] hover:text-blue-800"
          >
            Send another
          </button>
        </div>
      ) : (
        <form
          action={`https://script.google.com/macros/s/${process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_ID}/exec`}
          method="POST"
          className="space-y-2"
          ref={formRef}
          target="hidden-iframe"
          onSubmit={handleSubmit}
        >
          {[
            {
              name: "name",
              label: "Name",
              type: "text",
              placeholder: "Your Name",
            },
            {
              name: "email",
              label: "Email",
              type: "email",
              placeholder: "Your Email",
            },
            {
              name: "subject",
              label: "Subject",
              type: "text",
              placeholder: "Subject",
            },
          ].map((field, idx) => (
            <div key={idx} className="relative">
              <label className="absolute -top-1 left-2 bg-white px-1 text-[8px] text-gray-600 font-medium">
                {field.label}
              </label>
              <input
                type={field.type}
                name={field.name}
                className="w-full px-2 py-1 rounded-lg border border-gray-200 bg-gray-50 text-gray-800 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-transparent transition duration-200 placeholder-gray-400 text-xs"
                placeholder={field.placeholder}
                required
              />
            </div>
          ))}
          <div className="relative">
            <label className="absolute -top-1 left-2 bg-white px-1 text-[8px] text-gray-600 font-medium">
              Message
            </label>
            <textarea
              name="message"
              className="w-full px-2 py-1 rounded-lg border border-gray-200 bg-gray-50 text-gray-800 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-transparent h-12 transition duration-200 placeholder-gray-400 text-xs"
              placeholder="Your message..."
              required
            ></textarea>
          </div>
          
          {status.error && (
            <div className="bg-red-50 border border-red-200 text-red-700 p-1 rounded-lg text-[10px]">
              {status.error}
            </div>
          )}
          
          <button
            type="submit"
            disabled={status.submitting}
            className="w-full bg-blue-600 text-white px-3 py-1 rounded-lg font-semibold hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 transition duration-300 text-xs disabled:bg-blue-400"
          >
            {status.submitting ? 'Sending...' : 'Send'}
          </button>
          
          <iframe name="hidden-iframe" style={{ display: 'none' }} />
        </form>
      )}
    </>
  );
}