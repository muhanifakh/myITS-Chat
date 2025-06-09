import React, { useState } from 'react';
import { ArrowLeft, User, Plus } from 'lucide-react';
import AddMemberPage from './addmember'; // Import the AddMember component

const MakeGroupChatPage = ({ onBack, onGroupCreated }) => {
  const [groupName, setGroupName] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [showClassDropdown, setShowClassDropdown] = useState(false);
  const [showAddMember, setShowAddMember] = useState(false);

  const classes = [
    'Machine Learning',
    'Software Design',
    'Database Management',
    'Network Programming',
    'Probability and Statistics',
    'Automata',
    'Design & Analysis of Algorithms',
    'English'
  ];

  const handleNext = () => {
    if (groupName.trim() && selectedClass) {
      setShowAddMember(true);
    }
  };

  const isFormValid = groupName.trim() && selectedClass;

  // Show AddMember page if user clicked Next
  if (showAddMember) {
    return (
      <AddMemberPage 
        onBack={() => setShowAddMember(false)}
        groupData={{ groupName, selectedClass }}
        onGroupCreated={onGroupCreated}
      />
    );
  }

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
        <h1 className="text-lg font-semibold text-gray-900">Make Group Chat</h1>
        <div className="w-6 h-6"></div>
      </div>

      {/* Content */}
      <div className="flex-1 px-4 py-6">
        {/* Avatar Section */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
              <User className="w-12 h-12 text-gray-400" />
            </div>
            <div className="absolute bottom-0 right-0 w-8 h-8 rounded-full flex items-center justify-center border-2 border-white" style={{ backgroundColor: '#013880' }}>
              <Plus className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>

        {/* Form Fields */}
        <div className="space-y-6">
          {/* Group Name */}
          <div>
            <label className="block text-gray-900 text-sm font-medium mb-3">
              Group Name
            </label>
            <div className="bg-gray-100 rounded-lg px-4 py-3">
              <input
                type="text"
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
                placeholder="Group Name"
                className="w-full bg-transparent text-gray-900 text-sm focus:outline-none placeholder-gray-500"
              />
            </div>
          </div>

          {/* Class Name */}
          <div className="relative">
            <label className="block text-gray-900 text-sm font-medium mb-3">
              Class Name
            </label>
            <div 
              className="bg-gray-100 rounded-lg px-4 py-3 cursor-pointer"
              onClick={() => setShowClassDropdown(!showClassDropdown)}
            >
              <div className="flex items-center justify-between">
                <span className={`text-sm ${selectedClass ? 'text-gray-900' : 'text-gray-500'}`}>
                  {selectedClass || 'Class Name'}
                </span>
                <svg 
                  className={`w-4 h-4 text-gray-400 transition-transform ${showClassDropdown ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Dropdown */}
            {showClassDropdown && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-48 overflow-y-auto">
                {classes.map((className, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSelectedClass(className);
                      setShowClassDropdown(false);
                    }}
                    className="w-full text-left px-4 py-3 text-sm text-gray-900 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
                  >
                    {className}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Next Button */}
      <div className="px-4 pb-6">
        <button
          onClick={handleNext}
          disabled={!isFormValid}
          className={`w-full py-2 rounded-full font-medium text-base transition-colors ${
            isFormValid
              ? 'text-white hover:opacity-90'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
          style={{ backgroundColor: isFormValid ? '#013880' : undefined }}
        >
          Next
        </button>
      </div>

      {/* Home Indicator */}
      <div className="flex justify-center pb-2">
        <div className="w-32 h-1 bg-black rounded-full"></div>
      </div>
    </div>
  );
};

export default MakeGroupChatPage;