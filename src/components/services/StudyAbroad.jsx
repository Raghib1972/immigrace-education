const StudyAbroad = () => {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">
            Study Abroad Services
          </h2>
  
          <p className="text-gray-600 max-w-3xl mb-6">
            End-to-end guidance for studying abroad — from university selection to
            visa and pre-departure support.
          </p>
  
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-xl shadow">
              <h4 className="font-semibold mb-2">University Selection</h4>
              <p className="text-sm text-gray-600">
                Shortlisting universities based on profile and budget.
              </p>
            </div>
  
            <div className="p-6 bg-white rounded-xl shadow">
              <h4 className="font-semibold mb-2">Application Support</h4>
              <p className="text-sm text-gray-600">
                SOP, LOR and application submission assistance.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default StudyAbroad;
  