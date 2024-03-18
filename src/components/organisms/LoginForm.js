import Link from "next/link";
import { useState } from "react";

const LoginForm = ({ onSubmit }) => {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
    keepSigned: false,
  });

  return (
    <form
      onSubmit={(event) => onSubmit(event, loginFormData)}
      className="auth-form"
    >
      <h1>Sign in to your account</h1>

      <input
        id="email"
        name="test"
        placeholder="johnnythedesigner@gmail.com"
        value={loginFormData.email}
        onChange={(event) =>
          setLoginFormData({ ...loginFormData, email: event.target.value })
        }
        type="text"
      />
      <input
        id="password"
        name="password"
        placeholder="**********"
        value={loginFormData.password}
        type="password"
        onChange={(event) =>
          setLoginFormData({
            ...loginFormData,
            password: event.target.value,
          })
        }
      />
      <div className="checkbox-container">
        <input
          id="keepSigned"
          type="checkbox"
          checked={loginFormData.keepSigned}
          onChange={() =>
            setLoginFormData({
              ...loginFormData,
              keepSigned: !loginFormData.keepSigned,
            })
          }
        />
        <label htmlFor="keepSigned">Keep me signed in</label>
      </div>

      <button type="submit">Sign in</button>

      <Link href="/" className="link">
        Forgot your password?
      </Link>
    </form>
  );
};

export default LoginForm;
