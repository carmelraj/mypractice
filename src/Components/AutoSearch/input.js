const AutoSearchInput = ({
  type,
  placeholder,
  name,
  value,
  onChange,
  onKeyDown,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};
export default AutoSearchInput;
