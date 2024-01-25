import { useState } from "react";
import Button from "../general/Button";

function Header() {
  const [nav, setNav] = useState(false);
  return (
    <header className=" relative mt-6 flex items-center justify-between gap-3">
      <div className="logo">
        <img src="/Assets/Logo.svg" alt="Brand Logo" />
      </div>
      <div>
        <div
          className={`cursor-pointer ${nav ? "hidden" : "sm:hidden"}`}
          onClick={() => setNav(!nav)}
        >
          <img src="/Assets/Hamburger Menu.svg" alt="" />
        </div>
        <nav
          className={`${nav ? "absolute right-0 top-0 flex items-start rounded-sm border bg-white px-3 py-4 sm:border-none sm:px-0 sm:py-0" : "hidden sm:block sm:border-none"} `}
        >
          <ul
            className={`${nav ? "flex-col " : ""} flex items-center gap-6 text-sm font-medium text-gray-800 sm:flex-row`}
          >
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <Button to={"/signup"}>
                <p className="relative z-10 font-extralight">
                  <span className="font-medium">Get Started</span>- it's free
                </p>
              </Button>
            </li>
          </ul>
          {nav && (
            <button
              className="rounded-full bg-red-400 px-2 sm:hidden"
              onClick={() => setNav(!nav)}
            >
              X
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
