import React from 'react';

export default function About({ setView }) {
  const handleBack = () => {
    if (setView) {
      setView('home'); 
    } else {
      window.history.back();
    }
  };

  return (
    <div className="bg-[#f1f5f9] min-h-screen flex flex-col font-sans select-none">

      {}
      <div
        id="main"
        className="flex flex-col bg-cover bg-no-repeat flex-1"
        style={{
          backgroundImage: `url('https://t3.ftcdn.net/jpg/03/22/30/46/360_F_322304683_7ysRarFkmy2osfPKTOYQv7qTPofKelfb.jpg')`,
        }}
      >
        {}
        <div
          id="about"
          className="bg-gradient-to-r from-[#1e3c72] to-[#2a5298] color-white text-white p-2.5 text-[13px] md:text-[18px] text-center md:h-[50px] md:flex md:items-center md:justify-center font-semibold shadow-inner"
        >
          <h1 className="text-4xl">About Me</h1>
        </div>

        {}
        <div
          id="back"
          className="w-[30px] h-[30px] m-[15px_15px_0_15px] bg-white/50 backdrop-blur-xs rounded-[10px] flex items-center justify-center transition-all duration-300 hover:scale-[1.02] hover:bg-[#38bdf8] p-0"
        >
          <button
            onClick={handleBack}
            className="w-full h-full border-none bg-none cursor-pointer p-0 flex items-center justify-center hover:p-2.5 hover:rounded-[10px]"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/1218/1218375.png"
              alt="Back"
              className="w-full h-full object-contain"
            />
          </button>
        </div>

        {}
        <div
          id="my-info"
          className="p-[15px] bg-white/10 backdrop-blur-xs m-5 rounded-[20px] lg:w-[1020px] lg:self-center box-border"
        >
          {}
          <div className="details bg-white/80 rounded-[12px] shadow-[0_4px_10px_rgba(0,0,0,0.1)] p-[15px_20px] mb-5 transition-transform duration-500 hover:scale-[1.02]">
            <h2 className="text-[#1e3c72] border-l-[5px] border-[#1e3c72] pl-2.5 text-[25px] font-bold mb-2.5">
              My Information :
            </h2>
            <h2
              id="hi"
              className="text-slate-500 border-l-0 p-0 mb-0.5 text-[20px] font-bold"
            >
              Hi,
            </h2>
            <p className="text-[#333] line-height-[1.4] font-bold font-sans">
              Mera Naam Akash hai.
            </p>
            <p className="text-[#333] line-height-[1.4] font-bold font-sans">
              Me 18 saal ka hu.
            </p>
            <p className="text-[#333] line-height-[1.4] font-bold font-sans">
              Me loni Gaziabad (Uttar Pradesh) me rhata hu.
            </p>
          </div>

          {}
          <div className="details bg-white/80 rounded-[12px] shadow-[0_4px_10px_rgba(0,0,0,0.1)] p-[15px_20px] mb-5 transition-transform duration-500 hover:scale-[1.02]">
            <h2 className="text-[#1e3c72] border-l-[5px] border-[#1e3c72] pl-2.5 text-[25px] font-bold mb-2.5">
              My Educational Details :
            </h2>
            <p className="text-[#333] line-height-[1.4] font-bold font-sans mb-2">
              Mene Praarambhik Siksha(1st to 5th) aur Uchch Prathamik (5th to
              8th) apne gaon ke sarkari school se ki hai,
            </p>
            <p className="text-[#333] line-height-[1.4] font-bold font-sans mb-2">
              Madhymik Siksha (9th to 10th) shree gandhi smarak inter college
              mandola (GZB) se complete ki hai aur
            </p>
            <p className="text-[#333] line-height-[1.4] font-bold font-sans mb-2">
              Sarswati Vidhya Mandir Balram Nagar loni(Gaziabad) se (Commerce)
              stream se Uchchatar Madhyamik (11 th to 12th) complete ki hai |
            </p>
            <p className="text-[#333] line-height-[1.4] font-bold font-sans">
              Main Abhi (b.com) kar rha hu aur sath me CodeYogi se Ai, software
              development aur coding sikh raha hu.
            </p>
          </div>

          {}
          <div className="details bg-white/80 rounded-[12px] shadow-[0_4px_10px_rgba(0,0,0,0.1)] p-[15px_20px] mb-5 transition-transform duration-500 hover:scale-[1.02]">
            <h2 className="text-[#1e3c72] border-l-[5px] border-[#1e3c72] pl-2.5 text-[25px] font-bold mb-2.5">
              My experience in CodeYogi :
            </h2>
            <p className="text-[#333] line-height-[1.4] font-bold font-sans mb-2">
              jab mene smartphone me pahli bar tample run khela to me sochne
              laga ki ye game chal kaise chal rha hai isme bhag rahe aadmi ko
              pata kaise chalta hai ki hum kab ise kudate hai kab modte hai aur
              kis taraf modte hai, me isi ko lekar sochta rahta tha,
            </p>
            <p className="text-[#333] line-height-[1.4] font-bold font-sans mb-2">
              fir mujhe 12th me apne school se CodeYogi ke program ke bare me
              gyat hua fir mene coding ke bare me jana fir mujhe pata chala ki
              koi bhi game ya app kaise kaam karte hai, fir mene soch liya me
              coding sikhunga
            </p>
            <p className="text-[#333] line-height-[1.4] font-bold font-sans">
              Me jaise - jaise coding sikhta gaya vaise - vaise mujhe coding
              sikhne me maja aane laga khaskar CodeYogi duara diye gaye
              assignment banane me
            </p>
          </div>

          {}
          <div
            id="thanks"
            className="bg-gradient-to-r from-[#1e3c72] to-[#2a5298] color-white text-white p-2.5 text-[13px] text-center rounded-[10px] transition-transform duration-700 hover:scale-[1.02]"
          >
            <h2 className="text-sky-300 font-bold text-lg md:text-xl border-l-0 pl-0 mb-0">
              THANK YOU CODEYOGI for free coding program ❤️
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
