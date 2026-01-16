const Button = ({
    text,
    onClick,
    type = "button",
    variant = "primary",
  }) => {
    const baseStyle =
      "px-6 py-3 rounded-lg font-semibold transition";
  
    const variants = {
      primary:
        "bg-blue-600 text-white hover:bg-blue-700",
      secondary:
        "bg-white text-blue-600 border border-blue-600 hover:bg-blue-50",
    };
  
    return (
      <button
        type={type}
        onClick={onClick}
        className={`${baseStyle} ${variants[variant]}`}
      >
        {text}
      </button>
    );
  };
  
  export default Button;
  