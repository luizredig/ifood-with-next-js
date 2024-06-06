import Banner from "./components/banner";
import CategoryList from "./components/category-list";
import Search from "./components/search";

export default function Home() {
  return (
    <>
      <div className="hidden rounded-none border-none sm:flex">
        <Banner
          src="/first-banner.png"
          alt="Até 30% de desconto em pizzas!"
          className="h-auto w-full object-contain"
        />
      </div>

      <div className="px-5 pt-6">
        <Search />
      </div>

      <CategoryList />

      <div className="flex rounded-lg px-5 sm:hidden">
        <Banner
          src="/second-banner.png"
          alt="Até 30% de desconto em pizzas!"
          className="h-auto w-full object-contain"
        />
      </div>
    </>
  );
}
