"use client";

import NavigationMenu from "@/components/molecules/NavigationMenu";
import LoginForm from "@/components/organisms/LoginForm";
import { isFieldValid } from "@/data/validators/fieldValidator";

const LoginPage = () => {
  const handleOnSubmit = async (event, loginFormData) => {
    event.preventDefault();
    console.log("loginFormData", loginFormData, event);

    if (
      !isFieldValid(loginFormData.email) ||
      !isFieldValid(loginFormData.password)
    ) {
      alert("Neispravni podaci");
      return;
    }

    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginFormData),
    });

    if (response.ok) {
      const jsonResponse = await response.json();
      console.log("response from server", jsonResponse);
      // TODO: Redirekcija ka private strani (dashboard)
    } else {
      console.error("Failed to fetch data", response);
    }
  };

  return (
    <div className="auth-page">
      <NavigationMenu />
      <LoginForm onSubmit={handleOnSubmit} />
    </div>
  );
};

export default LoginPage;
