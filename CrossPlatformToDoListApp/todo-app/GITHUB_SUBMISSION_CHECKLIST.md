# ✅ GitHub Submission Checklist

Use this checklist to ensure your submission meets all lab requirements.

## 📋 Before Submission

### 1. Run the App
- [ ] App runs successfully on at least one platform
- [ ] Can add tasks
- [ ] Can view tasks in list
- [ ] Can delete tasks
- [ ] No errors in console

### 2. Take Screenshots
- [ ] Screenshot 1: `add_task.png` (showing input field with text)
- [ ] Screenshot 2: `task_list.png` (showing multiple tasks)
- [ ] Screenshot 3: `delete_task.png` (showing delete functionality)
- [ ] All screenshots saved in `screenshots/` folder
- [ ] Screenshots are clear and readable

### 3. Update README.md
- [ ] Add your name as author
- [ ] Verify all sections are complete
- [ ] Check that screenshot links work
- [ ] Review native vs cross-platform comparison

### 4. Verify File Structure
```
todo-app/
├── App.js ✓
├── package.json ✓
├── README.md ✓
├── screenshots/
│   ├── add_task.png ✓
│   ├── task_list.png ✓
│   └── delete_task.png ✓
└── ... (other files)
```

## 🚀 GitHub Submission Steps

### Step 1: Create GitHub Repository
1. Go to https://github.com/new
2. Repository name: `MobileDev-YourName` (replace YourName)
3. Description: "Cross-Platform To-Do List App - Mobile Development Lab"
4. Choose: Public
5. Do NOT initialize with README (we already have one)
6. Click "Create repository"

### Step 2: Initialize Git (if not already done)
Open terminal in `todo-app` folder:
```bash
git init
git add .
git commit -m "Initial commit: Cross-platform To-Do List app"
```

### Step 3: Connect to GitHub
Replace `YOUR_USERNAME` with your GitHub username:
```bash
git remote add origin https://github.com/YOUR_USERNAME/MobileDev-YourName.git
git branch -M main
git push -u origin main
```

### Step 4: Verify Upload
1. Go to your GitHub repository URL
2. Check that all files are visible
3. Verify README.md displays correctly
4. Confirm screenshots are visible

## 📝 README.md Requirements

Your README.md must include:
- [x] Framework used (React Native)
- [x] Brief comparison of native vs cross-platform
- [x] Description of app features
- [x] Screenshots of the running app
- [x] How to run instructions
- [x] Author name (UPDATE THIS!)

## 🎯 Lab Requirements Verification

### Functional Requirements
- [x] Text input for new tasks
- [x] Button to add tasks
- [x] List displaying all tasks
- [x] Ability to remove tasks
- [x] Single screen UI

### Technical Requirements
- [x] Cross-platform framework (React Native)
- [x] Single codebase
- [x] Runs on multiple platforms

### Documentation Requirements
- [x] README.md with comparison
- [x] Screenshots folder with 3 images
- [x] Clear project structure

### Correctly Excluded (Not Required)
- [x] No user authentication
- [x] No database/cloud sync
- [x] No complex animations
- [x] No multiple screens

## 📸 Screenshot Quality Check

Each screenshot should:
- [ ] Be clear and readable
- [ ] Show the app interface
- [ ] Demonstrate the specific feature
- [ ] Be in PNG format
- [ ] Have descriptive filename

### Screenshot 1: add_task.png
Should show:
- Text input field with a task typed in
- "Add" button visible
- Clean UI

### Screenshot 2: task_list.png
Should show:
- Multiple tasks in the list (at least 3)
- Each task with delete button
- Scrollable list if many tasks

### Screenshot 3: delete_task.png
Should show:
- Delete button highlighted or pressed
- Or before/after deletion comparison

## 🔍 Final Review

### Code Quality
- [ ] No syntax errors
- [ ] Code is properly formatted
- [ ] Comments are clear (if any)
- [ ] No console errors when running

### Documentation Quality
- [ ] README is professional
- [ ] Instructions are clear
- [ ] Comparison is detailed
- [ ] Screenshots are embedded correctly

### Repository Quality
- [ ] .gitignore excludes node_modules
- [ ] No unnecessary files committed
- [ ] Commit messages are clear
- [ ] Repository is public

## 📤 Submission Format

### Repository URL Format
```
https://github.com/YOUR_USERNAME/MobileDev-YourName
```

### What to Submit
Submit the GitHub repository URL to your instructor via:
- Learning management system
- Email
- Assignment portal
- As specified by your instructor

## ✨ Bonus Points (Optional)

Consider adding these for extra credit:
- [ ] Add task editing functionality
- [ ] Implement task completion (checkboxes)
- [ ] Add task categories or tags
- [ ] Implement data persistence (AsyncStorage)
- [ ] Add animations
- [ ] Create a demo video
- [ ] Deploy to Expo.dev

## 🎓 Grading Criteria

Your submission will likely be graded on:

### Functionality (40%)
- App runs without errors
- All features work correctly
- User experience is smooth

### Code Quality (20%)
- Clean, readable code
- Proper structure
- Good practices

### Documentation (30%)
- Complete README
- Clear screenshots
- Native vs cross-platform comparison

### Submission (10%)
- Proper GitHub structure
- All files included
- Professional presentation

## ⚠️ Common Mistakes to Avoid

- [ ] Forgetting to add screenshots
- [ ] Not updating author name in README
- [ ] Committing node_modules folder
- [ ] Broken screenshot links in README
- [ ] Missing native vs cross-platform comparison
- [ ] Repository is private (should be public)
- [ ] No .gitignore file
- [ ] Screenshots are too small or unclear

## 🎉 Ready to Submit?

If you can check all these boxes, you're ready!

- [ ] App runs successfully
- [ ] All 3 screenshots taken and saved
- [ ] README.md updated with your name
- [ ] Git repository initialized
- [ ] Pushed to GitHub
- [ ] Repository is public
- [ ] All files visible on GitHub
- [ ] Screenshots display in README

## 📧 After Submission

1. Double-check your repository URL works
2. View it in an incognito browser to verify it's public
3. Submit the URL to your instructor
4. Keep a local backup of your project

---

## 🏆 Congratulations!

You've completed the Cross-Platform Mobile Development lab!

You've learned:
✅ Cross-platform development concepts
✅ Native vs cross-platform comparison
✅ React Native fundamentals
✅ Mobile app development workflow
✅ Git and GitHub for project submission

**Great job!** 🎉

---

## 🆘 Need Help?

If you're stuck on any step:
1. Review the documentation files in this project
2. Check the troubleshooting section in RUN_APP.md
3. Ask your instructor or TA
4. Search Stack Overflow
5. Check React Native documentation

Good luck with your submission! 🚀
