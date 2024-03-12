import search from "@/../public/assets/commons/search.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
function SearchBox() {
  const [keywords, setKeywords] = useState<string>();
  const router = useRouter();
  const handleActiveEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      router.push(`search?keywords=${keywords}`);
    }
  };
  return (
    <div className="relative h-full flex items-center">
      <input
        className="w-full bg-primary-20 rounded-[20px] h-full px-6"
        type="search"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
        onKeyDown={(e) => handleActiveEnter(e)}
      />
      <Link
        href={`search?keywords=${keywords}`}
        className="absolute right-2 sm:top-1.8 sm:right-3 "
      >
        <Image src={search} width={22} height={22} alt="search-icon" />
      </Link>
    </div>
  );
}

export default SearchBox;
