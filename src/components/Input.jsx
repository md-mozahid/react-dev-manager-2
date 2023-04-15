export default function Input({
  type,
  id,
  name,
  register,
  value,
  placeholder,
  ...rest
}) {
  return (
    <input
      className="inputVal"
      type={type === 'password' ? 'password' : 'text'}
      name={name}
      id={id}
      value={value}
      register={register}
      placeholder={placeholder}
      {...rest}
    />
  )
}
