export default function Button({
  children,
  type,
  variant,
  className,
  ...rest
}) {
  return (
    <button
      className={className}
      type={type === 'submit' ? 'submit' : 'button'}
      {...rest}>
      {children}
    </button>
  )
}
