'use client';

import { useState } from 'react';

const LoginPage = () => {
    const [loginFormData, setLoginFormData] = useState({
      email: "",
      password: "",
      acceptedTerms: false,
    });

    console.log('email + password: ', loginFormData)

    const handleOnSubmit = async (event)=>{
        event.preventDefault();
        // console.log('loginFormData', loginFormData, event)
        // TODO: Implementirati logiku za slanje podataka na server
    }

    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={(event) => handleOnSubmit(event)}>
          <p>Ovo je forma</p>
          <label htmlFor="email">Email address</label>
          <br />
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
          <br />
          <br />
          <label htmlFor="email">Password</label>
          <br />
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
          <br />

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

          <br />
          <button type="submit">Login</button>
          <br />
          <button type="reset" 
          onClick={()=> setLoginFormData({
            email: "", 
            password: "",
            acceptedTerms: false
            })}
        >Cancel - Reset</button>
        </form>
      </div>
    );
};

export default LoginPage;
