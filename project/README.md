# Task Manager App

A beautiful and intuitive task management application built with React Native and Expo. This app allows users to efficiently manage their daily tasks with a clean, modern interface and smooth animations.

## Features

### Core Functionality
- **Add Tasks**: Create new tasks with descriptions
- **Mark Complete**: Mark tasks as completed with visual feedback
- **Delete Tasks**: Remove tasks from your list
- **Task Filtering**: View all tasks, active tasks, or completed tasks
- **Task Statistics**: See your progress with real-time stats

### User Experience
- **Smooth Animations**: All interactions are enhanced with React Native Reanimated
- **Visual Feedback**: Clear indicators for task states and user actions
- **Tab Navigation**: Easy switching between different task views
- **Responsive Design**: Works seamlessly on mobile and web platforms
- **Clean Interface**: Modern iOS-inspired design with intuitive controls

## Technology Stack

- **React Native**: Core framework for cross-platform development
- **Expo**: Development platform and toolchain
- **Expo Router**: File-based routing with tab navigation
- **React Native Reanimated**: Smooth animations and micro-interactions
- **TypeScript**: Type safety and better development experience
- **Lucide React Native**: Beautiful, consistent icons

## Installation and Setup

### Prerequisites
- Node.js (version 16 or later)
- npm or yarn package manager

### Getting Started

1. **Clone the repository** (if applicable):
   ```bash
   git clone <repository-url>
   cd task-manager-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Access the app**:
   - **Web**: The app will automatically open in your browser
   - **Mobile**: Scan the QR code with the Expo Go app
   - **Simulator**: Press 'i' for iOS simulator or 'a' for Android emulator

## Project Structure

```
├── app/                    # App routes and screens
│   ├── (tabs)/            # Tab-based navigation
│   │   ├── index.tsx      # All tasks screen
│   │   ├── active.tsx     # Active tasks screen
│   │   └── completed.tsx  # Completed tasks screen
│   └── _layout.tsx        # Root layout configuration
├── components/            # Reusable UI components
│   ├── TaskInput.tsx      # Task creation input
│   ├── TaskItem.tsx       # Individual task component
│   ├── TaskList.tsx       # Task list container
│   └── TaskStats.tsx      # Statistics display
├── context/               # React Context for state management
│   └── TaskContext.tsx    # Global task state
├── hooks/                 # Custom React hooks
│   ├── useTasks.ts        # Task management logic
│   └── useFrameworkReady.ts # Framework initialization
└── types/                 # TypeScript type definitions
    └── Task.ts            # Task-related types
```

## Usage Instructions

### Adding Tasks
1. Navigate to any tab (All Tasks, Active, or Completed)
2. Type your task description in the input field at the top
3. Press the blue plus button or hit Enter to add the task

### Managing Tasks
- **Mark Complete**: Tap the circle next to any task to toggle completion
- **Delete Task**: Tap the trash icon to remove a task
- **View Statistics**: Check the stats bar to see your progress

### Navigation
- **All Tasks Tab**: View all your tasks regardless of status
- **Active Tab**: See only tasks that need to be completed
- **Completed Tab**: Review finished tasks and clear them if needed

### Additional Features
- **Clear Completed**: In the Completed tab, use "Clear All Completed" to remove all finished tasks
- **Visual Feedback**: Tasks animate when toggled or deleted
- **Timestamps**: See when tasks were created or completed

## State Management

The app uses React Context API for state management, providing:
- Global task state accessible across all screens
- Efficient updates without prop drilling
- Type-safe operations with TypeScript

## Platform Compatibility

This app is designed to work on:
- **Web Browsers**: Full functionality with responsive design
- **iOS Devices**: Native look and feel with iOS design patterns
- **Android Devices**: Consistent experience across platforms

## Third-Party Libraries

### Core Dependencies
- **@expo/vector-icons**: Icon library for consistent iconography
- **expo-router**: File-based routing system
- **react-native-reanimated**: High-performance animations
- **react-native-gesture-handler**: Enhanced touch interactions
- **lucide-react-native**: Modern icon set

### Development Dependencies
- **TypeScript**: Static type checking
- **@types/react**: Type definitions for React

## Development Notes

### Animations
All animations use React Native Reanimated for optimal performance:
- Task completion toggles include scale animations
- Delete operations fade out smoothly
- UI interactions provide immediate visual feedback

### Accessibility
The app includes:
- Proper touch targets for all interactive elements
- Clear visual hierarchies
- Intuitive navigation patterns

### Performance
- Efficient FlatList rendering for large task lists
- Optimized re-renders using React.memo and useCallback
- Minimal state updates for smooth user experience

## Future Enhancements

Potential features for future versions:
- Task categories and tags
- Due dates and reminders
- Search and filtering capabilities
- Data persistence with local storage
- Sync with cloud services
- Dark mode support

## Contributing

When contributing to this project:
1. Follow the existing code style and patterns
2. Add TypeScript types for all new features
3. Include animations for user interactions
4. Test on both web and mobile platforms
5. Update documentation for new features

## License

This project is for educational and demonstration purposes.