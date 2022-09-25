const Button = ({ onClick, children }) => {

  return (
    <button
      onClick={onClick}
      className="text-white w-full px-8 py-4 border  border-yellow-200 hover:border-yellow-500 rounded-md"
    >
      {children}
    </button>
  )
}

export default Button