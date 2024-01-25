function Footer() {
  return (
    <footer className="bg-gray-100/30 px-4 py-16 text-gray-500 sm:px-9">
      <div className="mx-auto flex max-w-[1111px] flex-col gap-10 sm:flex-row sm:justify-between">
        <div className="text-xs mobile:max-w-[340px] mobile:text-sm md:text-base">
          <h3 className="text-base font-extrabold text-black mobile:text-lg sm:text-xl md:text-2xl">
            IndieBrew
          </h3>

          <p className="mt-1 sm:mt-2">
            With IndieBrew, get personal feeds from resources all around the
            web, including Reddit, HackerNews, and much more.
          </p>
          <p className="mt-3 ">Made with ❤ in the UK.</p>
        </div>
        <div className="grid grid-cols-2 gap-x-10 gap-y-5 text-sm sm:flex-grow tablet:text-base lg:flex-grow-0 lg:grid-cols-4">
          <div className="">
            <h3 className="font-extrabold text-black tablet:text-xl">
              Sitemap
            </h3>
            <ul className="mt-2 space-y-2 ">
              <li>
                <a href="#" className="group relative  pb-1">
                  Homepage{" "}
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-gray-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a href="#" className="group relative   pb-1">
                  Pricing
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-gray-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            </ul>
          </div>
          <div className=" ">
            <h3 className=" font-extrabold text-black tablet:text-xl">
              Resources
            </h3>
            <ul className="mt-2 space-y-2 ">
              <li>
                <a href="#" className="group relative  pb-1">
                  Support
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-gray-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a href="#" className="group relative  pb-1">
                  Contact
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-gray-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a href="#" className="group relative  pb-1">
                  FAQ
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-gray-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            </ul>
          </div>
          <div className=" ">
            <h3 className=" font-extrabold text-black tablet:text-xl">
              Company
            </h3>
            <ul className="mt-2 space-y-2 ">
              <li>
                <a href="#" className="group relative  pb-1">
                  About
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-gray-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a href="#" className="group relative  pb-1">
                  Customers
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-gray-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a href="#" className="group relative  pb-1">
                  Blog
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-gray-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            </ul>
          </div>
          <div className=" ">
            <h3 className=" font-extrabold text-black tablet:text-xl">
              Portfolios
            </h3>
            <ul className="mt-2 space-y-2 ">
              <li>
                <a href="#" className="group relative  pb-1">
                  HackerNews
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-gray-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a href="#" className="group relative  pb-1">
                  Reddit
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-gray-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a href="#" className="group relative  pb-1">
                  Twitter
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-gray-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
