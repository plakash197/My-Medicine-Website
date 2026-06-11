import React from 'react';
import { Link } from 'react-router-dom';

function MedicineCard({ alldata, pic }) {
  const id = alldata?.openfda?.generic_name[0];
  return (
    <>
      <div
        id="products"
        className="bg-white/20 sm:bg-transparent w-full m-[30px_0] p-[15px] sm:p-0 md:p-[50px] lg:p-[70px] box-border rounded-[10px]"
      >
        {}
        <div id="card" className="mb-[29px]">
          <h2 className="text-xl md:text-[25px] font-bold text-slate-800 mb-2">
            Search Result :
          </h2>
          <div className="bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] flex items-center p-[4px_6px] rounded-[14px] gap-3 transition-transform duration-300 border-l-[5px] border-r-[5px] border-red-500 hover:scale-[1.02] shadow-md">
            <div className="flex-shrink-0">
              <a
                href="https://www.1mg.com/?srsltid=AfmBOorqVypjX_1VlCKeoJFaEtp0_xj9QdM6zLO4wWME24GgDzDzWdXZ&wpsrc=Google+Organic+Search"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={
                    pic ||
                    'https://placehold.co/300x300?text=No+Image+Available'
                  }
                  alt="medicine-pic"
                  className="h-45 object-contain rounded-lg shadow-md m-1"
                  onError={(e) => {
                    e.target.src =
                      'https://placehold.co/300x300?text=No+Image+Available';
                  }}
                />
              </a>
            </div>
            <div className="details p-[4px_10px] flex flex-col gap-0.5 text-black">
              <h1 className="text-sm flex flex-col md:text-lg font-normal">
                Medicine Name :
                <span className="font-bold text-white">
                  {alldata.openfda?.generic_name[0]}
                </span>
              </h1>
              <h1 className="text-sm flex flex-col md:text-lg font-normal">
                Brand Name :
                <span className="font-bold text-white">
                  {alldata?.openfda?.brand_name[0]}
                </span>
              </h1>
              <h1 className="text-sm flex flex-col md:text-lg font-normal">
                Manufacturer Name :
                <span className="font-bold text-white">
                  {' '}
                  {alldata?.openfda?.manufacturer_name[0]}{' '}
                </span>
              </h1>
              <Link
                to={'/find/' + id}
                className="text-xs font-semibold underline mt-1 hover:text-red-200 block"
              >
                More Details...
              </Link>
            </div>
          </div>
        </div>

        {}
        <div
          id="note"
          className="bg-[#e5e7eb] border-l-4 border-r-4 border-red-500 p-3.5 mt-6 rounded-[10px]"
        >
          <h1 className="text-[18px] text-black font-bold mb-1">
            Product Information Disclaimer
          </h1>
          <p className="text-sm text-gray-700">
            Note : Product images aur descriptions reference ke liye hain.
            Actual packaging aur appearance alag ho sakta hai.
          </p>
        </div>
      </div>
    </>
  );
}

export default MedicineCard;
