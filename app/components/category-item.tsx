import Image from "next/image";
import { Card } from "./ui/card";

const CategoryItem = () => {
  return (
    <>
      <Card className="flex max-h-[54px] min-w-[120px] max-w-fit flex-row items-center justify-center gap-3 overflow-y-auto rounded-full border-none px-4 py-3 shadow-md">
        <Image
          src={"/burguer.svg"}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="h-full w-auto object-contain"
        />

        <p>Pratos</p>
      </Card>
    </>
  );
};

export default CategoryItem;
