import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Search = () => {
  return (
    <>
      <div className="relative">
        <Input
          placeholder="Buscar restaurantes"
          className="border-none bg-background"
        />

        <Button size={"icon"} className="absolute right-0 top-0">
          <SearchIcon />
        </Button>
      </div>
    </>
  );
};

export default Search;
