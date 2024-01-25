import Button from "../general/Button";

function Hero() {
  return (
    <main className="mt-8 grid-cols-2 items-center sm:mt-10 md:mt-24 tablet:grid">
      <div className="col-start-2 mx-auto max-w-96 px-4 tablet:max-w-full">
        <img src="/Assets/Feed Mockup.png" alt="" />
      </div>
      <div className="col-start-1 row-start-1">
        <div>
          <h1 className="mt-4 text-4xl font-bold mobile:mt-6 mobile:text-5xl tablet:mt-0">
            Your weekly <br /> personal feed digest.
          </h1>
          <p className="mt-2 max-w-[670px] text-xs text-gray-500 mobile:mt-4 mobile:text-base">
            With IndieBrew, get personal feeds from resources all around the
            web, including Reddit, HackerNews, IndieHackers, and much more.
          </p>
          <div className="mt-2 mobile:mt-4 tablet:mt-6">
            <Button to="/signup" type="primary">
              <p className="relative z-10 font-extralight">
                <span className="font-medium">Get Started</span>- it's free
              </p>
            </Button>
          </div>
        </div>
        <div className="mt-5 mobile:mt-6">
          <img src="/Assets/User Avatars.svg" className="h-7 sm:h-9" />
          <p className="mt-2 text-xs text-gray-500 mobile:text-base">
            Join <span className="font-bold text-indigo-600">32,642</span>{" "}
            IndieBrewers in curating their personal digest.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Hero;
