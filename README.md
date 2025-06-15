
# Fishermen Marketplace 🐟📱

A mobile app built with **React Native (Expo)** that connects local fishers with buyers, helping streamline seafood trading and encourage smarter fishing practices with AI assistance.

## 🌊 Features

- 🔐 **Login System** for Fisher and Buyer roles
- 🎣 **Fisher Panel**:
  - Add today's catch with photo, price, and name
  - Use AI assistant to get fishing recommendations
- 🛒 **Buyer Panel**:
  - View latest catches added by fishers
- 📷 **Image Picker** to upload catch photos
- 🧠 **AI Assistant** (demo) that suggests fish types, prices, and timing
- 📱 Cross-platform support (Android & Web)

## 💡 Tech Stack

- **Frontend**: React Native (Expo)
- **Navigation**: React Navigation
- **Image Upload**: Expo Image Picker
- **State Management**: React Context API
- **Style**: React Native StyleSheet

## 🚀 Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npx expo start
   ```

4. **Run on device**
   - Scan the QR code using Expo Go app on your mobile.
   - Or press `w` to run on web.

## 📂 Project Structure

```
/assets             # App images and logos
/components         # Reusable UI components
/screens            # Login, Fisher, Buyer, and AI screens
/CatchContext.js    # Shared state using React Context
/App.js             # App navigation and routing
```

## 🔮 Future Improvements

- Firebase backend for real-time sync and authentication
- Geolocation-based catch visibility
- AI integration using weather and sea data
- Chat system between fishers and buyers
- Rating system

## 📷 Screenshots

> Add screenshots or screen recordings of the app in action

---

## 🧠 AI Use Case

The app includes a basic AI suggestion tool that provides:
- Best fish to catch today
- Recommended pricing
- Optimal fishing time
This promotes sustainable fishing and helps fishers maximize earnings.

---

## 🛠️ Author

**Dhia Ben Fadhel**  
Feel free to connect and contribute!
