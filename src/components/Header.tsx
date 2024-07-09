import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="backdrop-blur-md bg-black/10 fixed top-0 left-0 right-0 z-10">
      <div className="max-w-screen-lg mx-auto flex items-center justify-between h-16 px-4">
        <div className="text-blue-500 font-semibold text-lg"></div>
        <div className="text-white font-semibold text-lg">Pamptry</div>
        <div className="text-blue-500 font-semibold text-lg"></div>
      </div>
    </header>
  );
};

export default Header;
