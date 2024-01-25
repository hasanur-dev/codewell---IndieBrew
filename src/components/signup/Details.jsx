function Details() {
  return (
    <div className="lg:max-w-[458px]">
      <h1 className="text-2xl font-bold mobile:text-3xl lg:text-4xl">
        Create your personalized feed.
      </h1>
      <ul className="mt-4 space-y-4 text-sm font-medium *:flex *:gap-1 mobile:mt-6 mobile:space-y-6 mobile:text-base mobile:*:gap-2 lg:mt-8 lg:text-lg">
        <li>
          <span className="text-xl mobile:text-2xl">🎈</span>
          <p>
            <span className="font-bold">Over 20 resources.</span> With resources
            ranging from Reddit to IndieHackers, we've got all your needs
            covered.
          </p>
        </li>
        <li>
          <span className="text-xl mobile:text-2xl"> 🗞 </span>
          <p>
            <span className="font-bold">Delivered weekly.</span> Every week at
            exactly Tuesday 12:00 P.M EST - expect a value-packed digest right
            in your email.
          </p>
        </li>
        <li>
          <span className="text-xl mobile:text-2xl"> 💡 </span>
          <p>
            <span className="font-bold">Unlimited ideas.</span> With all the
            ideas you'll be reading about, what's stopping you from creating a
            sustainable startup?
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Details;
