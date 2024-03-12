import search from "@/../public/assets/commons/search.svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
function SearchBox() {
  const [keyword, setKeyword] = useState<string>();

  return (
    <div className="relative h-full flex items-center">
      <input
        className="w-full bg-primary-20 rounded-[20px] h-full px-6"
        type="search"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <Link
        href={`search?keyword=${keyword}`}
        className="absolute right-2 sm:top-1.8 sm:right-3 "
      >
        <Image src={search} width={22} height={22} alt="search-icon" />
      </Link>
    </div>
  );
}

export default SearchBox;
