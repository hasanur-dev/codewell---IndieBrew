import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="px-4 pt-8 mobile:px-6 md:px-10">
      <div className="mx-auto flex max-w-[1110px] items-center justify-between gap-5">
        <div className="logo w-32 sm:w-auto">
          <img src="/Assets/Logo.svg" alt="Brand Logo" />
        </div>
        <Link to="/">
          <div className="flex items-center gap-3">
            <div className="rounded-md border bg-white p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={4}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </div>
            <p className="hidden text-lg font-bold sm:block">
              Back to homepage
            </p>
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Header;
