# LoginForm Component

A robust and customizable login form component built with React, designed to fit seamlessly into a design system. This component prioritizes flexibility, accessibility, and theming options to cater to a variety of use cases.

## Table of Contents

- [Usage Guidelines](#usage-guidelines)
- [Component Props](#component-props)
- [State Variations and Theming](#state-variations-and-theming)
- [Accessibility Considerations](#accessibility-considerations)
- [Scaling and Modifications](#scaling-and-modifications)
- [Examples](#examples)

## Usage Guidelines

To use the `LoginForm` component in your React project:

1. **Import the Component**:
    ```javascript
    import { LoginForm } from './components/LoginForm';
    ```

2. **Include It in Your JSX**:
    ```jsx
    <LoginForm
      theme="light"
      showPasswordStrength={true}
      onSubmit={(data) => handleLogin(data)}
    />
    ```

3. **Define the `handleLogin` Function**:
    ```javascript
    const handleLogin = (formData) => {
      console.log('Form submitted:', formData);
      // Additional login logic
    };
    ```

### Installation

Clone the repository and install the dependencies:
```bash
git clone https://github.com/ade-adisa/design-sys-react1105.git
cd design-sys-react1105
npm install
```

## Component Props

| Prop                  | Type                 | Default      | Description                                                  |
|-----------------------|----------------------|--------------|--------------------------------------------------------------|
| `theme`               | `'light' | 'dark'`  | `'light'`    | The theme for the form, either light or dark.                |
| `showPasswordStrength`| `boolean`            | `false`      | Whether to display the password strength indicator.          |
| `onSubmit`            | `function`           | `undefined`  | Function to handle the form submission. Receives form data.  |

### Prop Details

- **`theme`**: Adjusts the form's visual appearance to match the specified theme.
- **`showPasswordStrength`**: When `true`, an indicator shows the strength of the entered password.
- **`onSubmit`**: A callback function that receives the form data upon submission.

## State Variations and Theming

The `LoginForm` component can be rendered in different themes:

### Theme Options

- **Light Theme**: Default appearance with a white background and dark text.
- **Dark Theme**: Inverts the colors for a darker appearance, suitable for dark mode.

Example of rendering the component with the dark theme:
```jsx
<LoginForm
  theme="dark"
  showPasswordStrength={true}
  onSubmit={handleLogin}
/>
```

### Password Strength Indicator

When `showPasswordStrength` is set to `true`, the component will display a dynamic indicator showing the strength of the password as it is typed.

## Accessibility Considerations

The `LoginForm` component is built with accessibility (a11y) in mind:

- **Keyboard Navigation**: Fully operable via the keyboard, ensuring users can navigate through form fields with the `Tab` key and submit using `Enter`.
- **Screen Reader Compatibility**: Labels and ARIA attributes are included to provide context for screen readers, ensuring form fields and error messages are announced correctly.
- **Focus States**: Clear and distinct focus indicators are provided for better usability for keyboard users.

### Error Messaging

Error messages are designed to be announced using ARIA live regions. This ensures users relying on screen readers receive feedback when form validation fails.

## Scaling and Modifications

The `LoginForm` component is built to be easily scaled and modified:

- **Custom Validation**: Extend the component to include additional validation logic, such as domain-specific email rules.
- **OAuth Integration**: Modify the `onSubmit` function to integrate with third-party authentication providers like Google, Facebook, or others.
- **Custom Fields**: Add new fields (e.g., username or confirm password) by extending the form's state and JSX structure.
- **Styling**: Extend the theming options by adding new themes or customizing the existing ones.

### Example Customization

To add a "Remember Me" checkbox:
1. Update the component's state and form structure to include the checkbox.
2. Modify the `onSubmit` function to include the new field in the form data.

```jsx
<LoginForm
  theme="light"
  showPasswordStrength={false}
  onSubmit={(data) => {
    data.rememberMe = true; // Example logic
    handleLogin(data);
  }}
/>
```

## Examples

### Basic Usage

```jsx
<LoginForm
  onSubmit={(data) => console.log('Form data:', data)}
/>
```

### With Dark Theme and Password Strength

```jsx
<LoginForm
  theme="dark"
  showPasswordStrength={true}
  onSubmit={handleLogin}
/>
```

### Handling Submit

```javascript
const handleLogin = (formData) => {
  console.log('Login form submitted:', formData);
  // Implement additional login logic here
};
```

## License

This component is part of the design system in [this repository](https://github.com/ade-adisa/design-sys-react1105). Please refer to the repository for license and contribution information.