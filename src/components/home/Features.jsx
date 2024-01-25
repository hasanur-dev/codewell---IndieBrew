function Features() {
  return (
    <section className="px-4 py-5 sm:px-9 md:py-10 lg:py-20">
      <div className="mx-auto grid max-w-[1111px]  items-center gap-y-7 mobile:gap-y-9 md:grid-cols-5 md:gap-x-7 md:gap-y-16 tablet:gap-x-9 lg:gap-x-24">
        <div className="max-w-72 md:col-span-2 tablet:max-w-max">
          <img src="/Assets/Social Media Icons.png" alt="" />
        </div>
        <div className="max-w-96 md:col-span-3 md:col-start-1 md:row-start-1 tablet:max-w-max">
          <h2 className="text-2xl font-bold mobile:text-3xl lg:text-4xl">
            Curate your feed from dozens of resources.
          </h2>
          <p className="mt-2 text-sm text-gray-600 mobile:mt-4 mobile:text-base">
            We cover all major platforms where one could want to curate their
            feed from. Reddit, ProductHunt, IndieHackers and so much more.
          </p>
          <a
            href="#"
            className="group mt-2 inline-block text-sm font-bold text-indigo-600  mobile:mt-3 mobile:text-base"
          >
            See full list of resources &rarr;
            <div className="h-[2px] w-0 rounded-full bg-indigo-600 transition-all duration-300 group-hover:w-full"></div>
          </a>
        </div>
        <div className="max-w-72 md:col-span-2 tablet:max-w-max ">
          <img src="Assets/Phone Mockup.png" alt="" />
        </div>
        <div className="max-w-96 md:col-span-3 tablet:max-w-max lg:pl-7 lg:pr-5">
          <h2 className="text-2xl font-bold mobile:text-3xl lg:text-4xl">
            Access your feed from the comfort of your phone.
          </h2>
          <p className="mt-2 text-sm text-gray-600 mobile:mt-4 mobile:text-base">
            With native apps for both iOS and Android, accessing your curated
            content has never been easier.
          </p>
          <a
            href="#"
            className="group mt-2 inline-block text-sm font-bold text-indigo-600 mobile:mt-3 mobile:text-base"
          >
            Sign up for the waitlist &rarr;
            <div className="h-[2px] w-0 rounded-full bg-indigo-600 transition-all duration-300 group-hover:w-full"></div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Features;
