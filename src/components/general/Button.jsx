import { Link } from "react-router-dom";

function Button({ children, to, type }) {
  const base = `text group relative rounded-[4px] border border-indigo-600
    px-4 py-3 text-sm font-medium  text-gray-100 transition-colors duration-300 hover:text-gray-800 sm:px-6 sm:py-4 sm:text-base`;
  const styles = {
    primary: base + "",
    full: base + " w-full",
  };
  return (
    <Link to={to}>
      <button className={styles[type]}>
        <div className="absolute left-0 top-0   h-full w-2/3 rounded-r-lg bg-indigo-600 transition-all duration-300 group-hover:w-0"></div>
        <div className="absolute right-0 top-0  h-full  w-2/3 rounded-l-lg bg-indigo-600 transition-all duration-300 group-hover:w-0"></div>
        {children}
      </button>
    </Link>
  );
}

export default Button;
