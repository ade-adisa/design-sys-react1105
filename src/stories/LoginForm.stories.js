import { fn } from '@storybook/test';

import LoginForm from './LoginForm';

// Story metadata
export default {
  title: 'Components/LoginForm',
  component: LoginForm,
  argTypes: {
    theme: { control: 'radio', options: ['light', 'dark'] },
    showPasswordStrength: { control: 'boolean' },
  },
};

// Template for creating stories
const Template = (args) => <LoginForm {...args} />;

// Default Story
export const Default = Template.bind({});
Default.args = {
  onSubmit: fn(),
  theme: 'light',
  showPasswordStrength: false,
};

// Dark Mode Story
export const DarkMode = Template.bind({});
DarkMode.args = {
  ...Default.args,
  theme: 'dark',
};

// With Password Strength Indicator
export const WithPasswordStrength = Template.bind({});
WithPasswordStrength.args = {
  ...Default.args,
  showPasswordStrength: true,
};