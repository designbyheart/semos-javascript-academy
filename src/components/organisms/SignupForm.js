"use client";

import Link from "next/link";
import { useState } from "react";

const SignupForm = ({ onSubmit }) => {
  const [signupFormData, setSignupFormData] = useState({
    name: "",
    email: "",
    password: "",
    acceptedTerms: false,
  });

  return (
    <form
      onSubmit={(event) => onSubmit(event, signupFormData)}
      className="auth-form"
    >
      <h1>Create your account</h1>

      <input
        id="name"
        name="test"
        placeholder="John Doe"
        value={signupFormData.name}
        onChange={(event) =>
          setSignupFormData({ ...signupFormData, name: event.target.value })
        }
        type="text"
      />

      <input
        id="email"
        name="test"
        placeholder="johnnythedesigner@gmail.com"
        value={signupFormData.email}
        onChange={(event) =>
          setSignupFormData({ ...signupFormData, email: event.target.value })
        }
        type="text"
      />
      <input
        id="password"
        name="password"
        placeholder="**********"
        value={signupFormData.password}
        type="password"
        onChange={(event) =>
          setSignupFormData({
            ...signupFormData,
            password: event.target.value,
          })
        }
      />
      <div className="checkbox-container">
        <input
          id="terms"
          type="checkbox"
          checked={signupFormData.acceptedTerms}
          onChange={() =>
            setSignupFormData({
              ...signupFormData,
              acceptedTerms: !signupFormData.acceptedTerms,
            })
          }
        />
        <label htmlFor="terms">
          {" "}
          I am accepting{" "}
          <a href="/terms" target="_blank">
            terms and conditions
          </a>
        </label>
      </div>

      <button type="submit">Sign Up</button>

      <Link href="/" className="link">
        Cancel
      </Link>
    </form>
  );
};

export default SignupForm;
