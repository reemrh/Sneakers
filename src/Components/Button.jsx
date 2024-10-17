const Button = ({ label, iconURL, iconAlt, className, fullWidth }) => {
  "";

  return (
    <button
      className={` ${
        className
          ? `border-slate-gray border-2 py-3.5 bg-white-400  text-slate-gray `
          : `bg-gradient-to-r from-pink-500 to-purple-500 bg-purple-500 text-white`
      }   rounded-full flex justify-center py-4 gap-2 items-center px-6 text-xl ${
        fullWidth ? `w-full` : " "
      } `}
    >
      {label}{" "}
      {iconURL && <img src={iconURL} alt={iconAlt} className="w-5 h-5" />}
    </button>
  );
};

export default Button;
