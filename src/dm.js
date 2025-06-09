import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, User, Plus, Send, Paperclip, Image, FileText, Phone, Video } from 'lucide-react';
import ProfilePage from './dmprof.js'; // Import the Profile component

const DirectMessagePage = ({ contactName = "Arini Nur Azizah", onBack }) => {
  const [message, setMessage] = useState('');
  const [showFileMenu, setShowFileMenu] = useState(false);
  const [showMessageMenu, setShowMessageMenu] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [replyingTo, setReplyingTo] = useState(null);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [pinnedMessages, setPinnedMessages] = useState([]);
  const [showProfile, setShowProfile] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "Arini Nur Azizah",
      content: "Lorem ipsum",
      timestamp: "9:41",
      isOwn: false,
      type: "text"
    },
    {
      id: 2,
      sender: "Arini Nur Azizah",
      content: "Lorem ipsum dolor sit amet",
      timestamp: "9:42",
      isOwn: false,
      type: "text"
    },
    {
      id: 3,
      sender: "You",
      content: "Lorem ipsum",
      timestamp: "9:43",
      isOwn: true,
      type: "text"
    },
    {
      id: 4,
      sender: "Arini Nur Azizah",
      content: "Lorem ipsum",
      timestamp: "9:44",
      isOwn: false,
      type: "text"
    },
    {
      id: 5,
      sender: "Arini Nur Azizah",
      content: "https://docs.google.com/document/d/1bQnqLDbopfugVtp5Nmh04wb3ExrFH803rOrcPEvqy2wI/edit?usp=sharing",
      timestamp: "9:45",
      isOwn: false,
      type: "text"
    },
    {
      id: 6,
      sender: "You",
      content: "Lorem ipsum",
      timestamp: "9:46",
      isOwn: true,
      type: "text"
    },
    {
      id: 7,
      sender: "You",
      content: "Lorem ipsum dolor sit amet",
      timestamp: "9:47",
      isOwn: true,
      type: "text"
    },
    {
      id: 8,
      sender: "You",
      content: "Qui nulla obcaecati sed mollitia quidem eos quas iure nam haru nipsum.",
      timestamp: "9:48",
      isOwn: true,
      type: "text"
    }
  ]);

  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);
  const longPressTimer = useRef(null);

  // Contact info for the profile
  const contactInfo = {
    name: contactName,
    about: "Hello!",
    email: "5025230701@student.its.ac.id"
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setShowMessageMenu(false);
    };
    
    if (showMessageMenu) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [showMessageMenu]);

  // URL detection regex
  const urlRegex = /(https?:\/\/[^\s]+)/g;

  const formatMessageContent = (content) => {
    const parts = content.split(urlRegex);
    return parts.map((part, index) => {
      if (urlRegex.test(part)) {
        return (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-75 break-all"
            style={{ color: '#013880' }}
            onClick={(e) => e.stopPropagation()}
          >
            {part}
          </a>
        );
      }
      return part;
    });
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        sender: "You",
        content: message.trim(),
        timestamp: new Date().toLocaleTimeString('en-US', { 
          hour: '2-digit', 
          minute: '2-digit',
          hour12: false 
        }),
        isOwn: true,
        type: "text",
        replyTo: replyingTo
      };
      setMessages([...messages, newMessage]);
      setMessage('');
      setReplyingTo(null);
    }
  };

  const handleLongPress = (msg, event) => {
    event.preventDefault();
    const rect = event.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.bottom + 10;
    
    setMenuPosition({ x, y });
    setSelectedMessage(msg);
    setShowMessageMenu(true);
  };

  const handleMouseDown = (msg, event) => {
    longPressTimer.current = setTimeout(() => {
      const rect = event.currentTarget.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.bottom + 10;
      
      setMenuPosition({ x, y });
      setSelectedMessage(msg);
      setShowMessageMenu(true);
    }, 500);
  };

  const handleMouseUp = () => {
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
    }
  };

  const handleReply = () => {
    setReplyingTo(selectedMessage);
    setShowMessageMenu(false);
  };

  const handlePin = () => {
    const isPinned = pinnedMessages.some(pm => pm.id === selectedMessage.id);
    
    if (isPinned) {
      // Unpin the message
      setPinnedMessages(pinnedMessages.filter(pm => pm.id !== selectedMessage.id));
    } else {
      // Pin the message
      setPinnedMessages([...pinnedMessages, selectedMessage]);
    }
    setShowMessageMenu(false);
  };

  const handleDelete = () => {
    if (window.confirm('Delete this message?')) {
      setMessages(messages.filter(msg => msg.id !== selectedMessage.id));
    }
    setShowMessageMenu(false);
  };

  const cancelReply = () => {
    setReplyingTo(null);
  };

  const handleFileUpload = (fileType) => {
    const fileNames = {
      image: ['selfie.jpg', 'sunset.png', 'group_photo.jpeg'],
      document: ['resume.pdf', 'notes.docx', 'schedule.xlsx'],
      general: ['music.mp3', 'video.mp4', 'backup.zip']
    };
    
    const randomFile = fileNames[fileType][Math.floor(Math.random() * fileNames[fileType].length)];
    
    const newMessage = {
      id: messages.length + 1,
      sender: "You",
      content: randomFile,
      timestamp: new Date().toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false 
      }),
      isOwn: true,
      type: fileType
    };
    
    setMessages([...messages, newMessage]);
    setShowFileMenu(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const renderFileMessage = (msg) => {
    const isImage = msg.type === 'image';
    const isDocument = msg.type === 'document';
    
    return (
      <div className={`flex items-center space-x-2 ${isImage ? 'flex-col space-x-0 space-y-2' : ''}`}>
        {isImage ? (
          <>
            <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
              <Image className="w-8 h-8 text-gray-500" />
            </div>
            <span className="text-xs text-gray-600">{msg.content}</span>
          </>
        ) : (
          <>
            <div className="w-8 h-8 rounded flex items-center justify-center" style={{ backgroundColor: '#e6f3ff' }}>
              {isDocument ? (
                <FileText className="w-5 h-5" style={{ color: '#013880' }} />
              ) : (
                <Paperclip className="w-5 h-5" style={{ color: '#013880' }} />
              )}
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium">{msg.content}</div>
              <div className="text-xs text-gray-500">Tap to download</div>
            </div>
          </>
        )}
      </div>
    );
  };

  const renderMessage = (msg, index) => {
    const isConsecutive = index > 0 && messages[index - 1].sender === msg.sender;
    const repliedMessage = msg.replyTo ? messages.find(m => m.id === msg.replyTo.id) : null;
    const isPinned = pinnedMessages.some(pm => pm.id === msg.id);
    
    if (msg.isOwn) {
      return (
        <div key={msg.id} className="flex justify-end mb-2">
          <div className="max-w-xs lg:max-w-sm">
            {!isConsecutive && (
              <div className="text-xs text-gray-500 mb-1 text-right">You</div>
            )}
            <div className="relative">
              <div 
                className={`text-white px-4 py-2 rounded-2xl rounded-br-md cursor-pointer break-words ${
                  isPinned ? 'ring-2 ring-yellow-400' : ''
                }`}
                style={{ backgroundColor: '#013880' }}
                onContextMenu={(e) => handleLongPress(msg, e)}
                onMouseDown={(e) => handleMouseDown(msg, e)}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={(e) => handleMouseDown(msg, e)}
                onTouchEnd={handleMouseUp}
              >
                {isPinned && (
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-yellow-800" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 12V4a1 1 0 00-1-1H9a1 1 0 00-1 1v8a1 1 0 00.293.707L10 14.414V17a1 1 0 001 1h2a1 1 0 001-1v-2.586l1.707-1.707A1 1 0 0016 12z"/>
                    </svg>
                  </div>
                )}
                {repliedMessage && (
                  <div className="bg-white bg-opacity-20 px-2 py-1 rounded mb-2 text-xs border-l-2 border-white border-opacity-50">
                    <div className="font-medium opacity-90">Replying to {repliedMessage.sender}</div>
                    <div className="truncate opacity-75">{repliedMessage.content}</div>
                  </div>
                )}
                {msg.type === 'text' ? (
                  <p className="text-sm">{formatMessageContent(msg.content)}</p>
                ) : (
                  renderFileMessage(msg)
                )}
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div key={msg.id} className="flex justify-start mb-2">
          <div className="max-w-xs lg:max-w-sm">
            {!isConsecutive && (
              <div className="text-xs mb-1 font-medium" style={{ color: '#013880' }}>{msg.sender}</div>
            )}
            <div className="relative">
              <div 
                className={`bg-gray-100 text-gray-900 px-4 py-2 rounded-2xl rounded-bl-md cursor-pointer break-words ${
                  isPinned ? 'ring-2 ring-yellow-400' : ''
                }`}
                onContextMenu={(e) => handleLongPress(msg, e)}
                onMouseDown={(e) => handleMouseDown(msg, e)}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={(e) => handleMouseDown(msg, e)}
                onTouchEnd={handleMouseUp}
              >
                {isPinned && (
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-yellow-800" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 12V4a1 1 0 00-1-1H9a1 1 0 00-1 1v8a1 1 0 00.293.707L10 14.414V17a1 1 0 001 1h2a1 1 0 001-1v-2.586l1.707-1.707A1 1 0 0016 12z"/>
                    </svg>
                  </div>
                )}
                {repliedMessage && (
                  <div className="bg-gray-200 px-2 py-1 rounded mb-2 text-xs" style={{ borderLeft: '4px solid #013880' }}>
                    <div className="font-medium" style={{ color: '#013880' }}>Replying to {repliedMessage.sender}</div>
                    <div className="truncate text-gray-600">{repliedMessage.content}</div>
                  </div>
                )}
                {msg.type === 'text' ? (
                  <p className="text-sm">{formatMessageContent(msg.content)}</p>
                ) : (
                  renderFileMessage(msg)
                )}
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  // Show profile page if user clicked on user icon
  if (showProfile) {
    return (
      <ProfilePage 
        onBack={() => setShowProfile(false)}
        contactName={contactName}
        contactInfo={contactInfo}
      />
    );
  }

  return (
    <>
      <style>
        {`
          @keyframes slide-up {
            from {
              transform: translateY(100%);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
          .animate-slide-up {
            animation: slide-up 0.3s ease-out forwards;
          }
        `}
      </style>
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

        {/* Chat Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
          <button 
            onClick={onBack}
            className="p-1"
          >
            <span className="text-2xl font-medium" style={{ color: '#013880' }}>&lt;</span>
          </button>
          <h1 className="text-lg font-semibold text-gray-900 flex-1 text-center">{contactName}</h1>
          <button 
            onClick={() => setShowProfile(true)}
            className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
          >
            <User className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Pinned Messages Section */}
        {pinnedMessages.length > 0 && (
          <div style={{ backgroundColor: '#e6f3ff' }} className="border-b border-gray-200">
            {pinnedMessages.map((pinnedMsg, index) => (
              <div key={pinnedMsg.id} className="flex items-center px-4 py-2">
                <div className="w-4 h-4 mr-3 flex-shrink-0">
                  <svg className="w-4 h-4" fill="#013880" viewBox="0 0 24 24">
                    <path d="M16 12V4a1 1 0 00-1-1H9a1 1 0 00-1 1v8a1 1 0 00.293.707L10 14.414V17a1 1 0 001 1h2a1 1 0 001-1v-2.586l1.707-1.707A1 1 0 0016 12z"/>
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm truncate" style={{ color: '#013880' }}>
                    {pinnedMsg.content}
                  </div>
                </div>
                <button
                  onClick={() => setPinnedMessages(pinnedMessages.filter(pm => pm.id !== pinnedMsg.id))}
                  className="ml-2 w-6 h-6 flex items-center justify-center rounded-full transition-colors"
                  style={{ backgroundColor: 'rgba(1, 56, 128, 0.1)' }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="#013880" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
          {messages.map((msg, index) => renderMessage(msg, index))}
          <div ref={messagesEndRef} />
        </div>

        {/* File Menu Overlay */}
        {showFileMenu && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end justify-center z-50">
            <div className="bg-white rounded-t-3xl w-full max-w-sm p-6 animate-slide-up">
              <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-6"></div>
              
              <h3 className="text-lg font-semibold mb-4 text-center">Send File</h3>
              
              <div className="space-y-3">
                <button
                  onClick={() => handleFileUpload('image')}
                  className="w-full flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Image className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-gray-900 font-medium">Photos & Videos</span>
                </button>
                
                <button
                  onClick={() => handleFileUpload('document')}
                  className="w-full flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#e6f3ff' }}>
                    <FileText className="w-5 h-5" style={{ color: '#013880' }} />
                  </div>
                  <span className="text-gray-900 font-medium">Documents</span>
                </button>
                
                <button
                  onClick={() => handleFileUpload('general')}
                  className="w-full flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <Paperclip className="w-5 h-5 text-purple-600" />
                  </div>
                  <span className="text-gray-900 font-medium">Other Files</span>
                </button>
              </div>
              
              <button
                onClick={() => setShowFileMenu(false)}
                className="w-full mt-6 py-3 text-gray-500 font-medium"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Message Context Menu */}
        {showMessageMenu && selectedMessage && (
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
            <div 
              className="bg-white rounded-2xl shadow-lg p-1 animate-slide-up"
              style={{
                position: 'absolute',
                left: Math.max(10, Math.min(menuPosition.x - 80, window.innerWidth - 170)),
                top: Math.min(menuPosition.y, window.innerHeight - 180),
                minWidth: '160px'
              }}
            >
              <button
                onClick={handleReply}
                className="w-full flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                  </svg>
                </div>
                <span className="text-gray-800 text-sm font-medium">Reply Message</span>
              </button>
              
              <button
                onClick={handlePin}
                className="w-full flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                </div>
                <span className="text-gray-800 text-sm font-medium">
                  {pinnedMessages.some(pm => pm.id === selectedMessage.id) ? 'Unpin Message' : 'Pin Message'}
                </span>
              </button>
              
              <button
                onClick={handleDelete}
                className="w-full flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </div>
                <span className="text-gray-800 text-sm font-medium">Delete Message</span>
              </button>
            </div>
          </div>
        )}

        {/* Reply Preview */}
        {replyingTo && (
          <div className="px-4 py-3 bg-gray-50 border-t border-gray-200">
            <div className="flex items-start space-x-3">
              <div className="w-1 h-12 rounded-full" style={{ backgroundColor: '#013880' }}></div>
              <div className="flex-1">
                <div className="text-xs font-medium mb-1" style={{ color: '#013880' }}>Replying to {replyingTo.sender}</div>
                <div className="text-sm text-gray-700 line-clamp-2">{replyingTo.content}</div>
              </div>
              <button 
                onClick={cancelReply}
                className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-200 transition-colors"
              >
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* Message Input Area */}
        <div className="flex items-end px-4 py-3 border-t border-gray-100 bg-white">
          <button 
            onClick={() => setShowFileMenu(true)}
            className="mr-3 p-2"
          >
            <Plus className="w-5 h-5" style={{ color: '#013880' }} />
          </button>
          
          <div className="flex-1 flex items-end bg-gray-100 rounded-2xl px-4 py-2">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type a message..."
              className="flex-1 bg-transparent resize-none outline-none text-sm max-h-20 min-h-[1.25rem]"
              rows={1}
              style={{
                height: 'auto',
                overflowY: message.split('\n').length > 3 ? 'scroll' : 'hidden'
              }}
              onInput={(e) => {
                e.target.style.height = 'auto';
                e.target.style.height = Math.min(e.target.scrollHeight, 80) + 'px';
              }}
            />
          </div>

          <button 
            onClick={handleSendMessage}
            disabled={!message.trim()}
            className="ml-3 w-8 h-8 rounded-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ backgroundColor: '#013880' }}
          >
            <Send className="w-4 h-4 text-white" />
          </button>
        </div>

        {/* Home Indicator */}
        <div className="flex justify-center pb-2">
          <div className="w-32 h-1 bg-black rounded-full"></div>
        </div>
      </div>
    </>
  );
};

export default DirectMessagePage;