import CategoryItem from "./category-item";

const CategoryList = () => {
  return (
    <>
      <div className="flex flex-row gap-3 overflow-x-scroll px-5 py-6 [&::-webkit-scrollbar]:hidden">
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
      </div>
    </>
  );
};

export default CategoryList;
