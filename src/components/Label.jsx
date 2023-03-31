export default function Label({ children, name, ...rest }) {
  return (
    <label className='label' htmlFor={name} {...rest}>
      {children}
    </label>
  )
}
