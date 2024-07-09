// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className=" text-white p-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Pamptry. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
