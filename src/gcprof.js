import React, { useState } from 'react';
import { ArrowLeft, Plus, Search, Trash2 } from 'lucide-react';

const GroupInfoPage = ({ onBack, groupName = "Machine Learning (1)", onDeleteGroup }) => {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: "You",
      status: "Busy",
      avatar: "Y",
      color: "bg-gray-300",
      isOwn: true
    },
    {
      id: 2,
      name: "Arini Nur Azizah",
      status: "",
      avatar: "A",
      color: "bg-blue-400",
      isOwn: false
    },
    {
      id: 3,
      name: "Khar Naila Faurizah",
      status: "",
      avatar: "K",
      color: "bg-blue-400",
      isOwn: false
    },
    {
      id: 4,
      name: "Bella Probanten Werdler",
      status: "Hello!",
      avatar: "B",
      color: "bg-blue-400",
      isOwn: false
    }
  ]);

  const handleRemoveMember = (memberId) => {
    if (window.confirm('Remove this member from the group?')) {
      setMembers(members.filter(member => member.id !== memberId));
    }
  };

  const handleDeleteGroup = () => {
    if (window.confirm('Are you sure you want to delete this group?')) {
      onDeleteGroup();
    }
  };

  // Generate group avatar from group name
  const groupAvatar = groupName.split(' ').map(word => word[0]).join('').substring(0, 2).toUpperCase();

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
        <h1 className="text-lg font-semibold text-gray-900">View Group</h1>
        <div className="w-6 h-6"></div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Group Avatar and Name */}
        <div className="flex flex-col items-center py-8">
          <div className="w-24 h-24 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#e6f3ff' }}>
            <span className="text-2xl font-bold" style={{ color: '#013880' }}>{groupAvatar}</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <h2 className="text-lg font-semibold text-gray-900">{groupName}</h2>
            <svg className="w-5 h-5" fill="none" stroke="#013880" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </div>
        </div>

        {/* Members Section */}
        <div className="px-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">{members.length} Members</h3>
            <Search className="w-5 h-5" style={{ color: '#013880' }} />
          </div>

          {/* Members Container Box */}
          <div className="bg-gray-50 rounded-2xl p-4 mb-6">
            {/* Add Member Button */}
            <div className="flex items-center px-0 py-3 mb-2">
              <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3" style={{ backgroundColor: '#013880' }}>
                <Plus className="w-5 h-5 text-white" />
              </div>
              <span className="text-gray-900 font-medium">Add Member</span>
            </div>

            {/* Members List */}
            <div className="space-y-0">
              {members.map((member, index) => (
                <div key={member.id} className={`flex items-center py-3 ${index < members.length - 1 ? 'border-b border-gray-200' : ''}`}>
                  <div className={`w-10 h-10 ${member.color} rounded-full flex items-center justify-center mr-3`}>
                    <span className="text-white font-medium text-sm">{member.avatar}</span>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-gray-900 text-sm truncate">
                      {member.name}
                    </div>
                    {member.status && (
                      <div className="text-gray-500 text-xs truncate">
                        {member.status}
                      </div>
                    )}
                  </div>

                  {!member.isOwn && (
                    <button
                      onClick={() => handleRemoveMember(member.id)}
                      className="ml-2 w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <Trash2 className="w-4 h-4 text-gray-400" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Delete Group Section */}
          <div className="mb-8">
            <button
              onClick={handleDeleteGroup}
              className="w-full bg-red-500 text-white py-2 rounded-2xl font-medium text-base hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors"
            >
              Delete Group
            </button>
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

export default GroupInfoPage;