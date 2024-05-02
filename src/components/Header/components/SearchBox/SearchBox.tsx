import search from "@/../public/assets/commons/search.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
function SearchBox() {
  const [keywords, setKeywords] = useState<string>("");
  const router = useRouter();
  const handleActiveEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      router.push(`/search?keywords=${keywords}`);
    }
  };
  return (
    <div className="relative max-w-[437px] h-full flex items-center">
      <input
        className="w-full bg-primary-20 rounded-[20px] h-full px-5 text-sm"
        type="search"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
        onKeyDown={(e) => handleActiveEnter(e)}
      />
      <Link
        href={`search?keywords=${keywords}`}
        className="absolute right-2 sm:top-1.8 sm:right-3 hover:opacity-65"
      >
        <Image src={search} alt="search-icon" />
      </Link>
    </div>
  );
}

export default SearchBox;
