import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { ArrowDownIcon } from "lucide-react";

const ProductItem = () => {
  return (
    <>
      <div className="relative flex flex-col gap-2">
        <Badge className="absolute left-1 top-1 cursor-default px-2 py-0.5 text-sm font-semibold hover:bg-primary">
          <ArrowDownIcon size={14} />

          <p>30%</p>
        </Badge>

        <Image
          src={"/food.png"}
          alt="Food"
          width={0}
          height={0}
          sizes="100vw"
          className="h-full max-h-[150px] min-h-[150px] w-full rounded-lg object-cover md:min-h-[165px] lg:min-h-[180px] lg:max-w-full"
        />

        <div>
          <p className="truncate font-medium">Picanha grelhada e fritas</p>

          <div className="flex flex-row items-center gap-1">
            <p className="font-semibold">R$ 38,50</p>

            <p className="text-sm text-muted-foreground line-through">
              R$ 55,00
            </p>
          </div>

          <Link href={""}>
            <p className="truncate text-sm text-muted-foreground">
              Bistro Verdejante
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
