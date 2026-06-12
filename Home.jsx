import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-[#f1f5f9] min-h-screen flex flex-col font-sans select-none">

      {}
      <div 
        id="main" 
        className="min-h-[calc(100vh-130px)] bg-cover bg-no-repeat bg-[right_center] flex-1"
        style={{ backgroundImage: `url('https://i.pinimg.com/736x/05/61/6b/05616b208ff9c38393e4debca000137e.jpg')` }}
      >
        
        <div id="medicine" className="p-[15px] sm:p-6 md:p-[30px_40px] lg:p-[30px_70px] flex flex-col items-start gap-2.5">
          <h1 className="font-archivo text-black text-[30px] sm:text-[35px] w-[260px] md:w-full font-bold leading-tight">
            <span className="text-purple-400">Welcome</span> to Medicine Finder
          </h1>
          <p className="text-black font-bold text-[18px] sm:text-[20px]">
            Find Generic & Alternative Medicine Easily
          </p>
          <Link 
            to="/find"
            className="text-[17px] sm:text-[20px] md:text-[23px] p-[5px_10px] md:p-[8px_20px] color-white text-white bg-blue-600 rounded-[999px] md:rounded-full inline-block transition-transform duration-300 hover:scale-[1.02]"
          >
            🔍 Find Your Medicine
          </Link>
        </div>

        {}
        <div id="content" className="flex flex-col">
          <div id="info" className="p-[30px] flex flex-col items-center">
            <h2 className="text-[20px] sm:text-[30px] font-bold text-slate-800 italic">Why Use Medicine Finder</h2>
          </div>

          {}
          <div id="card" className="flex flex-row sm:flex-row gap-2.5 items-center justify-between sm:justify-around lg:p-[30px] px-4">
            
            {}
            <div className="card w-[200px] bg-white flex flex-col items-center p-[10px_15px] box-border rounded-[10px] shadow-sm">
              <div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0fmbZ_nJyso0Y-9WM-K4AcDjPFs4bAO00Jw&s"
                  className="w-[30px] sm:w-[50px] lg:w-[60px]"
                  alt="logo"
                />
              </div>
              <div className="name text-center mt-1">
                <div className="flex flex-col gap-1">
                  <h3 className="text-[11px] sm:text-[20px] font-bold italic">Fast Search</h3>
                  <p className="text-[9px] sm:text-[15px] text-gray-500">Quickly find medicine</p>
                </div>
              </div>
            </div>

            {}
            <div className="card w-[200px] bg-white flex flex-col items-center p-[10px_15px] box-border rounded-[10px] shadow-sm">
              <div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCMGuj8vttshv24Z-sxIIobsXtyPeEsZu0zg&s"
                  className="w-[30px] sm:w-[50px] lg:w-[60px]"
                  alt="logo"
                />
              </div>
              <div className="name text-center mt-1">
                <div className="flex flex-col gap-1">
                  <h3 className="text-[11px] sm:text-[20px] font-bold  italic">Get Alternative</h3>
                  <p className="text-[9px] sm:text-[15px] text-gray-500">Get Medicine Option</p>
                </div>
              </div>
            </div>

            {}
            <div className="card w-[200px] bg-white flex flex-col items-center p-[10px_15px] box-border rounded-[10px] shadow-sm">
              <div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC3hUZG0fcUqpeYiKQ5ZqpXYsjvb0ZkBcAeQ&s"
                  className="w-[30px] sm:w-[50px] lg:w-[60px]"
                  alt="logo"
                />
              </div>
              <div className="name text-center mt-1">
                <div className="flex flex-col gap-1">
                  <h3 className="text-[11px] sm:text-[20px] font-bold italic">Easy To Use</h3>
                  <p className="text-[9px] sm:text-[15px] text-gray-500 ">Simple & Clean Ui</p>
                </div>
              </div>
            </div>

            {}
            <div id="hide" className="hidden md:flex card w-[200px] bg-white flex flex-col items-center p-[10px_15px] box-border rounded-[10px] shadow-sm">
              <div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJdpZRc8updHS0y1Ei0QKJ5pLSyQEypLtC0g&s"
                  className="w-[30px] sm:w-[50px] lg:w-[60px]"
                  alt="logo"
                />
              </div>
              <div className="name text-center mt-1">
                <div className="flex flex-col gap-1">
                  <h3 className="text-[11px] sm:text-[20px] font-bold italic">Responsive Design</h3>
                  <p className="text-[9px] sm:text-[15px] text-gray-500">Designed For All Device</p>
                </div>
              </div>
            </div>

          </div>

          {}
          <div id="how" className="flex flex-col gap-2.5 m-[15px]">
            <div className="div self-center">
              <h1 className="text-[25px] sm:text-[30px] font-bold text-slate-800">How It Works?</h1>
            </div>
            <div id="list" className="flex flex-col gap-[5px] ml-[10px]">
              <div className="flex flex-col sm:flex-row sm:justify-between lg:justify-evenly gap-2.5">
                
                {}
                <div className="row flex flex-col gap-2.5 md:gap-5">
                  <div className="flex gap-2 items-center">
                    <p className="p bg-blue-600 text-white p-[3px_7px] rounded-full text-xs sm:text-xl">1</p>
                    <p className="text-black text-lg sm:text-[20px] italic">Click On Find Medicine</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <p className="p bg-blue-600 text-white p-[3px_7px] rounded-full text-xs sm:text-xl">2</p>
                    <p className="text-black text-lg sm:text-[20px] italic">Enter Medicine Name</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <p className="p bg-blue-600 text-white p-[3px_7px] rounded-full text-xs sm:text-xl">3</p>
                    <p className="text-black text-lg sm:text-[20px] italic">Select Medicine From List</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <p className="p bg-blue-600 text-white p-[3px_7px] rounded-full text-xs sm:text-xl">4</p>
                    <p className="text-black text-lg sm:text-[20px] italic">Click On Search Medicine</p>
                  </div>
                </div>

                {}
                <div className="row flex flex-col gap-2.5 md:gap-5">
                  <div className="flex gap-2 items-center">
                    <p className="p bg-blue-600 text-white p-[3px_7px] rounded-full text-xs sm:text-xl">5</p>
                    <p className="text-black text-lg sm:text-[20px] italic">See Medicine Details</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <p className="p bg-blue-600 text-white p-[3px_7px] rounded-full text-xs sm:text-xl">6</p>
                    <p className="text-black text-lg sm:text-[20px] italic">Click On More Details To</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <p className="p bg-blue-600 text-white p-[3px_7px] rounded-full text-xs sm:text-xl">7</p>
                    <p className="text-black text-lg sm:text-[20px] italic">Get Extra Medicine Details</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <p className="p bg-blue-600 text-white p-[3px_7px] rounded-full text-xs sm:text-xl">8</p>
                    <p className="text-black text-lg sm:text-[20px] italic">Like Seller & Manufacturer</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}