# Cross-Platform To-Do List App

## Framework Used
**React Native** with Expo

React Native is a cross-platform mobile development framework created by Meta that allows developers to build mobile applications using JavaScript and React.

## Native vs Cross-Platform Development

### Native Development
- **Separate codebases**: Requires Kotlin/Java for Android and Swift/Objective-C for iOS
- **High performance**: Direct access to platform APIs
- **Higher development cost**: Need separate teams or developers skilled in multiple languages
- **Platform-specific features**: Full access to all device capabilities

### Cross-Platform Development
- **Single codebase**: Write once, run on both Android and iOS
- **Faster development**: Shared business logic reduces development time
- **Lower maintenance cost**: Updates apply to both platforms simultaneously
- **Near-native performance**: Modern frameworks like React Native provide excellent performance
- **Consistent UI**: Same look and feel across platforms

## App Features

This To-Do List application demonstrates core cross-platform development concepts:

1. **Add Tasks**: Users can enter new tasks using a text input field
2. **Display Tasks**: All tasks are shown in a scrollable list
3. **Delete Tasks**: Each task has a delete button to remove it from the list
4. **Responsive UI**: Clean, modern interface that works on both Android and iOS
5. **State Management**: Uses React hooks (useState) to manage task data

## Technical Implementation

- **React Native Components**: SafeAreaView, FlatList, TextInput, TouchableOpacity
- **State Management**: React hooks for managing task list
- **Styling**: StyleSheet API for consistent cross-platform styling
- **Single Screen**: Simple, focused user experience

## How to Run

### Prerequisites
- Node.js installed
- Expo CLI installed (`npm install -g expo-cli`)

### Installation
```bash
cd todo-app
npm install
```

### Run on Android
```bash
npm run android
```

### Run on iOS (Mac only)
```bash
npm run ios
```

### Run on Web
```bash
npm run web
```

## Screenshots

### Add Task
![Add Task](screenshots/add_task.png)

### Task List
![Task List](screenshots/task_list.png)

### Delete Task
![Delete Task](screenshots/delete_task.png)

## Key Takeaway

Cross-platform frameworks like React Native enable faster development by sharing a single codebase across platforms. This approach significantly reduces development time and maintenance costs while maintaining near-native performance and user experience.

## Author
[Your Name]

## License
MIT
