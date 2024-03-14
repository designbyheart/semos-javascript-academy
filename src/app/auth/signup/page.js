'use client'

import NavigationMenu from "@/components/molecules/NavigationMenu";
import SignUpForm from "@/components/organisms/SignupForm";
import { useEffect } from "react";

export default function SignUpPage() {
    useEffect(() => {
      const token = localStorage.getItem("token");
      console.log("token is here:===", token);
    }, []);

    const test = () => {}

    return (
      <div className="auth-page sign-up-page">
        <NavigationMenu />
        <h1>Create Your Account</h1>
        <SignUpForm />
      </div>
    );
}