import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getDetils, getimage } from './getmedicine';
import { HiArrowLeft } from 'react-icons/hi';
import {
  MdMedicalServices,
  MdAccessTime,
  MdInfo,
  MdOutlineWarningAmber,
  MdKitchen,
  MdContactSupport,
} from 'react-icons/md';

function MedicineDetail() {
  const { sku, id } = useParams();
  const navigate = useNavigate();
  const [details, setDetails] = useState({});
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [disclaimer, setDisclaimer] = useState('');

  function fetchDetails() {
    getDetils(sku)
      .then(function (response) {
        if (response.data.results && response.data.results.length > 0) {
          const activeMedicine = response.data.results[0];
          setDetails(activeMedicine);
          setDisclaimer(response.data.meta?.disclaimer || '');

          getimage(id)
            .then(function (res) {
              if (res.data && res.data.results && res.data.results.length > 0) {
                setImage(res.data.results[0].urls.regular);
              }
            })
            .catch(function (error) {
              console.log('Image Fetch Error', error);
            });
        } else {
          setError('Medicine Details Not Found, Try Again Later');
        }
        setLoading(false);
      })
      .catch(function () {
        if (!window.navigator.onLine) {
          setError(
            'No Internet Connection 🌐 Check Your internet connection And Try Again Later'
          );
        } else {
          setError('Medicine Not Found Or Api error occurred.');
        }
        setLoading(false);
      });
  }

  function handlequery() {
    setLoading(true);
    setError('');
    setDetails({});
    setImage('');
    fetchDetails();
  }

  useEffect(
    function () {
      if (sku) {
        fetchDetails();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [sku]
  );

  return (
    <div className="min-h-screen bg-gray-50 pb-10">
      {}
      <div className="w-full bg-blue-600 text-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center space-x-1 bg-blue-700 hover:bg-blue-800 transition px-3 py-1.5 rounded-md text-sm font-medium"
          >
            <HiArrowLeft className="text-lg" />
            <span>Back</span>
          </button>
          <h1 className="text-lg font-bold tracking-wide truncate max-w-[200px] sm:max-w-none">
            {details?.openfda?.brand_name?.[0] || 'Medicine Details'}
          </h1>
          <div className="w-10"></div>
        </div>
      </div>

      {disclaimer && (
        <div className="w-full bg-red-600 text-white py-2 font-medium text-sm">
          <marquee behavior="scroll" direction="left" scrollamount="6">
            {disclaimer}
          </marquee>
        </div>
      )}

      {}
      <div className="max-w-7xl mx-auto px-4 mt-6">
        {}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20 space-y-4">
            <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-gray-600 font-semibold text-sm">
              Fetching Medicine Records...
            </p>
          </div>
        )}

        {}
        {!loading && error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-md shadow-sm max-w-2xl mx-auto my-10">
            <div className="flex items-start space-x-3">
              <span className="text-red-500 text-2xl mt-0.5">⚠️</span>
              <div>
                <h3 className="text-red-800 font-bold">An Error Occurred</h3>
                <p className="text-red-700 text-sm mt-1">{error}</p>
                <button
                  onClick={handlequery}
                  className="mt-3 bg-red-600 text-white text-xs font-semibold px-3 py-1.5 rounded hover:bg-red-700 transition"
                >
                  Try Again
                </button>
              </div>
            </div>
          </div>
        )}

        {}
        {!loading && !error && details.openfda && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {}
            <div className="lg:col-span-1 space-y-6">
              {}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center">
                <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden relative p-4">
                  <img
                    className="w-full h-full object-contain transition-transform hover:scale-105 duration-300"
                    src={
                      image ||
                      'https://placehold.co/300x300?text=No+Image+Available'
                    }
                    alt={details.openfda?.brand_name?.[0] || 'medicine'}
                    onError={(e) => {
                      e.target.src =
                        'https://placehold.co/300x300?text=No+Image+Available';
                    }}
                  />
                </div>
                <div className="w-full mt-4 text-center">
                  <span className="inline-block bg-blue-50 text-blue-700 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {details.openfda?.product_type?.[0] || 'OTC Drug'}
                  </span>
                </div>
              </div>

              {}
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 space-y-4">
                <h2 className="text-gray-800 font-bold border-b border-gray-100 pb-2 text-sm uppercase tracking-wide flex items-center gap-2 text-blue-600">
                  <MdInfo className="text-lg" /> Core Information
                </h2>
                <div className="space-y-3">
                  <div>
                    <label className="text-xs font-bold text-gray-400 uppercase">
                      Brand Name
                    </label>
                    <p className="text-lg font-extrabold text-blue-900">
                      {details.openfda?.brand_name?.[0] || 'N/A'}
                    </p>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-400 uppercase">
                      Generic / Active Salt
                    </label>
                    <p className="text-sm font-semibold text-gray-700">
                      {details.openfda?.generic_name?.[0] ||
                        details.openfda?.substance_name?.[0] ||
                        'N/A'}
                    </p>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-400 uppercase">
                      Manufacturer
                    </label>
                    <p className="text-sm text-gray-600 font-medium">
                      {details.openfda?.manufacturer_name?.[0] || 'N/A'}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <div>
                      <label className="text-xs font-bold text-gray-400 uppercase">
                        Route
                      </label>
                      <p className="text-xs bg-gray-100 text-gray-700 font-bold px-2 py-1 rounded mt-0.5 inline-block">
                        {details.openfda?.route?.[0] || 'N/A'}
                      </p>
                    </div>
                    <div>
                      <label className="text-xs font-bold text-gray-400 uppercase">
                        Product NDC
                      </label>
                      <p className="text-xs bg-gray-100 text-gray-700 font-mono px-2 py-1 rounded mt-0.5 inline-block">
                        {details.openfda?.product_ndc?.[0] || 'N/A'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-4">
              {details.purpose && (
                <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-gray-800 font-bold text-base mb-3 flex items-center gap-2 text-emerald-600">
                    <MdMedicalServices className="text-xl" /> Uses & Purpose
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line bg-emerald-50/50 p-3.5 rounded-lg border border-emerald-100/50">
                    {details.purpose[0]}
                  </p>
                </div>
              )}

              {details.dosage_and_administration && (
                <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-gray-800 font-bold text-base mb-3 flex items-center gap-2 text-blue-600">
                    <MdAccessTime className="text-xl" /> Dosage & Administration
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line bg-blue-50/40 p-3.5 rounded-lg border border-blue-100/50">
                    {details.dosage_and_administration[0]}
                  </p>
                </div>
              )}

              {details.warnings && (
                <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-gray-800 font-bold text-base mb-3 flex items-center gap-2 text-amber-600">
                    <MdOutlineWarningAmber className="text-xl" /> Safety
                    Warnings & Precautions
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line bg-amber-50/40 p-3.5 rounded-lg border border-amber-100/50">
                    {details.warnings[0]}
                  </p>
                </div>
              )}

              {}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {details.storage_and_handling && (
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <h4 className="text-gray-800 font-bold text-sm mb-2 flex items-center gap-1.5 text-teal-600">
                      <MdKitchen /> Storage Instructions
                    </h4>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      {details.storage_and_handling[0]}
                    </p>
                  </div>
                )}

                {details.inactive_ingredient && (
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <h4 className="text-gray-800 font-bold text-sm mb-2 flex items-center gap-1.5 text-purple-600">
                      <MdInfo /> Inactive Ingredients
                    </h4>
                    <p className="text-gray-600 text-xs leading-relaxed font-medium">
                      {details.inactive_ingredient[0]}
                    </p>
                  </div>
                )}
              </div>

              {details.questions && (
                <div className="bg-gray-100 border border-gray-200 p-4 rounded-xl">
                  <h4 className="text-gray-700 font-bold text-xs uppercase tracking-wide mb-1.5 flex items-center gap-1.5">
                    <MdContactSupport className="text-gray-500 text-base" />{' '}
                    Questions or Comments?
                  </h4>
                  <p className="text-gray-600 text-xs leading-relaxed font-mono">
                    {details.questions[0]}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MedicineDetail;
