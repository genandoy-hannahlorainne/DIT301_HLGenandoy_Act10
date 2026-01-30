# Setup Instructions

## Step 1: Install Dependencies

First, make sure you have Node.js installed (you already do - v24.11.0).

Install Expo CLI globally:
```bash
npm install -g expo-cli
```

## Step 2: Install Project Dependencies

Navigate to the todo-app folder and install dependencies:
```bash
cd todo-app
npm install
```

## Step 3: Run the App

### Option A: Run on Android Emulator
Make sure you have Android Studio installed with an emulator set up.
```bash
npm run android
```

### Option B: Run on Your Phone (Easiest!)
1. Install "Expo Go" app from Play Store (Android) or App Store (iOS)
2. Run: `npm start`
3. Scan the QR code with Expo Go app
4. The app will load on your phone!

### Option C: Run on Web Browser
```bash
npm run web
```

## Step 4: Test the App

1. Type a task in the input field
2. Click "Add" button
3. See the task appear in the list
4. Click "Delete" to remove a task
5. Take screenshots for your submission

## Step 5: Take Screenshots

Take 3 screenshots:
1. Adding a task (showing input field with text)
2. List with multiple tasks
3. Deleting a task (showing delete button)

Save them in the `screenshots/` folder as:
- add_task.png
- task_list.png
- delete_task.png

## Step 6: GitHub Submission

1. Create a new GitHub repository
2. Initialize git in the todo-app folder:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Cross-platform To-Do List app"
   ```
3. Push to GitHub:
   ```bash
   git remote add origin <your-repo-url>
   git branch -M main
   git push -u origin main
   ```

## Troubleshooting

### "expo: command not found"
Run: `npm install -g expo-cli`

### Port already in use
Run: `npx expo start --port 8081`

### Android emulator not detected
Make sure Android Studio is installed and an AVD is created and running.

## What You've Built

✅ Single codebase that runs on Android, iOS, and Web
✅ Text input for new tasks
✅ Add button functionality
✅ List displaying all tasks
✅ Delete functionality for each task
✅ Clean, responsive UI

This demonstrates the power of cross-platform development - one codebase, multiple platforms!
