# flutter-test-helper

A VS Code extension that streamlines test file creation and management for Flutter projects.

## ✨ Features

### 1. 🧪 Create Test File CodeLens
Adds a **"Create test file"** button above each class declaration in your Dart files. Click it to instantly generate a properly structured test file.

### 2. 🔄 Update Golden Files CodeLens
For test files, adds an **"Update Goldens"** button above `void main()` that executes `flutter test --update-goldens` for the current test file. Perfect for updating golden image tests with a single click!

### 3. 🟢 File Decoration Badges
Shows a **green circle (🟢)** badge next to Dart files in the Explorer that have corresponding test files. Get instant visual feedback on your test coverage!

## 📦 Development

### Building the Extension

To package the extension as a `.vsix` file for distribution:

```bash
pnpm run package
```

This will generate a `.vsix` file in the root directory that can be installed in VS Code.
