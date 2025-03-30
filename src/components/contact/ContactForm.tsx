import { useState, useRef } from "react";
import { FaPaperPlane } from "react-icons/fa";

export default function ContactForm() {
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null,
  });

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
        <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-xl shadow-md">
          <p className="font-semibold text-lg">Thank you!</p>
          <p className="mt-2 text-base">We’ll reply soon.</p>
          <button
            onClick={resetForm}
            className="mt-4 text-bice_blue font-semibold text-base hover:text-bice_blue-700 transition duration-200"
            style={{ color: '#0A678E', '--tw-text-opacity-hover': 1, '--tw-text-color-hover': '#37b9f1' } as React.CSSProperties}
          >
            Send another
          </button>
        </div>
      ) : (
        <form
          action={`https://script.google.com/macros/s/${process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_ID}/exec`}
          method="POST"
          className="space-y-6"
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
              <label className="absolute -top-2 left-3 bg-white px-2 text-sm text-gray-700 font-medium">
                {field.label}
              </label>
              <input
                type={field.type}
                name={field.name}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-800 text-base focus:outline-none focus:ring-2 focus:ring-picton_blue focus:border-picton_blue transition duration-200 placeholder-gray-400"
                style={{ '--tw-ring-color': '#0AA3E1', '--tw-border-color': '#0AA3E1' } as React.CSSProperties}
                placeholder={field.placeholder}
                required
              />
            </div>
          ))}
          <div className="relative">
            <label className="absolute -top-2 left-3 bg-white px-2 text-sm text-gray-700 font-medium">
              Your Research Input
            </label>
            <textarea
              name="message"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-800 text-base focus:outline-none focus:ring-2 focus:ring-picton_blue focus:border-picton_blue h-32 transition duration-200 placeholder-gray-400"
              style={{ '--tw-ring-color': '#0AA3E1', '--tw-border-color': '#0AA3E1' } as React.CSSProperties}
              placeholder="What’s one challenge you face with aid (e.g., trust, waste, delays)?"
              required
            ></textarea>
          </div>

          {status.error && (
            <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl text-base">
              {status.error}
            </div>
          )}

          <button
            type="submit"
            disabled={status.submitting}
            className="w-full bg-bice_blue text-white px-6 py-3 rounded-xl font-semibold text-lg hover:bg-bice_blue-700 focus:ring-2 focus:ring-bice_blue-400 transition duration-300 disabled:bg-bice_blue-400 flex items-center justify-center gap-2"
            style={{ backgroundColor: '#0A678E', '--tw-bg-opacity-hover': 1, '--tw-bg-color-hover': '#37b9f1', '--tw-ring-color': '#79d0f6', '--tw-bg-color-disabled': '#79d0f6' } as React.CSSProperties}
          >
            {status.submitting ? (
              "Sending..."
            ) : (
              <>
                Send <FaPaperPlane />
              </>
            )}
          </button>

          <iframe name="hidden-iframe" style={{ display: "none" }} />
        </form>
      )}
    </>
  );
}