import Image from "next/image";
import { Card } from "./ui/card";

interface CategoryItemProps {
  label: string;
}

const CategoryItem = ({ label }: CategoryItemProps) => {
  return (
    <>
      <Card className="flex max-h-[54px] flex-row items-center justify-center gap-2 rounded-full border-none px-8 py-3 shadow-md">
        <Image
          src={"/burguer.svg"}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="h-[36px] w-auto object-contain"
        />

        <p>{label}</p>
      </Card>
    </>
  );
};

export default CategoryItem;
