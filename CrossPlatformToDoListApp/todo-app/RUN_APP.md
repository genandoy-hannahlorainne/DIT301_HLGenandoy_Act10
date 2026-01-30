# 🎮 How to Run Your To-Do App

## 🎯 Easiest Method: Use Your Phone!

### Step 1: Install Expo Go
Download "Expo Go" on your phone:
- **Android**: [Play Store Link](https://play.google.com/store/apps/details?id=host.exp.exponent)
- **iOS**: [App Store Link](https://apps.apple.com/app/expo-go/id982107779)

### Step 2: Start the Server
Open terminal in the `todo-app` folder and run:
```bash
npm start
```

You'll see something like:
```
› Metro waiting on exp://192.168.1.100:8081
› Scan the QR code above with Expo Go (Android) or the Camera app (iOS)
```

### Step 3: Scan QR Code
- **Android**: Open Expo Go app → Tap "Scan QR Code"
- **iOS**: Open Camera app → Point at QR code → Tap notification

### Step 4: Wait for App to Load
The app will download and open on your phone (takes 10-30 seconds first time)

### Step 5: Test the App!
1. Type "Buy groceries" in the input field
2. Tap "Add" button
3. See your task appear in the list
4. Tap "Delete" to remove it
5. Add more tasks to test!

---

## 💻 Alternative: Run in Web Browser

### Step 1: Start Web Version
```bash
npm run web
```

### Step 2: Browser Opens Automatically
The app will open at `http://localhost:8081`

### Step 3: Test in Browser
Works just like on mobile! Add, view, and delete tasks.

---

## 🤖 Alternative: Run on Android Emulator

### Prerequisites
- Android Studio installed
- Android emulator created and running

### Step 1: Start Emulator
Open Android Studio → AVD Manager → Start an emulator

### Step 2: Run App
```bash
npm run android
```

### Step 3: Wait for Build
First build takes 2-5 minutes. Subsequent builds are faster.

---

## 🍎 Alternative: Run on iOS Simulator (Mac Only)

### Prerequisites
- Xcode installed (Mac only)
- iOS Simulator available

### Step 1: Run App
```bash
npm run ios
```

### Step 2: Wait for Build
Simulator will open automatically with your app.

---

## 🎬 What You Should See

### Initial Screen
```
┌─────────────────────────┐
│      To-Do List         │ ← Green header
├─────────────────────────┤
│ [Enter a new task...] [Add] │ ← Input and button
├─────────────────────────┤
│ No tasks yet. Add one   │ ← Empty state
│ above!                  │
└─────────────────────────┘
```

### With Tasks
```
┌─────────────────────────┐
│      To-Do List         │
├─────────────────────────┤
│ [Enter a new task...] [Add] │
├─────────────────────────┤
│ Buy groceries    [Delete] │ ← Task 1
│ Call dentist     [Delete] │ ← Task 2
│ Finish homework  [Delete] │ ← Task 3
└─────────────────────────┘
```

---

## 🐛 Troubleshooting

### "Cannot find module 'expo'"
**Solution**: Run `npm install` in the todo-app folder

### "Port 8081 already in use"
**Solution**: 
```bash
npx expo start --port 8082
```

### QR Code Not Working
**Solution**: Make sure phone and computer are on the same WiFi network

### "Expo Go" Not Scanning
**Solution**: 
1. Type the URL manually in Expo Go
2. Or use tunnel mode: `npx expo start --tunnel`

### "Project is incompatible with this version of Expo Go"
**Solution**: The project has been upgraded to SDK 54 to match your Expo Go version. Just restart the server:
```bash
npm start
```

### App Not Loading on Phone
**Solution**:
1. Check WiFi connection
2. Restart Expo Go app
3. Run `npx expo start --clear` to clear cache

### Android Emulator Not Detected
**Solution**:
1. Make sure emulator is running
2. Check `adb devices` shows your emulator
3. Restart the emulator

---

## 📸 Taking Screenshots

### On Phone
- **Android**: Press Power + Volume Down simultaneously
- **iOS**: Press Side Button + Volume Up simultaneously

### On Emulator/Simulator
- **Android Emulator**: Click camera icon in toolbar or Ctrl+S
- **iOS Simulator**: Cmd+S (saves to Desktop)

### On Web
- Use browser's screenshot tool or press Print Screen

### What to Capture
1. **add_task.png**: Input field with text typed in
2. **task_list.png**: Multiple tasks displayed
3. **delete_task.png**: Showing delete button or deletion action

---

## ✅ Success Checklist

After running the app, verify:
- [ ] App loads without errors
- [ ] Can type in the input field
- [ ] "Add" button adds tasks to the list
- [ ] Tasks appear in the list
- [ ] "Delete" button removes tasks
- [ ] UI looks clean and professional
- [ ] Works smoothly without lag

---

## 🎉 You're Done!

If you can:
1. ✅ Add tasks
2. ✅ See them in the list
3. ✅ Delete them

**Your app is working perfectly!** 

Now take your screenshots and prepare for GitHub submission.

---

## 🆘 Still Having Issues?

### Quick Fixes
```bash
# Clear cache and restart
npx expo start --clear

# Reinstall dependencies
rm -rf node_modules
npm install

# Check Node version (should be 14+)
node --version

# Update Expo CLI
npm install -g expo-cli
```

### Get Help
- Expo Documentation: https://docs.expo.dev/
- React Native Docs: https://reactnative.dev/
- Stack Overflow: Search "React Native Expo [your error]"

Good luck! 🚀
