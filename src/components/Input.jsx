export default function Input({ type, id, name, value, placeholder, ...rest }) {
  return (
    <input
      className="inputVal"
      type={type === 'password' ? 'password' : 'text'}
      name={name}
      id={id}
      value={value}
      placeholder={placeholder}
      {...rest}
    />
  )
}
