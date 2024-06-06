import Banner from "./components/banner";
import CategoryList from "./components/category-list";
import ProductList from "./components/product-list";
import Search from "./components/search";
import SectionTitle from "./components/section-title";

export default function Home() {
  return (
    <>
      <div className="hidden rounded-none border-none sm:flex">
        <Banner
          src="/first-banner.png"
          alt=""
          className="h-auto w-full object-contain"
        />
      </div>

      <div className="px-5 pt-6">
        <Search />
      </div>

      <CategoryList />

      <div className="flex rounded-lg px-5 sm:hidden lg:px-32">
        <Banner
          src="/mobile-second-banner.png"
          alt="Até 30% de desconto em pizzas!"
          className="min-h-[150px] w-full rounded-lg object-contain"
        />
      </div>

      <div className="px-5 pb-4 pt-6 lg:px-32">
        <SectionTitle title="Pedidos recomendados" />
      </div>

      <ProductList />

      <div className="flex flex-row gap-5 rounded-lg px-5 pt-6 lg:px-32">
        <Banner
          src="/desktop-second-banner.png"
          alt="Até 30% de desconto em pizzas!"
          className="hidden h-auto max-h-[215px] w-full rounded-lg object-cover sm:flex sm:w-1/2"
        />

        <Banner
          src="/third-banner.png"
          alt="A partir de R$17,90 em lanches!"
          className="h-auto max-h-[215px] w-full rounded-lg object-cover sm:w-1/2"
        />
      </div>
    </>
  );
}
