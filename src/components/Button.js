function Button({ className, onClick, children, ariaLabel, tabIndex = '0' }) {
  return (
    <button
      className={className}
      onClick={onClick}
      aria-label={ariaLabel}
      tabIndex={tabIndex}
    >
      {children}
    </button>
  );
}

export default Button;
