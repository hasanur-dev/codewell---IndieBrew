import { useState } from "react";
import Button from "../general/Button";

function Header() {
  const [nav, setNav] = useState(false);
  return (
    <header className=" relative flex items-center justify-between gap-3 pt-6">
      <div className="logo">
        <img src="/Assets/Logo.svg" alt="Brand Logo" />
      </div>
      <div>
        <div
          className={`cursor-pointer ${nav ? "h-0 w-0 overflow-hidden" : "sm:hidden"}`}
          onClick={() => setNav(!nav)}
        >
          <img src="/Assets/Hamburger Menu.svg" alt="" />
        </div>
        <nav
          className={`animate-bou absolute right-0 top-6 flex items-center justify-center overflow-hidden rounded-[4px] transition-all duration-300 sm:top-auto  ${nav ? "  h-40  w-56 border bg-white sm:relative sm:top-auto sm:h-auto sm:w-auto sm:border-none sm:bg-transparent" : "h-0 w-0 overflow-hidden sm:relative sm:h-auto sm:w-auto sm:border-none "} `}
        >
          <ul
            className={`flex flex-col items-center gap-6 text-sm font-medium text-gray-800 sm:flex-row`}
          >
            <li>
              <a href="#" className="group relative  pb-1">
                Pricing
                <span className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-gray-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a href="#" className="group relative  pb-1">
                Support
                <span className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-gray-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <Button to={"/signup"} type="primary">
                <p className="relative z-10 font-extralight ">
                  <span className="font-medium">Get Started</span>- it's free
                </p>
              </Button>
            </li>
          </ul>

          <button
            className="mt-4 self-start rounded-full bg-red-400 px-2 sm:hidden"
            onClick={() => setNav(!nav)}
          >
            X
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
