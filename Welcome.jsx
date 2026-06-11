import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Welcome({ onContinue }) {
  const [greeting, setGreeting] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {
    const formatName = (name) => {
      return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    };

    const getGreeting = () => {
      const h = new Date().getHours();
      if (h < 12) return 'Good Morning';
      if (h < 17) return 'Good Afternoon';
      return 'Good Evening';
    };

    setGreeting(getGreeting());

    let storedUsername = localStorage.getItem('username');

    if (!storedUsername) {
      const input = prompt('Enter your name');
      storedUsername = input ? formatName(input.trim()) : 'User';
      localStorage.setItem('username', storedUsername);
    }

    setUsername(storedUsername);
  }, []);

  return (
    <div
      id="welcomeScreen"
      onClick={onContinue}
      className="fixed inset-0 bg-cover bg-center flex items-center justify-center p-5 overflow-hidden cursor-pointer select-none before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)]"
      style={{
        backgroundImage: `url('https://www.pngmagic.com/image_small/red-abstract-background-hd-images-for-designs_MYT.webp')`,
      }}
    >
      {}
      <div className="bg-white/12 backdrop-blur-[14px] rounded-[22px] p-9 sm:p-11 md:p-14 shadow-[0_25px_50px_rgba(0,0,0,0.4)] max-w-[420px] sm:max-w-[520px] md:max-w-[640px] lg:max-w-[720px] w-full text-center color-white text-white animate-[slideUp_0.8s_ease]">
        {}
        <img
          className="w-[100px] md:w-[120px] mb-2.5 mx-auto"
          src="https://img.freepik.com/premium-vector/health-care-medical-logo-vector-design_990473-2569.jpg?w=360"
          alt="logo"
        />

        {}
        <h1
          id="welcomeMessage"
          className="text-[30px] sm:text-[34px] md:text-[38px] my-1.5 font-bold leading-tight"
        >
          {greeting}, {username}
        </h1>

        <h2 className="text-[26px] sm:text-[30px] md:text-[34px] my-1.5 font-medium">
          Welcome To Medicine Finder
        </h2>

        <p className="text-[15px] sm:text-[16px] md:text-[17px] opacity-85 mb-4.5">
          Your health, our priority
        </p>

        {}
        <Link
          to="/home"
          className="text-[14px] md:text-[15px] tracking-[0.5px] opacity-75 animate-[blink_1.5s_infinite] hover:scale-[1.04] hover:text-[17px] transition-all duration-500 block"
        >
          Tap anywhere to{' '}
          <span className="text-blue-400 font-semibold">continue</span> 👆
        </Link>

        {}
        <div className="mt-3.5 text-[11px] opacity-70">
          Information only • Not medical advice
        </div>
      </div>
    </div>
  );
}
