import React, { useState, useEffect, useRef } from 'react';
import { Search, Settings, Plus, User, Send } from 'lucide-react';
import GroupChatPage from './gc.js'; // Import the external component
import DirectMessagePage from './dm.js'; // Import DM component
import MakeGroupChatPage from './makegc.js'; // Import Make Group Chat component

const MessagingApp = () => {
  const [activeTab, setActiveTab] = useState('groups');
  const [selectedGroupId, setSelectedGroupId] = useState(null);
  const [currentPage, setCurrentPage] = useState('chat');
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [selectedContact, setSelectedContact] = useState(null);
  const [showMakeGroup, setShowMakeGroup] = useState(false);
  const [groupsData, setGroupsData] = useState([
    {
      id: 1,
      name: "Machine Learning (1)",
      preview: "Oniel: Good afternoon! In the report struc...",
      avatar: "ML",
      unread: 1,
      hasUnread: true
    },
    {
      id: 2,
      name: "Software Design (1)",
      preview: "Brendan: For the Final Project you don't need to...",
      avatar: "SD",
      unread: 0,
      hasUnread: false
    },
    {
      id: 3,
      name: "Database Management (1)",
      preview: "Thifa: Starting next week, there won't be...",
      avatar: "DB",
      unread: 1,
      hasUnread: true
    },
    {
      id: 4,
      name: "Network Programming (1)",
      preview: "Mr. Bagus: Prepare your group for today's challe...",
      avatar: "NP",
      unread: 0,
      hasUnread: false
    },
    {
      id: 5,
      name: "Probability and Statistics (1)",
      preview: "Zikri: I'm not sure, I'll ask Pak Hilmi first...",
      avatar: "PS",
      unread: 1,
      hasUnread: true
    },
    {
      id: 6,
      name: "Automata (1)",
      preview: "Anais: Thanks. Do you know if it will be possible...",
      avatar: "AT",
      unread: 0,
      hasUnread: false
    },
    {
      id: 7,
      name: "Design & Analysis of Algorithms (1)",
      preview: "Mr. Irfan: 2025-06-05 (ONLINE), Lecture #14: Intr...",
      avatar: "DA",
      unread: 0,
      hasUnread: false
    },
    {
      id: 8,
      name: "English (506)",
      preview: "Mrs. Umi: Today class will be held offline, okey?",
      avatar: "EN",
      unread: 0,
      hasUnread: false
    }
  ]);

  const directMessagesData = [
    {
      id: 1,
      name: "Anindya Diany Putri",
      preview: "Oniel: Good afternoon! In the report struc...",
      avatar: "AD",
      unread: 1,
      hasUnread: true
    },
    {
      id: 2,
      name: "Nathaniel Christine Martauli Simanullang",
      preview: "Brendan: For the Final Project you don't need to...",
      avatar: "NC",
      unread: 0,
      hasUnread: false
    },
    {
      id: 3,
      name: "Muhammad Rizqy Hidayat",
      preview: "Thifa: Starting next week, there won't be...",
      avatar: "MR",
      unread: 1,
      hasUnread: true
    },
    {
      id: 4,
      name: "Muhammad Hanif Fakhriansyah",
      preview: "Mr. Bagus: Prepare your group for today's challe...",
      avatar: "MH",
      unread: 0,
      hasUnread: false
    },
    {
      id: 5,
      name: "Reino Yuris Kusumanegara",
      preview: "Zikri: I'm not sure, I'll ask Pak Hilmi first...",
      avatar: "RY",
      unread: 1,
      hasUnread: true
    },
    {
      id: 6,
      name: "Arini Nur Azizah",
      preview: "Anais: Thanks. Do you know if it will be possible...",
      avatar: "AN",
      unread: 0,
      hasUnread: false
    },
    {
      id: 7,
      name: "Bella Angeline C. P.",
      preview: "Mr. Irfan: 2025-06-05 (ONLINE), Lecture #14: Intr...",
      avatar: "BA",
      unread: 0,
      hasUnread: false
    },
    {
      id: 8,
      name: "Khairunnisa Rahmahdani Danang",
      preview: "Mrs. Umi: Today class will be held offline, okey?",
      avatar: "KR",
      unread: 0,
      hasUnread: false
    }
  ];

  const currentData = activeTab === 'groups' ? groupsData : directMessagesData;

  const handleGroupCreated = (newGroup) => {
    setGroupsData(prev => [newGroup, ...prev]); // Add new group at the top
    setShowMakeGroup(false); // Return to home
    setActiveTab('groups'); // Switch to groups tab
  };

  const handleGroupDeleted = (groupId) => {
    setGroupsData(prev => prev.filter(group => group.id !== groupId));
  };

  const SettingsPage = () => {
    const [userInfo, setUserInfo] = useState({
      name: "Nathaniel Christine Martauli Simanullang",
      about: "Busy",
      email: "5025231010@student.its.ac.id"
    });

    const handleLogout = () => {
      if (window.confirm('Are you sure you want to log out?')) {
        console.log('User logged out');
      }
    };

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
        <div className="flex justify-between items-center px-4 py-4">
          <div className="w-6"></div>
          <h1 className="text-xl font-semibold text-gray-900">Settings</h1>
          <div className="w-6"></div>
        </div>

        {/* Profile Section - Scrollable */}
        <div className="flex-1 overflow-y-auto px-4 pb-4">
          {/* Avatar */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <div className="absolute bottom-0 right-0 w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#013880' }}>
                <Plus className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>

          {/* User Info Form */}
          <div className="space-y-6">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">Name</label>
              <div className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3">
                <input
                  type="text"
                  value={userInfo.name}
                  onChange={(e) => setUserInfo({...userInfo, name: e.target.value})}
                  className="w-full bg-transparent text-gray-900 text-sm focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">About</label>
              <div className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3">
                <input
                  type="text"
                  value={userInfo.about}
                  onChange={(e) => setUserInfo({...userInfo, about: e.target.value})}
                  className="w-full bg-transparent text-gray-900 text-sm focus:outline-none"
                  placeholder="Enter your status"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">E-Mail</label>
              <div className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3">
                <input
                  type="email"
                  value={userInfo.email}
                  onChange={(e) => setUserInfo({...userInfo, email: e.target.value})}
                  className="w-full bg-transparent text-gray-900 text-sm focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Logout Button */}
          <div className="mt-12">
            <button
              onClick={handleLogout}
              className="w-full text-white py-2 rounded-full font-medium text-base hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all"
              style={{ backgroundColor: '#013880', focusRingColor: '#013880' }}
            >
              Log Out
            </button>
          </div>
        </div>

        {/* Bottom Navigation - Fixed */}
        <div className="flex justify-around items-center py-3 px-4 border-t border-gray-200 bg-white">
          <button
            onClick={() => { setActiveTab('groups'); setCurrentPage('chat'); }}
            className="flex flex-col items-center space-y-1 text-gray-400"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span className="text-xs font-medium">Groups</span>
          </button>
          <button
            onClick={() => { setActiveTab('direct'); setCurrentPage('chat'); }}
            className="flex flex-col items-center space-y-1 text-gray-400"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-xs font-medium">Direct Messages</span>
          </button>
          <button className="flex flex-col items-center space-y-1" style={{ color: '#013880' }}>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 01-.517.608 7.45 7.45 0 00-.478.198.798.798 0 01-.796-.064l-.453-.324a1.875 1.875 0 00-2.416.2l-.243.243a1.875 1.875 0 00-.2 2.416l.324.453a.798.798 0 01.064.796 7.448 7.448 0 00-.198.478.798.798 0 01-.608.517l-.549.091A1.875 1.875 0 002.25 11.828v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 01-.064.796l-.324.453a1.875 1.875 0 00.2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 01.796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.091.549a1.875 1.875 0 001.85 1.567h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 01.517-.608 7.52 7.52 0 00.478-.198.798.798 0 01.796.064l.453.324a1.875 1.875 0 002.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 01-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.549-.091A1.875 1.875 0 0021.75 12.172v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 01-.608-.517 7.507 7.507 0 00-.198-.478.798.798 0 01.064-.796l.324-.453a1.875 1.875 0 00-.2-2.416l-.243-.243a1.875 1.875 0 00-2.416-.2l-.453.324a.798.798 0 01-.796.064 7.462 7.462 0 00-.478-.198.798.798 0 01-.517-.608l-.091-.549A1.875 1.875 0 0012.172 2.25h-.344zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" clipRule="evenodd" />
            </svg>
            <span className="text-xs font-medium">Settings</span>
          </button>
        </div>
      </div>
    );
  };

  const ConversationItem = ({ item }) => {
    const [showDeleteAction, setShowDeleteAction] = useState(false);
    let pressTimer = null;

    const handleItemClick = () => {
      if (activeTab === 'groups') {
        // Only allow Machine Learning group to be clickable
        if (item.name === "Machine Learning (1)") {
          setSelectedGroup(item);
        }
      } else {
        // For direct messages, only allow Arini Nur Azizah to be clickable
        if (item.name === "Arini Nur Azizah") {
          setSelectedContact(item);
        }
      }
    };

    const handleRightClick = (e) => {
      e.preventDefault();
      setShowDeleteAction(true);
    };

    const handleMouseDown = (e) => {
      pressTimer = setTimeout(() => {
        setShowDeleteAction(true);
      }, 500);
    };

    const handleMouseUp = () => {
      if (pressTimer) {
        clearTimeout(pressTimer);
      }
    };

    const handleTouchStart = (e) => {
      pressTimer = setTimeout(() => {
        setShowDeleteAction(true);
      }, 500);
    };

    const handleTouchEnd = () => {
      if (pressTimer) {
        clearTimeout(pressTimer);
      }
    };

    const handleDelete = () => {
      console.log('Delete item:', item.name);
      setShowDeleteAction(false);
    };

    useEffect(() => {
      const handleClickOutside = () => {
        setShowDeleteAction(false);
      };
      
      if (showDeleteAction) {
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
      }
    }, [showDeleteAction]);

    return (
      <div 
        className="flex items-center px-4 py-3 hover:bg-gray-50 active:bg-gray-100 transition-colors relative overflow-hidden cursor-pointer"
        onClick={handleItemClick}
        onContextMenu={handleRightClick}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative mr-3">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-600 font-medium text-sm">{item.avatar}</span>
          </div>
        </div>
        
        <div className="flex-1 min-w-0 relative">
          <div className="font-medium text-gray-900 text-sm mb-1 truncate">
            {item.name}
          </div>
          <div className="text-gray-500 text-xs truncate">
            {item.preview}
          </div>
          
          {item.hasUnread && (
            <div className={`absolute top-0 w-5 h-5 rounded-full flex items-center justify-center transition-all duration-300 ${
              showDeleteAction ? 'right-20' : 'right-0'
            }`} style={{ backgroundColor: '#013880' }}>
              <span className="text-white text-xs font-medium">{item.unread}</span>
            </div>
          )}
        </div>

        <div className={`absolute right-0 top-0 bottom-0 bg-white flex items-center justify-center transition-all duration-300 ${
          showDeleteAction ? 'w-20' : 'w-0'
        } overflow-hidden`}>
          <button
            onClick={handleDelete}
            className="flex flex-col items-center justify-center h-full w-full"
            style={{ color: '#013880' }}
          >
            <svg className="w-5 h-5 mb-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 3h6v2H9V3z"/>
              <path d="M4 6h16v2H4V6z"/>
              <path d="M6 8h12v11a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8z"/>
            </svg>
            <span className="text-xs font-medium">Delete</span>
          </button>
        </div>
      </div>
    );
  };

  if (showMakeGroup) {
    return (
      <MakeGroupChatPage 
        onBack={() => setShowMakeGroup(false)}
        onGroupCreated={handleGroupCreated}
      />
    );
  }

  if (currentPage === 'settings') {
    return <SettingsPage />;
  }

  if (selectedGroup) {
    return (
      <GroupChatPage 
        groupName={selectedGroup.name}
        onBack={() => setSelectedGroup(null)}
        onDeleteGroup={() => {
          handleGroupDeleted(selectedGroup.id);
          setSelectedGroup(null);
        }}
      />
    );
  }

  if (selectedContact) {
    return (
      <DirectMessagePage 
        contactName={selectedContact.name}
        onBack={() => setSelectedContact(null)}
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
      <div className="flex justify-between items-center px-4 py-4">
        <div className="w-6"></div>
        <h1 className="text-xl font-semibold text-gray-900">
          {activeTab === 'groups' ? 'Groups' : 'Direct Messages'}
        </h1>
        <button 
          onClick={() => setShowMakeGroup(true)}
          className="p-1"
        >
          <svg className="w-5 h-5" fill="none" stroke="#013880" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        </button>
      </div>

      {/* Search Bar */}
      <div className="px-4 mb-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
          />
        </div>
      </div>

      {/* Conversation List - Scrollable */}
      <div className="flex-1 overflow-y-auto">
        {currentData.map((item) => (
          <ConversationItem key={item.id} item={item} />
        ))}
      </div>

      {/* Bottom Navigation - Fixed */}
      <div className="flex justify-around items-center py-3 px-4 border-t border-gray-200 bg-white">
        <button
          onClick={() => setActiveTab('groups')}
          className={`flex flex-col items-center space-y-1`}
          style={{ color: activeTab === 'groups' ? '#013880' : '#9CA3AF' }}
        >
          <svg className="w-5 h-5" fill={activeTab === 'groups' ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span className="text-xs font-medium">Groups</span>
        </button>
        <button
          onClick={() => setActiveTab('direct')}
          className={`flex flex-col items-center space-y-1`}
          style={{ color: activeTab === 'direct' ? '#013880' : '#9CA3AF' }}
        >
          <svg className="w-5 h-5" fill={activeTab === 'direct' ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span className="text-xs font-medium">Direct Messages</span>
        </button>
        <button
          onClick={() => setCurrentPage('settings')}
          className={`flex flex-col items-center space-y-1`}
          style={{ color: currentPage === 'settings' ? '#013880' : '#9CA3AF' }}
        >
          <svg className="w-5 h-5" fill={currentPage === 'settings' ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="text-xs font-medium">Settings</span>
        </button>
      </div>
    </div>
  );
};

export default MessagingApp;