import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { countriesData } from '../data/countriesData';

const CountryDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const country = countriesData.find(c => c.id === parseInt(id));
  
  if (!country) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-6">Country not found</p>
          <button 
            onClick={() => navigate('/study-abroad')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img 
          src={country.image} 
          alt={country.name}
          className={`w-full h-full object-cover ${country.position}`}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Study in {country.name}</h1>
            <p className="text-xl">{country.description}</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Top Universities</h2>
            <p className="text-gray-600">
              Explore prestigious and top Universities in {country.name}
            </p>
            <button className="mt-4 text-blue-600 font-semibold hover:underline">
              Know More →
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Admission Requirements</h2>
            <p className="text-gray-600">
              Understand eligibility criteria to make your study abroad in {country.name} aspirations a reality
            </p>
            <button className="mt-4 text-blue-600 font-semibold hover:underline">
              Know More →
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Popular Subjects</h2>
            <p className="text-gray-600">
              Explore diverse fields in {country.name} Universities from STEM frontiers to cultural immersion
            </p>
            <button className="mt-4 text-blue-600 font-semibold hover:underline">
              Know More →
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Fees</h2>
            <p className="text-gray-600">
              Explore the fee details to Study in {country.name} and unlock your academic adventure
            </p>
            <button className="mt-4 text-blue-600 font-semibold hover:underline">
              Know More →
            </button>
          </div>
        </div>

        <div className="text-center">
          <button 
            onClick={() => navigate('/study-abroad')}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700"
          >
            View All Countries
          </button>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;


