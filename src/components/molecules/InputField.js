export default function InputField({
  label,
  type = "text",
  value,
  id,
  onChange,
  placeholder,
}) {
  if (type === "checkbox") {
    return (
      <div className="checkbox-container">
        <input
          type={type}
          onChange={onChange}
          defaultValue={value}
          placeholder={placeholder}
        />
        {label && <label htmlFor={id}>{label}</label>}
      </div>
    );
  }

  return (
    <div className="input-field-container">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        type={type}
        onChange={onChange}
        defaultValue={value}
        placeholder={placeholder}
      />
    </div>
  );
}
