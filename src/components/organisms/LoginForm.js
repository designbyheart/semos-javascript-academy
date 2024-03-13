import { useState } from "react";

const LoginForm = ({ onSubmit }) => {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
    acceptedTerms: false,
  });

  return (
    <form
      onSubmit={(event) => onSubmit(event, loginFormData)}
      className={"auth-form"}
    >
      <label htmlFor="email">Email address</label>

      <input
        id="email"
        name="test"
        placeholder="Please enter your email"
        value={loginFormData.email}
        onChange={(event) =>
          setLoginFormData({ ...loginFormData, email: event.target.value })
        }
        type="text"
      />
      <label htmlFor="email">Password</label>
      <input
        id="password"
        name="password"
        placeholder="Please enter password"
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
          id="terms"
          type="checkbox"
          checked={loginFormData.acceptedTerms}
          onChange={() =>
            setLoginFormData({
              ...loginFormData,
              acceptedTerms: !loginFormData.acceptedTerms,
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

      <br />
      <button type="submit">Login</button>
      <br />
      <button
        type="reset"
        onClick={() =>
          setLoginFormData({
            email: "",
            password: "",
            acceptedTerms: false,
          })
        }
      >
        Cancel - Reset
      </button>
    </form>
  );
};

export default LoginForm;