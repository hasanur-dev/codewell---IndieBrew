import { useState } from "react";
import Button from "../general/Button";
import Confirm from "./Confirm";
import { useNavigate } from "react-router-dom";
function Form() {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [tc, setTC] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [error, setError] = useState({
    email: "",
    fullName: "",
    password: "",
  });

  const handleSubmit = function (e) {
    e.preventDefault();
    setError((error) => ({
      ...error,
      email: email === "" ? "Enter a valid email address" : "",
    }));
    setError((error) => ({
      ...error,
      fullName: fullName === "" ? "Enter your full name" : "",
    }));
    setError((error) => ({
      ...error,
      password:
        password === "" ? "Password should be between 8 and 16 character" : "",
    }));
    setError((error) => ({
      ...error,
      password:
        password.length < 8
          ? "Password should be between 8 and 16 character"
          : "",
    }));

    if (
      error.email === "" &&
      error.fullName === "" &&
      error.password === "" &&
      tc
    ) {
      setSubmit(true);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className=" rounded-md bg-white p-7  shadow-md tablet:p-14"
    >
      {submit && <Confirm />}
      <h2 className="text-xl font-bold sm:text-2xl">
        Create your IndieBrew Account
      </h2>
      <div className="mt-3 space-y-6 mobile:mt-5 sm:mt-6">
        <div className="">
          <label className="text-sm font-bold mobile:text-base" htmlFor="email">
            Email
          </label>
          <div className="mt-0.5">
            <input
              className=" w-full rounded-md border border-gray-300 px-5 py-4 text-sm focus:outline-indigo-600  mobile:text-base"
              type="text"
              id="email"
              value={email}
              placeholder="john@example.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <p
            className={`${error.email !== "" ? "block" : "hidden"} mt-1 rounded-sm bg-red-500 px-3 py-1 text-sm text-white`}
          >
            Enter a valid email address
          </p>
        </div>
        <div className="">
          <label className="text-sm font-bold mobile:text-base" htmlFor="name">
            Full Name
          </label>
          <div className="mt-0.5">
            <input
              className=" w-full rounded-md border border-gray-300 px-5 py-4 text-sm focus:outline-indigo-600  mobile:text-base"
              type="text"
              id="name"
              value={fullName}
              placeholder="John Doe"
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <p
            className={`${error.fullName !== "" ? "block" : "hidden"} mt-1 rounded-sm bg-red-500 px-3 py-1 text-sm text-white`}
          >
            Enter your full name
          </p>
        </div>
        <div className="">
          <label className="text-sm font-bold mobile:text-base" htmlFor="pass">
            Password
          </label>
          <div className="relative mt-0.5">
            <input
              className=" w-full rounded-md border border-gray-300 px-5 py-4 text-sm focus:outline-indigo-600  mobile:text-base"
              type={passwordVisible ? "text" : "password"}
              id="pass"
              value={password}
              placeholder="At least 8 characters"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div
              onClick={() => setPasswordVisible(!passwordVisible)}
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer  p-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`${passwordVisible ? "hidden" : ""} h-6 w-6`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`${passwordVisible ? "" : "hidden"} h-6 w-6`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              </svg>
            </div>
          </div>
          <p
            className={`${error.password !== "" ? "block" : "hidden"} mt-1 rounded-sm bg-red-500 px-3 py-1 text-sm text-white`}
          >
            Password should be between 8 and 16 character
          </p>
        </div>
      </div>
      <div className="mt-4 flex items-start space-x-2  font-medium">
        <input
          type="checkbox"
          id="tc"
          className="h-4 w-4 accent-indigo-500"
          checked={tc}
          onChange={() => setTC(!tc)}
        />
        <label className="text-sm " htmlFor="tc">
          By creating an account on the IndieBrew, you agree to the <br />
          <a href="#" className="font-bold text-indigo-600 underline">
            Terms & Conditions
          </a>
        </label>
      </div>
      <div className="mt-4 sm:mt-6">
        <button
          className="text group relative w-full rounded-[4px] border
    border-indigo-600 px-4 py-3 text-sm  font-medium text-gray-100 transition-colors duration-300 hover:text-gray-800 sm:px-6 sm:py-4 sm:text-base"
        >
          <div className="absolute left-0 top-0   h-full w-2/3 rounded-r-lg bg-indigo-600 transition-all duration-300 group-hover:w-0"></div>
          <div className="absolute right-0 top-0  h-full  w-2/3 rounded-l-lg bg-indigo-600 transition-all duration-300 group-hover:w-0"></div>
          <p className="relative z-10">Create an Account</p>
        </button>
      </div>
    </form>
  );
}

export default Form;
