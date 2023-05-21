const Button = (props) => {
  return (
    <button
      className={`${props.bgColor} hover:${props.bgColorHover} ${props.textColor} font-bold py-2 px-4 rounded`}
      onClick={() => props.onClickBtn()}
    >
      {props.children}
    </button>
  );
};

export default Button;
