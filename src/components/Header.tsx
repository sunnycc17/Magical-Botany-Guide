import React from "react";

const Header: React.FC = () => {
  return (
    <header className="w-full p-4 sm:p-6 bg-black/50 backdrop-blur-md text-gray-300 shadow-md fixed top-0 z-50 flex flex-col sm:flex-row items-center sm:justify-between gap-4">
      {/* Site title */}
      <h1 className="text-2xl sm:text-3xl font-bold cinzel-regular text-center sm:text-left">
        Magical Botany Guide
      </h1>

      {/* Search bar */}
      <form className="w-full sm:w-1/3">
        <input
          type="text"
          placeholder="Search plants..."
          className="w-full px-4 py-2 rounded-md bg-black/30 backdrop-blur-sm border border-[#d4f1fe] placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-[#a6d9ee] transition cormorant"
        />
      </form>
    </header>
  );
};

export default Header;
