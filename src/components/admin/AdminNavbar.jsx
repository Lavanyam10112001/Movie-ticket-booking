import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';

const AdminNavbar = () => {
  return (
    <div className="flex items-center justify-between px-6 md:px-10 h-16 border-b border-gray-300/30 bg-white">
      {/* Logo */}
      <Link to="/">
        <img src={assets.logo} alt="logo" className="w-36 h-auto" />
      </Link>

      {/* Optional Right Side (Admin label or avatar) */}
      <div className="text-sm font-medium text-gray-500">
        Admin Panel
      </div>
    </div>
  );
};

export default AdminNavbar;
