import React, { useState } from 'react';
import MessagingApp from './Home';

const OnboardingScreen = ({ onContinue }) => {
  return (
    <div className="max-w-sm mx-auto bg-white min-h-screen flex flex-col">
      {/* Status Bar */}
      <div className="flex justify-between items-center px-4 py-2 bg-white">
        <span className="text-sm font-medium">9:41</span>
        <div className="flex items-center space-x-0.5">
          {/* iOS-style signal bars as SVG */}
          <svg width="18" height="12" viewBox="0 0 18 12" className="fill-black">
            <rect x="0" y="9" width="2" height="3" rx="0.5"/>
            <rect x="4" y="6" width="2" height="6" rx="0.5"/>
            <rect x="8" y="3" width="2" height="9" rx="0.5"/>
            <rect x="12" y="0" width="2" height="12" rx="0.5"/>
          </svg>

            {/* WiFi Icon */}
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

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center items-center px-8">
        {/* Logo */}
        <div className="mb-16">
            <img 
                src="/myitschatlogo.png" 
                alt="myITS Chat Logo" 
                className="w-48 h-48 mx-auto"
            />
        </div>


        {/* Login Button */}
        <div className="w-full mt-100">
          <button
            onClick={onContinue}
            className="w-full bg-[#013880] hover:bg-[#012456] text-white py-2 rounded-full font-medium text-base text-center focus:outline-none focus:ring-2 focus:ring-[#013880] focus:ring-offset-2 transition-colors shadow-lg"
          >
            Login with myITS SSO
          </button>
        </div>
      </div>

      {/* Home Indicator */}
      <div className="flex justify-center pb-2">
        <div className="w-32 h-1 bg-black rounded-full"></div>
      </div>
    </div>
  );
};

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoading(true);
    
    setTimeout(() => {
      if (email === '5025231010@student.its.ac.id' && password === 'password123') {
        onLogin();
      } else {
        alert('Invalid credentials! Use:\nEmail: 5025231010@student.its.ac.id\nPassword: password123');
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="max-w-sm mx-auto bg-white min-h-screen flex flex-col">
      {/* Status Bar */}
      <div className="flex justify-between items-center px-4 py-2 bg-white">
        <span className="text-sm font-medium">9:41</span>
        <div className="flex items-center space-x-0.5">
          {/* iOS-style signal bars as SVG */}
          <svg width="18" height="12" viewBox="0 0 18 12" className="fill-black">
            <rect x="0" y="9" width="2" height="3" rx="0.5"/>
            <rect x="4" y="6" width="2" height="6" rx="0.5"/>
            <rect x="8" y="3" width="2" height="9" rx="0.5"/>
            <rect x="12" y="0" width="2" height="12" rx="0.5"/>
          </svg>

            {/* WiFi Icon */}
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

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center px-8">
        {/* Logo Section */}
        <div className="text-center mb-6">
          <div className="mb-2">
            <div className="w-40 h-40 mx-auto mb-6">
              <img 
                src="/itslogo.png" 
                alt="ITS Logo" 
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Login Form */}
        <div className="space-y-6">
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-3">
              E-Mail
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="5025231010@student.its.ac.id"
              className="w-full px-4 py-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:border-transparent text-sm bg-gray-50"
              style={{ focusRingColor: '#013880' }}
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-medium mb-3">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:border-transparent text-sm bg-gray-50"
              style={{ focusRingColor: '#013880' }}
            />
          </div>

          <button
            onClick={handleLogin}
            disabled={isLoading || !email || !password}
            className="w-full text-white py-2 rounded-2xl font-medium text-sm hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all mt-8"
            style={{ backgroundColor: '#013880', focusRingColor: '#013880' }}
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                Logging in...
              </div>
            ) : (
              'Login'
            )}
          </button>
        </div>

        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <p className="text-xs text-gray-600 text-center">
            <strong>Demo Credentials:</strong><br />
            Email: 5025231010@student.its.ac.id<br />
            Password: password123
          </p>
        </div>
      </div>

      {/* Home Indicator */}
      <div className="flex justify-center pb-2">
        <div className="w-32 h-1 bg-black rounded-full"></div>
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  const [currentScreen, setCurrentScreen] = useState('onboarding'); // 'onboarding', 'login', 'chat'

  if (currentScreen === 'onboarding') {
    return <OnboardingScreen onContinue={() => setCurrentScreen('login')} />;
  }

  if (currentScreen === 'login') {
    return <LoginPage onLogin={() => setCurrentScreen('chat')} />;
  }

    return <MessagingApp />;
};

export default App;