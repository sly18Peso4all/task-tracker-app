const Button = ({ color, text, onClick }) => {
  return (
    <div>
      <button
        style={{ backgroundColor: color }}
        onClick={onClick}
        className="btn"
      >
        {" "}
        {text}{" "}
      </button>
    </div>
  );
};

export default Button;
