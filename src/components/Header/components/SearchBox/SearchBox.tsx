import Image from "next/image";

function SearchBox() {
  return (
    <div className="relative h-full flex items-center">
      <input
        className="w-full bg-primary-20 rounded-[20px] h-full"
        type="search"
      />
      <div className="absolute right-2 sm:top-1.8 sm:right-3 ">
        <Image
          src="/assets/search.svg"
          width={22}
          height={22}
          alt="search-icon"
        />
      </div>
    </div>
  );
}

export default SearchBox;
