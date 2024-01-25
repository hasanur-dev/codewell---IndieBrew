import Form from "./Form";

function Main({ children }) {
  return (
    <main className=" px-4 pb-14 mobile:px-6 md:px-10">
      <div className="mx-auto mt-10 max-w-[1110px] space-y-10 sm:mt-14 tablet:mt-24  tablet:grid tablet:grid-cols-2 tablet:items-center tablet:gap-x-8 lg:gap-x-0">
        {children}
      </div>
    </main>
  );
}

export default Main;
