'use client';

import InputField from "../molecules/InputField";

const fields = [
  { placeholder: "Name", id: "name", label:"Name" },
  { placeholder: "Email", id: "email", type: "email", label: "Email address" },
  { placeholder: "Password", id: "password", type: "password", label: "Password" },
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
        {fields.map((field, index) => (
          <InputField key={field.id} id={field.id} type={field.type} label={field.label} placeholder={field.placeholder}/>
        ))}
      </div>
    );
};