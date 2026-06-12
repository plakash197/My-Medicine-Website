import { useState } from 'react';
import getmedicine, { getimage } from './getmedicine';
import MedicineCard from './Medicinedata';
import axios from 'axios';
import './index.css';

export default function Find() {
  const [searchTerm, setSearchTerm] = useState('');
  const [medicine, setMedicine] = useState({});
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [image, setImage] = useState('');

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value.trim() === '') {
      setList([]);
      return;
    }

    const url = `https://api.fda.gov/drug/label.json?search=openfda.brand_name:${encodeURIComponent(
      value
    )}*&count=openfda.brand_name.exact&limit=10`;
    axios
      .get(url)
      .then(function (response) {
        const medicineRow = response.data.results || [];

        const Name = [];

        for (let x = 0; x < medicineRow.length; x++) {
          const medicineName = medicineRow[x];
          Name.push(medicineName.term);
        }

        setList(Name);
      })
      .catch(function () {
        setList([]);
      });
  };

  function handlequery() {
    if (!searchTerm.trim()) return;

    setLoading(true);
    setError('');
    setMedicine({});
    setImage('');

    getmedicine(searchTerm)
      .then(function (response) {
        if (response.data.results && response.data.results.length > 0) {
          const activeMedicine = response.data.results[0];
          setMedicine(activeMedicine);

          let searchName = activeMedicine?.openfda?.generic_name?.[0];

          getimage(searchName)
            .then(function (res) {
              if (res.data && res.data.results && res.data.results.length > 0) {
                setImage(res.data.results[0].urls.regular);
              } else {
                console.log('No image found for this medicine name');
              }
            })
            .catch(function (error) {
              console.log('Google Image API Call Failed:', error);
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

  return (
    <div className="bg-[#f1f5f9] min-h-screen flex flex-col font-sans select-none">
      {}
      <div
        id="main"
        className="p-2.5 box-border m-[10px_5px_20px_5px] flex flex-col rounded-[15px] bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://img.freepik.com/free-vector/shiny-green-heartbeat-pulse-electrocardiogram-design-creative-background-health-medical-concept_1302-5649.jpg?semt=ais_hybrid&w=740&q=80')`,
        }}
      >
        {}
        <div
          id="medicine-info"
          className="flex flex-col box-border p-1.25 sm:p-[10px_20px] md:ml-[2px] lg:p-[30px_50px]"
        >
          <p className="text-[30px] md:text-[35px] font-bold mb-2.5 md:mb-2 text-slate-800">
            Medicine Name
          </p>

          <input
            type="text"
            id="medicineinput"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="🔍 Enter Medicine Name"
            className="h-10 text-green-600 w-full rounded-full pl-2.5 text-[15px] border border-[#cbd5e1] bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
          <button
            onClick={handlequery}
            className="bg-[#22c55e] text-white border-none p-[10px_24px] text-[15px] rounded-[25px] m-[12px_auto] block cursor-pointer transition-transform duration-300 hover:scale-105 shadow-md"
          >
            🔍 Search Medicine
          </button>
        </div>
        {list.length > 0 && (
          <div className="absolute left-0 right-0 bg-white text-black mt-28 ml-2 mr-2 rounded-[10px] shadow-lg z-50 max-h-[200px] overflow-y-auto ">
            {list.map((name, index) => (
              <div
                key={index}
                className="p-3 hover:bg-blue-100 cursor-pointer font-medium border-b border-gray-100 last:border-none"
                onClick={() => {
                  setSearchTerm(name);
                  setList([]);
                }}
              >
                {name}
              </div>
            ))}
          </div>
        )}

        {loading && (
          <div className="flex flex-col items-center justify-center py-20 space-y-4">
            <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-black-600 font-semibold text-sm">
              Fetching Medicine Data...
            </p>
          </div>
           )}
           
        {!loading && error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-md my-4 mx-2 shadow-sm">
            <div className="flex items-center">
              <span className="text-red-500 text-xl mr-2">⚠️</span>
              <p className="text-red-700 font-medium">{error}</p>
            </div>
          </div>
        )}
        {!loading && !error && medicine.openfda && (
          <MedicineCard alldata={medicine} pic={image} />
        )}
        <div className="warning-advice mt-[30px] bg-white/20 backdrop-blur-sm rounded-[15px] p-5 border-l-3 border-green-600">
          <div id="warning" className="flex flex-col gap-2.5">
            <div className="border border-y-0 border-x-3 border-gray-400 p-1.25 rounded-[5px]">
              <h1 className="text-xl font-bold text-black">⚠️ WARNING</h1>
              <h2 className="text-[15px] pl-1.25 text-red-600 font-semibold mt-1">
                This website is for informational purposes only.
              </h2>
              <h2 className="text-[15px] pl-1.25 text-slate-700 mt-0.5">
                The medicines, generic alternatives, and details shown here are
                not a substitute for professional medical advice.
              </h2>
            </div>

            <div className="row-gap flex flex-col gap-2.5 p-5">
              <div className="flex gap-2.5">
                <p className="bg-blue-600 text-white px-2 py-0.5 rounded-full text-xs h-fit">
                  1
                </p>
                <p className="text-slate-800 text-sm md:text-base">
                  Always consult a qualified doctor or pharmacist before taking,
                  stopping, or changing any medicine.
                </p>
              </div>
              <div className="flex gap-2.5">
                <p className="bg-blue-600 text-white px-2 py-0.5 rounded-full text-xs h-fit">
                  2
                </p>
                <p className="text-slate-800 text-sm md:text-base">
                  Do not use this website for self-diagnosis or self-medication.
                </p>
              </div>
              <div className="flex gap-2.5">
                <p className="bg-blue-600 text-white px-2 py-0.5 rounded-full text-xs h-fit">
                  3
                </p>
                <p className="text-slate-800 text-sm md:text-base">
                  The effect of a medicine may vary from person to person based
                  on age, medical condition, allergies, and other medications.
                </p>
              </div>
              <div className="flex gap-2.5">
                <p className="bg-blue-600 text-white px-2 py-0.5 rounded-full text-xs h-fit">
                  4
                </p>
                <p className="text-slate-800 text-sm md:text-base">
                  Using incorrect medicine or dosage can cause serious health
                  risks.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="warning-advice mt-[30px] mb-12 bg-white/20 backdrop-blur-sm rounded-[15px] p-5 border-l-3 border-green-600">
          <div>
            <h1 className="text-xl font-bold text-black">💊 ADVICE</h1>
          </div>
          <div className="row-gap flex flex-col gap-2.5 p-5">
            <div className="flex gap-2.5">
              <p className="bg-blue-600 text-white px-2 py-0.5 rounded-full text-xs h-fit">
                1
              </p>
              <p className="text-slate-800 text-sm md:text-base">
                Always verify the composition, strength, and dosage before
                purchasing any medicine.
              </p>
            </div>
            <div className="flex gap-2.5">
              <p className="bg-blue-600 text-white px-2 py-0.5 rounded-full text-xs h-fit">
                2
              </p>
              <p className="text-slate-800 text-sm md:text-base">
                Generic medicines may differ in brand, appearance, or
                manufacturer, but should be taken only with medical guidance.
              </p>
            </div>
            <div className="flex gap-2.5">
              <p className="bg-blue-600 text-white px-2 py-0.5 rounded-full text-xs h-fit">
                3
              </p>
              <p className="text-slate-800 text-sm md:text-base">
                Buy medicines only from licensed pharmacies or medical stores.
              </p>
            </div>
            <div className="flex gap-2.5">
              <p className="bg-blue-600 text-white px-2 py-0.5 rounded-full text-xs h-fit">
                4
              </p>
              <p className="text-slate-800 text-sm md:text-base">
                In case of side effects, stop using the medicine and consult a
                doctor immediately.
              </p>
            </div>
          </div>
        </div>
        <div className="image flex w-full items-center justify-center box-border bg-transparent">
          <a
            id="image"
            href="https://janaushadhi.gov.in/productportfolio/ProductmrpList"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://content.jdmagicbox.com/v2/comp/delhi/r2/011pxx11.xx11.220612163054.i8r2/catalogue/pradhan-mantri-jan-aushadhi-kendra-malviya-nagar-delhi-chemists-pkocnml8g9.jpg"
              alt="Jan Aushadhi Kendra"
              className="w-[100px] h-[100px] rounded-[19px] p-2.5 object-cover shadow-sm bg-white"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
