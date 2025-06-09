import React, { useState } from 'react';
import { ArrowLeft, Search } from 'lucide-react';

const AddMemberPage = ({ onBack, groupData, onGroupCreated }) => {
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const contacts = [
    {
      id: 'you',
      name: 'You',
      status: 'Busy',
      avatar: 'Y',
      color: 'bg-gray-300',
      section: 'recently'
    },
    {
      id: 'bella1',
      name: 'Bella Angeline Chong Puteri',
      status: 'At the movies',
      avatar: 'B',
      color: 'bg-blue-400',
      section: 'recently'
    },
    {
      id: 'arini1',
      name: 'Arini Nur Azizah',
      status: '',
      avatar: 'A',
      color: 'bg-yellow-400',
      section: 'recently'
    },
    {
      id: 'anindya',
      name: 'Anindya Diany Putri',
      status: 'Busy',
      avatar: 'A',
      color: 'bg-pink-400',
      section: 'A'
    },
    {
      id: 'arini2',
      name: 'Arini Nur Azizah',
      status: '',
      avatar: 'A',
      color: 'bg-yellow-400',
      section: 'A'
    },
    {
      id: 'bella2',
      name: 'Bella Angeline Chong Puteri',
      status: 'Busy',
      avatar: 'B',
      color: 'bg-blue-400',
      section: 'B'
    },
    {
      id: 'cameron',
      name: 'Cameron Dallas',
      status: '',
      avatar: 'C',
      color: 'bg-gray-300',
      section: 'C'
    }
  ];

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const groupedContacts = filteredContacts.reduce((groups, contact) => {
    if (contact.section === 'recently') {
      if (!groups.recently) groups.recently = [];
      groups.recently.push(contact);
    } else {
      const letter = contact.section;
      if (!groups[letter]) groups[letter] = [];
      groups[letter].push(contact);
    }
    return groups;
  }, {});

  const toggleMember = (contactId) => {
    setSelectedMembers(prev => 
      prev.includes(contactId) 
        ? prev.filter(id => id !== contactId)
        : [...prev, contactId]
    );
  };

  const handleMakeGroup = () => {
    const selectedContacts = contacts.filter(contact => 
      selectedMembers.includes(contact.id)
    );
    
    const newGroup = {
      id: Date.now(), // Simple ID generation
      name: groupData.groupName,
      preview: "Group created",
      avatar: groupData.groupName.split(' ').map(word => word[0]).join('').substring(0, 2).toUpperCase(),
      unread: 0,
      hasUnread: false,
      members: selectedContacts
    };
    
    // Call the callback to add the group and return to home
    onGroupCreated(newGroup);
  };

  const ContactItem = ({ contact }) => {
    const isSelected = selectedMembers.includes(contact.id);
    
    return (
      <div 
        className="flex items-center px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors"
        onClick={() => toggleMember(contact.id)}
      >
        <div className="relative mr-3">
          <div className={`w-10 h-10 ${contact.color} rounded-full flex items-center justify-center`}>
            <span className="text-white font-medium text-sm">{contact.avatar}</span>
          </div>
          {isSelected && (
            <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: '#013880' }}>
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
            </div>
          )}
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="font-medium text-gray-900 text-sm truncate">
            {contact.name}
          </div>
          {contact.status && (
            <div className="text-gray-500 text-xs truncate">
              {contact.status}
            </div>
          )}
        </div>
      </div>
    );
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
        <h1 className="text-lg font-semibold text-gray-900">Recently Contacted</h1>
        <Search className="w-5 h-5" style={{ color: '#013880' }} />
      </div>

      {/* Search Bar */}
      <div className="px-4 py-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search contacts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:bg-white"
            style={{ focusRingColor: '#013880' }}
          />
        </div>
      </div>

      {/* Contacts List - Scrollable */}
      <div className="flex-1 overflow-y-auto">
        {/* Recently Contacted Section */}
        {groupedContacts.recently && (
          <div>
            {groupedContacts.recently.map((contact) => (
              <ContactItem key={contact.id} contact={contact} />
            ))}
          </div>
        )}

        {/* Alphabetical Sections */}
        {Object.keys(groupedContacts)
          .filter(key => key !== 'recently')
          .sort()
          .map((letter) => (
            <div key={letter}>
              <div className="px-4 py-2 bg-gray-50">
                <h3 className="text-sm font-semibold text-gray-700">{letter}</h3>
              </div>
              {groupedContacts[letter].map((contact) => (
                <ContactItem key={contact.id} contact={contact} />
              ))}
            </div>
          ))}
      </div>

      {/* Make Group Button */}
      <div className="px-4 pb-6 pt-4 border-t border-gray-100">
        <button
          onClick={handleMakeGroup}
          disabled={selectedMembers.length === 0}
          className={`w-full py-2 rounded-full font-medium text-base transition-colors ${
            selectedMembers.length > 0
              ? 'text-white hover:opacity-90'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
          style={{ backgroundColor: selectedMembers.length > 0 ? '#013880' : undefined }}
        >
          Make Group
        </button>
      </div>

      {/* Home Indicator */}
      <div className="flex justify-center pb-2">
        <div className="w-32 h-1 bg-black rounded-full"></div>
      </div>
    </div>
  );
};

export default AddMemberPage;