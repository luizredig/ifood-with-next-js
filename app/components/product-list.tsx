import ProductItem from "./product-item";

const ProductList = () => {
  return (
    <>
      <div className="flex flex-row gap-3 overflow-x-scroll px-5 [&::-webkit-scrollbar]:hidden">
        <div className="h-fit w-[150px] md:w-[165px] lg:w-[180px]">
          <ProductItem />
        </div>
        <div className="h-fit w-[150px] md:w-[165px] lg:w-[180px]">
          <ProductItem />
        </div>
        <div className="h-fit w-[150px] md:w-[165px] lg:w-[180px]">
          <ProductItem />
        </div>
        <div className="h-fit w-[150px] md:w-[165px] lg:w-[180px]">
          <ProductItem />
        </div>
        <div className="h-fit w-[150px] md:w-[165px] lg:w-[180px]">
          <ProductItem />
        </div>
        <div className="h-fit w-[150px] md:w-[165px] lg:w-[180px]">
          <ProductItem />
        </div>
        <div className="h-fit w-[150px] md:w-[165px] lg:w-[180px]">
          <ProductItem />
        </div>
        <div className="h-fit w-[150px] md:w-[165px] lg:w-[180px]">
          <ProductItem />
        </div>
        <div className="h-fit w-[150px] md:w-[165px] lg:w-[180px]">
          <ProductItem />
        </div>
      </div>
    </>
  );
};

export default ProductList;
