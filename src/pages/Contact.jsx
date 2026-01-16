
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!form.message.trim()) newErrors.message = "Message is required";

    return newErrors;
  };

  /* ✅ WHATSAPP FUNCTION */
  const sendWhatsApp = () => {
    const phoneNumber = "918130464466";

    const text = encodeURIComponent(
      `Hello Immigrace Education 👋
Name: ${form.name}
Email: ${form.email}
Message: ${form.message}`
    );

    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setErrors({});
      sendWhatsApp();
      setForm({ name: "", email: "", message: "" });
    } else {
      setErrors(validationErrors);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section
      className="pt-28 pb-20 min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/images/contact/contact-bg.jpg')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative max-w-4xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12 text-white">
          <h1 className="text-3xl md:text-4xl font-bold">
            Contact <span className="text-blue-400">Us</span>
          </h1>
          <p className="text-gray-200 mt-3">
            Book a free consultation or ask us anything.
          </p>
        </div>

        {/* Success Message */}
        {submitted && (
          <div className="mb-6 p-4 rounded-lg bg-green-100 text-green-800">
            Redirecting you to WhatsApp…
          </div>
        )}

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/90 backdrop-blur-lg p-8 rounded-xl shadow space-y-6"
        >
          {/* Name */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && (
              <p className="text-sm text-red-500 mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">{errors.email}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500"
            />
            {errors.message && (
              <p className="text-sm text-red-500 mt-1">{errors.message}</p>
            )}
          </div>

          {/* WhatsApp Button ONLY */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg"
          >
            Send on WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
