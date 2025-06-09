import React from 'react';
import { ArrowLeft, User } from 'lucide-react';

const ProfilePage = ({ onBack, contactName = "Arini Nur Azizah", contactInfo }) => {
  // Default contact info if not provided
  const defaultInfo = {
    name: contactName,
    about: "Hello!",
    email: "5025230701@student.its.ac.id"
  };

  const info = contactInfo || defaultInfo;

  return (
    <div className="max-w-sm mx-auto bg-white h-screen flex flex-col">
      {/* Status Bar */}
      <div className="flex justify-between items-center px-4 py-2 bg-white">
        <span className="text-sm font-medium">9:41</span>
        <div className="flex items-center space-x-0.5">
          <svg width="18" height="12" viewBox="0 0 18 12" className="fill-black">
            <rect x="0" y="9" width="2" height="3" rx="0.5"/>
            <rect x="4" y="6" width="2" height="6" rx="0.5"/>
            <rect x="8" y="3" width="2" height="9" rx="0.5"/>
            <rect x="12" y="0" width="2" height="12" rx="0.5"/>
          </svg>
          <svg width="15" height="15" viewBox="0 0 24 24" className="fill-black ml-1">
            <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.07 2.93 1 9z"/>
            <path d="M5 13l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.34 9.34 8.66 9.34 5 13z"/>
            <path d="M9 17l2 2c.55-.55 1.45-.55 2 0l2-2C13.34 15.34 10.66 15.34 9 17z"/>
          </svg>
          <svg width="24" height="12" viewBox="0 0 24 12" className="ml-1">
            <rect x="1" y="2" width="20" height="8" rx="2" ry="2" fill="none" stroke="black" strokeWidth="1"/>
            <rect x="21" y="4" width="2" height="4" rx="1" ry="1" fill="black"/>
            <rect x="2" y="3" width="18" height="6" rx="1" ry="1" fill="black"/>
          </svg>
        </div>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
        <button 
          onClick={onBack}
          className="p-1"
        >
          <span className="text-2xl font-medium" style={{ color: '#013880' }}>&lt;</span>
        </button>
        <h1 className="text-lg font-semibold text-gray-900">Profile</h1>
        <div className="w-6 h-6"></div>
      </div>

      {/* Profile Content */}
      <div className="flex-1 px-4 py-6">
        {/* Avatar Section */}
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
            <User className="w-12 h-12 text-gray-400" />
          </div>
        </div>

        {/* Profile Information */}
        <div className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-3">
              Name
            </label>
            <div className="bg-gray-100 rounded-2xl px-4 py-3">
              <span className="text-gray-900 text-sm">
                {info.name}
              </span>
            </div>
          </div>

          {/* About */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-3">
              About
            </label>
            <div className="bg-gray-100 rounded-2xl px-4 py-3">
              <span className="text-gray-900 text-sm">
                {info.about}
              </span>
            </div>
          </div>

          {/* E-Mail */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-3">
              E-Mail
            </label>
            <div className="bg-gray-100 rounded-2xl px-4 py-3">
              <span className="text-gray-900 text-sm">
                {info.email}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Home Indicator */}
      <div className="flex justify-center pb-2">
        <div className="w-32 h-1 bg-black rounded-full"></div>
      </div>
    </div>
  );
};

export default ProfilePage;