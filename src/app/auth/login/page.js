'use client';

import NavigationMenu from '@/components/molecules/NavigationMenu';
import LoginForm from '@/components/organisms/LoginForm';

const LoginPage = () => {
  const handleOnSubmit = async (event, loginFormData) => {
    event.preventDefault();
    console.log("loginFormData", loginFormData, event);
    // TODO: Implementirati logiku za slanje podataka na server
  };

  return (
    <div className="auth-page login-page">
      <NavigationMenu />
      <h1>Login</h1>
      <LoginForm onSubmit={handleOnSubmit} />
    </div>
  );
};

export default LoginPage;
