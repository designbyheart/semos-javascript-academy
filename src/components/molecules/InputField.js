export default function InputField({ label, type = 'text', value, id, onChange, placeholder}) {
    return (
      <div className="input-field-container">
        {label && <label htmlFor={id}>{label}</label>}
        <input
         type={type}
          onChange={onChange} defaultValue={value} 
        placeholder={placeholder} />
      </div>
    );
}