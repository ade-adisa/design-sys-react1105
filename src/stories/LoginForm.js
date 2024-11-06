import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import PropTypes from 'prop-types';

import './loginform.css';


// Design System Themes
const lightTheme = {
    background: '#ffffff',
    buttonBackground: '#253B62',
    color: '#000000',
    inputBackground: '#ffffff',
    borderColor: '#cccccc',
    successColor: '#2c9468',
    errorColor: '#ff0000',
};

const darkTheme = {
    background: '#333333',
    buttonBackground: '#4584F2',
    color: '#ffffff',
    inputBackground: '#555555',
    borderColor: '#aba9a9',
    successColor: '#7EE2B8',
    errorColor: '#ff6666',
};

// Styled Components for consistent styling
const FormWrapper = styled.div`
    overflow: hidden;
    padding: 1.5rem;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
    border-radius: .25rem;
    box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
    display: flex;
    width: 400px;
    max-width: 100%;
    margin: 0px auto;
    flex-direction: column;
`;

const Input = styled.input`
    width: 100%;
    padding: .75rem .5rem;
    margin-top: .25rem;
    margin-bottom: .25rem;
    background-color: ${({ theme }) => theme.inputBackground};
    color: ${({ theme }) => theme.color};
    border: 1px solid ${({ theme }) => theme.borderColor};
    border-radius: .25rem;
`;

const Button = styled.button`
    width: 100%;
    padding: .75rem;
    background-color: ${({ theme }) => theme.buttonBackground};
    color: ${({ theme }) => theme.background};
    border: none;
    border-radius: .25rem;
    cursor: pointer;
    font-weight: bold;
    font-size: 0.875em;

    &:hover {
        opacity: 0.9;
    }
`;

const SuccessText = styled.div`
    color: ${({ theme }) => theme.successColor};
    font-size: 0.75em;
    margin-bottom: .75rem;
`;

const StandardInfoText = styled.div`
    color: ${({ theme }) => theme.color};
    font-size: 0.75em;
    margin-bottom: .25rem;
`;

const ErrorText = styled.div`
    color: ${({ theme }) => theme.errorColor};
    font-size: 0.75em;
    margin-bottom: .75rem;
`;

const InputBlock = styled.div`
    padding-right:10px;
    width: 100%;
    display: flex;
`;

// Validation Helpers
const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
const validatePassword = (password) => {
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*]/.test(password);
    const isValidLength = password.length >= 8 && password.length <= 20;
    
    return (
      isValidLength &&
      hasUppercase &&
      hasLowercase &&
      hasDigit &&
      hasSpecialChar
    );
};
  
// Validation error messages could be customized
const getPasswordValidationMessage = (password) => {
    if (password.length < 8) {
        return 'Password must be at least 8 characters long';
    }
    if (password.length > 20) {
        return 'Password must be no more than 20 characters long';
    }
    if (!/[A-Z]/.test(password)) {
        return 'Password must include at least one uppercase letter';
    }
    if (!/[a-z]/.test(password)) {
        return 'Password must include at least one lowercase letter';
    }
    if (!/\d/.test(password)) {
        return 'Password must include at least one digit';
    }
    if (!/[!@#$%^&*]/.test(password)) {
        return 'Password must include at least one special character';
    }
    return '';
};


const LoginForm = ({ onSubmit, theme, showPasswordStrength }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });

  const handleEmailChange = (e) => {
    const newEmail = e.target.value
    setEmail(newEmail);
    if (!validateEmail(newEmail)) {
        setErrors({ ...errors, email: 'Please enter a valid email address' });
    } else {
      setErrors({ ...errors, email: '' });
    }
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value.trim();
    setPassword(newPassword);
    if (!validatePassword(newPassword)) {
        setErrors({ ...errors, password: getPasswordValidationMessage(newPassword) });
    } else {
      setErrors({ ...errors, password: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailError = validateEmail(email) ? '' : 'Please enter a valid email address';
    const passwordError = getPasswordValidationMessage(password);
    setErrors({email: emailError, password: passwordError})

    if (!emailError && !passwordError) {
      onSubmit({ email, password });
    }
  };

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <FormWrapper>
        <form onSubmit={handleSubmit}>
            <div>
                <label for="email">
                    Email
                    <InputBlock>
                        <Input
                            id="email"
                            aria-label="Email"
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                            placeholder="Enter your email"
                        />
                    </InputBlock>
                </label>
            </div>
            {errors.email && <ErrorText>{errors.email}</ErrorText>}
            <div style={{ marginTop: email.length === 0 || !errors.email ? '0.75rem' : '0' }}>
                <label for="password">
                    Password
                    <InputBlock>
                        <Input
                            id="password"
                            aria-label="Password"
                            type="password"
                            value={password}
                            onChange={handlePasswordChange}
                            placeholder="Enter your password"
                        />
                    </InputBlock>
                </label>
            </div>
            {errors.password && <StandardInfoText>Use 8 or more characters with a mix of letters, numbers, capcase and symbols</StandardInfoText>}
            {(password.length > 0 && !errors.password) && <SuccessText>Password is valid</SuccessText>}
            {errors.password && <ErrorText>{errors.password}</ErrorText>}

            {(password.length > 0 && showPasswordStrength) && (
                <div style={{ color: theme === 'dark' ? darkTheme.color : lightTheme.color, padding: '.75rem 0 .5rem' }}>
                Password Strength: {(password.length > 10 && !errors.password) ? 'Strong' : 'Weak'}
                </div>
            )}

          <Button aria-label="Login" type="submit" style={{ margin: (password.length > 0 && showPasswordStrength) ? '0' : '1rem 0 .5rem' }}>Login</Button>
        </form>
      </FormWrapper>
    </ThemeProvider>
  );
};

// Prop Types
LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  theme: PropTypes.oneOf(['light', 'dark']),
  showPasswordStrength: PropTypes.bool,
};

LoginForm.defaultProps = {
  theme: 'light',
  showPasswordStrength: false,
};

export default LoginForm;