import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you'd send this to an API/Database
    console.log("Form Data Submitted:", formData);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="contact-container max-w-4xl mx-auto py-16 px-6 min-h-[80vh]">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          Contact Us
        </h1>
        <p className="text-gray-600">
          Have a question or feedback? We'd love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-8 rounded-3xl shadow-xl border border-gray-50">
        {/* Left Side: Contact Info */}
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Get in Touch
            </h3>
            <p className="text-gray-600">
              Our team usually responds within 24 hours.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-xl">
              📍
            </div>
            <p className="text-gray-700 font-medium">
              Hamirpur, Himachal Pradesh
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-xl">
              📧
            </div>
            <p className="text-gray-700 font-medium">support@foody.com</p>
          </div>
        </div>

        {/* Right Side: The Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-orange-500 transition-all"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-orange-500 transition-all"
          />
          <textarea
            name="message"
            rows="4"
            placeholder="How can we help?"
            value={formData.message}
            onChange={handleChange}
            required
            className="p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-orange-500 transition-all resize-none"
          ></textarea>

          <button
            type="submit"
            className={`py-4 px-8 rounded-xl font-bold text-white transition-all ${
              isSubmitted ? "bg-green-500" : "bg-orange-500 hover:bg-orange-600"
            }`}
          >
            {isSubmitted ? "Message Sent! ✓" : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
