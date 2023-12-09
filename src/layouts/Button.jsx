
const Button = (props) => {
  return (
    <div>
      <button className="px-3 py-1 border-2 border-y-amber-950 bg-white hover:text-[#AB6B2E] transition-colors rounded-full">
        {props.title}
      </button>
    </div>
  );
};

export default Button;
