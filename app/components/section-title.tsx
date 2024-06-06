import { ChevronRightIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import Link from "next/link";

interface SectionTitleProps {
  title: string;
}

const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <>
      <Card className="flex flex-row items-center justify-between border-none shadow-none">
        <h2 className="font-semibold">{title}</h2>

        <Link href={""}>
          <Button
            variant={"ghost"}
            className="hover:bg-card hover:text-primary hover:underline"
          >
            <p className="text-primary">Ver mais</p>

            <ChevronRightIcon className="text-primary" />
          </Button>
        </Link>
      </Card>
    </>
  );
};

export default SectionTitle;
