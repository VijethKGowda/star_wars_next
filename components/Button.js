const Button = ({ onClick, children, className, type }) => {

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <button
      onClick={onClick}
      type={type}
      className={classNames(className, "text-white px-8 py-4 border border-yellow-200 hover:border-yellow-500")}
    >
      {children}
    </button>
  )
}

export default Button