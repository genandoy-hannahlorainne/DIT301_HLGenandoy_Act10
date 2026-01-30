# 🚀 Quick Start Guide

## ✅ What's Already Done
- ✅ Project created
- ✅ Dependencies installed
- ✅ App code ready

## 🎯 Next Steps

### Run the App (Choose One Method)

#### Method 1: Run on Your Phone (EASIEST!)
1. Install "Expo Go" app on your phone:
   - Android: https://play.google.com/store/apps/details?id=host.exp.exponent
   - iOS: https://apps.apple.com/app/expo-go/id982107779

2. Start the development server:
   ```bash
   npm start
   ```

3. Scan the QR code:
   - Android: Use Expo Go app
   - iOS: Use Camera app, then open in Expo Go

#### Method 2: Run on Web Browser
```bash
npm run web
```
The app will open in your browser at http://localhost:8081

#### Method 3: Run on Android Emulator
1. Make sure Android Studio is installed with an emulator
2. Start the emulator
3. Run:
   ```bash
   npm run android
   ```

## 📸 Taking Screenshots

1. Run the app using any method above
2. Add some tasks
3. Take 3 screenshots:
   - Adding a task
   - List with tasks
   - Deleting a task
4. Save them in `screenshots/` folder

## 📤 GitHub Submission

Your repository should have this structure:
```
todo-app/
├── App.js
├── package.json
├── README.md
├── screenshots/
│   ├── add_task.png
│   ├── task_list.png
│   └── delete_task.png
└── ... (other files)
```

## 🎓 Lab Requirements Met

✅ Text input for new tasks
✅ Button to add tasks
✅ List displaying all tasks
✅ Ability to remove tasks
✅ Single screen UI
✅ Single shared codebase
✅ Cross-platform (Android, iOS, Web)

## 💡 Key Features

- **React Native**: Cross-platform framework by Meta
- **Single Codebase**: Runs on Android, iOS, and Web
- **Modern UI**: Clean, responsive design
- **State Management**: React hooks (useState)
- **No Database**: Simple in-memory storage (as required)

## 🆘 Need Help?

If you encounter issues:
1. Make sure Node.js is installed: `node --version`
2. Clear cache: `npx expo start --clear`
3. Reinstall: `rm -rf node_modules && npm install`

Enjoy building your cross-platform app! 🎉
