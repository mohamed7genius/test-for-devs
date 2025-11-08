# Welcome to your test project 👋

## Prerequisites

Ensure the following are installed on your system:

- [Node.js](https://nodejs.org/) (Recommended: LTS version)
- [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable) (Install it version `1.22.22`)
- [Android Studio](https://developer.android.com/studio) with SDK tools (for Android development)
- [Git](https://git-scm.com/downloads) and use gitbash as a default command line
- [Xcode](https://developer.apple.com/xcode/) (for iOS development, macOS only)
- [Watchman](https://facebook.github.io/watchman/) (for macOS users):

  ```bash
  brew install watchman
  ```

## Get started

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. Install dependencies

   ```bash
   yarn install
   ```

3. Install pod dependencies for iOS (macOS only):

   ```bash
   cd ios && pod install && cd ..
   ```

4. Check Expo setup :

   ```bash
   yarn react-native doctor
   ```

## Environment Configuration

### .env File

Create a `.env` file in the project root for environment variables:

```env
EXPO_PUBLIC_ENV=development
```

# Running the App

### Run Android Dev Env

1. Run the app on an Android device or emulator:

```bash
 yarn android:dev
```

### iOS Prod Environment (macOS only)

1. Run the app on an iOS simulator:

```bash
 yarn ios:dev
```
