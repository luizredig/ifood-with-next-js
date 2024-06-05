import Image from "next/image";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

const Header = () => {
  return (
    <>
      <Card className="flex h-16 flex-row items-end justify-between rounded-none border-none px-5 sm:items-center sm:px-32">
        <Image
          src={"/logo.svg"}
          width={130}
          height={40}
          alt="logo"
          sizes="100vw"
          className="h-auto w-[100px] object-contain pb-1 sm:w-[130px] sm:p-0"
        />

        <Button
          size={"icon"}
          variant={"ghost"}
          className="p-[10px] hover:bg-foreground/5"
        >
          <MenuIcon size={20} />
        </Button>
      </Card>
    </>
  );
};

export default Header;
