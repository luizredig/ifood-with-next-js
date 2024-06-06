import CategoryItem from "./category-item";

const CategoryList = () => {
  return (
    <>
      <div className="flex flex-row gap-3 overflow-x-scroll px-5 py-6 lg:px-32 [&::-webkit-scrollbar]:hidden">
        <CategoryItem label="Pratos" />
        <CategoryItem label="Lanches" />
        <CategoryItem label="Japonesa" />
        <CategoryItem label="Pizza" />
        <CategoryItem label="Sobremesas" />
        <CategoryItem label="Sucos" />
        <CategoryItem label="Refrigerantes" />
      </div>
    </>
  );
};

export default CategoryList;
