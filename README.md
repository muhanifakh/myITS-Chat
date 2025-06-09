# myITS Chat

A modern, mobile-first messaging application designed for Institut Teknologi Sepuluh Nopember (ITS) students. Built with React and styled with Tailwind CSS, featuring a clean iOS-inspired interface.

## 👥 Team

**Group 7**

This project was developed by:

- **Anindya Diany Putri** - 5025231007
- **Nathaniel Christine Martauli Simanullang** - 5025231010  
- **Muhammad Hanif Fakhriansyah** - 5025231082
- **Muhammad Rizqy Hidayat** - 5025231161

## 🚀 Features

### Authentication
- **myITS SSO Integration**: Secure login using ITS Single Sign-On
- **Demo Mode**: Pre-configured demo credentials for testing

### Messaging
- **Group Chats**: Create and manage group conversations for classes
- **Direct Messages**: One-on-one conversations with contacts
- **Message Features**:
  - Reply to messages
  - Pin/unpin important messages
  - Delete messages
  - File attachments (images, documents, general files)
  - URL link detection and formatting
  - Long-press context menus

### Group Management
- **Create Groups**: Set up new group chats with custom names and class associations
- **Add Members**: Select contacts from your recently contacted list
- **Group Info**: View and manage group details, members, and settings
- **Delete Groups**: Remove groups when no longer needed

### User Interface
- **Mobile-First Design**: Optimized for mobile devices with iOS-style interface
- **Status Bar**: Realistic mobile status bar with signal, WiFi, and battery indicators
- **Smooth Animations**: Slide-up modals and transitions
- **Responsive Design**: Works seamlessly across different screen sizes

### Contact Management
- **Profile Pages**: View contact information and details
- **User Settings**: Manage your profile, name, status, and email
- **Recently Contacted**: Quick access to recent conversations

## 🛠 Tech Stack

- **Frontend**: React 18
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Create React App
- **State Management**: React Hooks (useState, useEffect, useRef)

## 📁 Project Structure

```
src/
├── Onboarding.js          # Welcome screen and login page
├── Home.js                # Main dashboard with groups/DMs list
├── gc.js                  # Group chat interface
├── gcprof.js              # Group information page
├── dm.js                  # Direct message interface
├── dmprof.js              # Contact profile page
├── makegc.js              # Create new group chat
├── addmember.js           # Add members to group
├── index.js               # App entry point
└── index.css              # Global styles
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd myits-chat
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Demo Credentials
For testing purposes, use these credentials:
- **Email**: `5025231010@student.its.ac.id`
- **Password**: `password123`

## 🎯 Usage

### Getting Started
1. Launch the app and click "Login with myITS SSO"
2. Enter the demo credentials or your actual ITS credentials
3. Access the main dashboard with Groups and Direct Messages

### Creating a Group Chat
1. Click the edit icon (✎) in the top-right corner
2. Enter a group name and select a class
3. Add members from your contacts
4. Click "Make Group" to create

### Messaging Features
- **Send Messages**: Type in the input field and press Enter or click send
- **Reply**: Long-press a message and select "Reply Message"
- **Pin Messages**: Long-press and select "Pin Message" to highlight important messages
- **Attach Files**: Click the "+" button to send images, documents, or other files
- **Delete Messages**: Long-press and select "Delete Message"

### Navigation
- **Groups Tab**: View all your group conversations
- **Direct Messages Tab**: Access one-on-one conversations
- **Settings**: Manage your profile and account settings

## 🎨 Design Features

### Mobile-First Approach
- Responsive design optimized for mobile devices
- iOS-inspired interface with rounded corners and smooth animations
- Native-like status bar and navigation

### Color Scheme
- **Primary Blue**: `#013880` (ITS brand color)
- **Light Blue**: `#e6f3ff` (backgrounds and accents)
- **Gray Scale**: Various shades for text and UI elements

### Interactive Elements
- Long-press context menus for message actions
- Slide-up modals for file selection and settings
- Smooth transitions and hover effects

## 📱 Supported Features

### Current Functionality
- ✅ User authentication with demo mode
- ✅ Group chat creation and management
- ✅ Direct messaging
- ✅ Message replies and pins
- ✅ File attachments simulation
- ✅ Contact management
- ✅ Responsive mobile interface
