const handleClick = () => {
  console.log("Button Clicked");
};

const Button = ({ text }: { text: string }) => {
  return (
    <button type="button" className="btn btn-primary" onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
