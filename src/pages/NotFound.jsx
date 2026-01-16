import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="text-center max-w-md">
        
        <h1 className="text-6xl font-bold text-blue-600 mb-4">
          404
        </h1>

        <h2 className="text-2xl font-semibold mb-3">
          Page Not Found
        </h2>

        <p className="text-gray-600 mb-6">
          The page you are looking for does not exist or has been moved.
        </p>

        <Link
          to="/"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Go Back Home
        </Link>

      </div>
    </section>
  );
};

export default NotFound;
