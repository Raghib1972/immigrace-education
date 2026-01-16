import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Plan Your Future?
        </h2>

        <p className="text-blue-100 mb-8">
          Get expert career counselling and study abroad guidance today.
        </p>

        <Link
          to="/contact"
          className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Book Free Consultation
        </Link>

      </div>
    </section>
  );
};

export default CTA;
