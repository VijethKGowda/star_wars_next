import PropTypes from 'prop-types';

const Button = ({ onClick, children, className, type, disable }) => {

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <button
      onClick={onClick}
      type={type}
      disable={disable}
      className={classNames(className, "text-white px-8 py-4 border border-yellow-200 hover:border-yellow-500")}
    >
      {children}
    </button>
  )
}

export default Button

Button.propTypes = {
  disable: PropTypes.Boolean
};