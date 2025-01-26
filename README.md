# OTZ-UI CLI

Welcome to the **OTZ-UI CLI**, a powerful and intuitive command-line tool designed to accelerate your React Native development. With OTZ-UI, you can quickly configure themes, add components, set up hooks, and much more—all with just a few commands.

![Demo](./screenshots/demo.jpg)

---

## Initialize CLI Configuration

Start your project setup with a single command:

```sh
npx otz-ui init
```

---

## Features

- **App Theme Configuration**: Customize colors, fonts, and other theme properties.
- **Cross-platform Components**: Universal compatibility for iOS, Android, and Web.
- **Pre-built Components**: Add layout, typography, and form elements instantly.
- **Hooks Integration**: Simplify state and logic handling.
- **Form Management**: Effortless form state handling and validation.
- **Utility Functions**: Useful helpers for efficient development.

---

## API Reference

- [Installation](#initialize-cli-configuration)
- [Configuration](#configuration)
  - [Theme Setup](#theme-setup)
  - [ESLint Setup](#eslint-setup)
  - [VS Code Configuration](#vs-code-configuration)
- [Components](#components)
  - [Layout Components](#layout-components)
  - [Typography](#typography)
  - [Form Components](#form-components)
  - [Utility Components](#utility-components)
- [Hooks](#hooks)
- [Utility Functions](#utility-functions)
- [Contributing](#contributing)
- [Support](#support)
- [Feedback](#feedback)
- [License](#license)

---

## Configuration

### Theme Setup

Configure your app's theme, including fonts, colors, and radii. This also generates an `otz.config.js` file for further customization.

```sh
npx otz-ui setup theme
```

### ESLint Setup

Set up ESLint with Airbnb style rules for a clean and consistent codebase.

**Important:** Remove existing ESLint configurations before running this command.

```sh
npx otz-ui setup eslint
```

### VS Code Configuration

Customize your VS Code settings to enhance your development experience, including linting fixes on save.

**Important:** Remove existing `.vscode/settings.json` before running this command.

```sh
npx otz-ui setup vscode
```

---

## Components

Easily add pre-built UI components to your project:

### Layout Components

- **Box**:
  ```sh
  npx otz-ui add box
  ```
- **Center**:
  ```sh
  npx otz-ui add center
  ```
- **HStack**:
  ```sh
  npx otz-ui add hstack
  ```
- **VStack**:
  ```sh
  npx otz-ui add vstack
  ```
- **Divider**:
  ```sh
  npx otz-ui add divider
  ```

### Typography

- **Text**:
  ```sh
  npx otz-ui add text
  ```
- **Heading**:
  ```sh
  npx otz-ui add heading
  ```

### Form Components

- **Button**:
  ```sh
  npx otz-ui add button
  ```
- **CheckBox**:
  ```sh
  npx otz-ui add checkbox
  ```
- **Radio**:
  ```sh
  npx otz-ui add radio
  ```
- **Switch**:
  ```sh
  npx otz-ui add switch
  ```
- **Input**:
  ```sh
  npx otz-ui add input
  ```
- **Animated Input**:
  ```sh
  npx otz-ui add animated-input
  ```

### Utility Components

- **Carousel**:
  ```sh
  npx otz-ui add carousel
  ```
- **Bottom Sheet**:
  ```sh
  npx otz-ui add bottom-sheet
  ```

---

## Hooks

Add powerful hooks to simplify logic:

- **useTheme**:
  ```sh
  npx otz-ui add hook useTheme
  ```
- **useForm**:
  ```sh
  npx otz-ui add hook useForm
  ```
- **useQuery**:
  ```sh
  npx otz-ui add hook useQuery
  ```

---

## Utility Functions

Simplify your development with built-in utilities:

- **Random ID Generator**:
  ```sh
  npx otz-ui add fn random
  ```
- **Color Opacity Reducer**:
  ```sh
  npx otz-ui add fn cor
  ```

---

## Contributing

We welcome contributions! Please open an issue or submit a pull request to discuss your ideas.

---

## Support

Need help? Email us at: **support@otz-ui.dev**

---

## Feedback

We’d love to hear from you! Share your feedback at: **feedback@otz-ui.dev**

---

## License

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).

