import React from "react";
import { FaUser, FaSignOutAlt } from "react-icons/fa";
import { MdRemoveRedEye } from "react-icons/md";
import { Link } from "react-router";

const UserDropdown = () => {
  return (
    <div className="z-30 absolute top-12 border border-gray-500 right-4 w-56 dark:bg-darkBlue dark:text-white bg-white text-black rounded-xl shadow-lg p-4 space-y-4">
      {/* Profile Header */}
      <div className="flex items-center space-x-3 w-50">
        <div className="relative">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="User"
            className="w-12 h-12 rounded-full object-cover"
          />
          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-white rounded-full"></span>
        </div>
        <div>
          <h4 className="font-semibold text-m">Hello Jerrypothula</h4>
          <p className="text-sm text-gray-300 dark:text-gray-500">Retailer</p>
          <p className="text-sm text-gray-300 dark:text-gray-500">UserId -16</p>
        </div>
      </div>

      <div className="border-t border-gray-700 dark:border-gray-300"></div>

      {/* Actions */}
      <div className="flex flex-col space-y-3">
        <button className="flex items-center space-x-3 hover:text-indigo-400 dark:hover:text-indigo-600 transition">
          <FaUser className="text-lg" />
          <Link to="/profile/view">
            <span className="text-sm font-medium">My Profile</span>
          </Link>
        </button>
        <button className="flex items-center space-x-3 hover:text-red-400 dark:hover:text-red-600 transition">
          <MdRemoveRedEye className="text-lg" />
          <span className="text-sm font-medium">View Commission</span>
        </button>

        <button className="flex items-center space-x-3 hover:text-red-400 dark:hover:text-red-600 transition">
          <FaSignOutAlt className="text-lg" />
          <span className="text-sm font-medium">Log Out</span>
        </button>
      </div>
    </div>
  );
};

export default UserDropdown;
