import React, { useState } from 'react';
import LoginForm from './LoginForm/LoginForm';
import Toggle from './Toggle/Toggle';

const App = () => {
  const [lightstate, setLightstate] = useState(true);

  const handleLoginSubmit = (data) => {
    console.log('Login data submitted:', data);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '50px' }}>
      <Toggle onToggle={() => setLightstate(!lightstate)} />
      <LoginForm onSubmit={handleLoginSubmit} theme={lightstate ? "light" : "dark"} showPasswordStrength />
    </div>
  );
};

export default App;