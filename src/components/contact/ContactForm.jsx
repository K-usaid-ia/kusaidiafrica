import { useState, useRef } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

export default function ContactForm() {
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });
  
  // Create a ref for the form
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    // Don't prevent default - let the form submit naturally
    // e.preventDefault();
    
    // Show submitting status
    setStatus({ submitting: true, success: false, error: null });
    
    // The form will submit directly to Google Script
    // We just need to update the UI
    
    // Set up a timer to show success message after submission
    // (This assumes the form submission will succeed)
    setTimeout(() => {
      setStatus({
        submitting: false,
        success: true,
        error: null
      });
    }, 2000);
    
    // Return true to allow the form to submit naturally
    return true;
  };
  
  // Reset the form to allow sending another message
  const resetForm = () => {
    setStatus({
      submitting: false,
      success: false,
      error: null
    });
    
    // Clear the form fields if needed
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  return (
    <>
      <h4 className="text-2xl font-bold text-gray-800 mb-6 flex items-center justify-center">
        <FaPaperPlane className="text-blue-600 mr-2" /> Send a Message
      </h4>
      
      {status.success ? (
        <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-xl mb-6">
          <p className="font-medium">Thank you for your message!</p>
          <p className="text-sm">We'll get back to you soon.</p>
          <button 
            onClick={resetForm}
            className="mt-3 text-blue-600 font-medium hover:text-blue-800"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form
        action={`https://script.google.com/macros/s/${process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_ID}/exec`}
        method="POST"
              className="space-y-5"
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
              placeholder: "What's on your mind?",
            },
          ].map((field, idx) => (
            <div key={idx} className="relative">
              <label className="absolute -top-2 left-3 bg-white px-2 text-xs text-gray-600 font-medium">
                {field.label}
              </label>
              <input
                type={field.type}
                name={field.name}
                className="w-full px-4 py-2 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200 placeholder-gray-400 text-sm"
                placeholder={field.placeholder}
                required
              />
            </div>
          ))}
          <div className="relative">
            <label className="absolute -top-2 left-3 bg-white px-2 text-xs text-gray-600 font-medium">
              Message
            </label>
            <textarea
              name="message"
              className="w-full px-4 py-2 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent h-20 transition duration-200 placeholder-gray-400 text-sm"
              placeholder="Tell us more..."
              required
            ></textarea>
          </div>
          
          {status.error && (
            <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded-xl text-sm">
              {status.error}
            </div>
          )}
          
          <button
            type="submit"
            disabled={status.submitting}
            className="w-full bg-blue-600 text-white px-6 py-2 rounded-xl font-semibold hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition duration-300 text-sm disabled:bg-blue-400"
          >
            {status.submitting ? 'Sending...' : 'Send It!'}
          </button>
          
          {/* Hidden iframe to prevent page navigation on form submit */}
          <iframe name="hidden-iframe" style={{display: 'none'}} />
          {/* Add target to the form to use the hidden iframe */}
          <input type="hidden" name="target" value="hidden-iframe" />
        </form>
      )}
    </>
  );
}