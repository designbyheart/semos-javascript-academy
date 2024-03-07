'use client';

import InputField from "../molecules/InputField";

const fields = [
  { placeholder: "Name", id: "name" },
  { placeholder: "Email", id: "email", type: "email" },
  { placeholder: "Password", id: "password", type: "password" },
  {
    label: "I agree to the terms and conditions",
    id: "terms",
    type: "checkbox",
  },
];

export default function SignUpForm() {
    return (
      <div className="auth-form sign-up-form">
        {/* inputs: name, email, password, checkbox  */}
        <h1>Create Your Account</h1>
        {fields.map((field, index) => (
          <InputField key={field.id} id={field.id} type={field.type} label={field.label} placeholder={field.placeholder}/>
        ))}
      </div>
    );
};