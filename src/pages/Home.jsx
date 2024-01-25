import Features from "../components/home/Features";
import Footer from "../components/home/Footer";
import Header from "../components/home/Header";
import Hero from "../components/home/Hero";

function Home() {
  return (
    <div className="mx-auto">
      <div className="gradient bg-gray-100/60 px-4 pb-24 sm:px-9 tablet:pb-40">
        <div className="mx-auto max-w-[1111px] ">
          <Header />
          <Hero />
        </div>
      </div>
      <Features />
      <Footer />
    </div>
  );
}

export default Home;
