"use client";
import NavigationMenu from "@/components/molecules/NavigationMenu";
import SignUpForm from "@/components/organisms/SignupForm";
import { isFieldValid } from "@/data/validators/fieldValidator";

export default function SignUpPage() {
  const handleOnSubmit = async (event, signUpFormData) => {
    event.preventDefault();

    if (
      !isFieldValid(signUpFormData.name) ||
      !isFieldValid(signUpFormData.email) ||
      !isFieldValid(signUpFormData.password)
    ) {
      alert("Neispravni podaci");
      return;
    }

    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signUpFormData),
    });

    if (response.ok) {
      const jsonResponse = await response.json();
      console.log("response from server", jsonResponse);
      // TODO: Redirekcija ka private strani (dashboard)
    } else {
      console.error("Failed to signup", response);
    }
  };
  return (
    <div className="auth-page">
      <NavigationMenu />
      <SignUpForm onSubmit={handleOnSubmit} />
    </div>
  );
}
