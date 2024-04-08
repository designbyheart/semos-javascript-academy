export default function SearchField({ value, onChange }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
    />
  );
}