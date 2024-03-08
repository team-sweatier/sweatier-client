import Image from "next/image";

function SearchBox() {
  return (
    <div className="relative h-full flex items-center">
      <input
        className="w-full bg-primary-20 rounded-[10px] h-full"
        type="search"
      />
      <div className="absolute right-2 sm:top-1.8 sm:right-3 ">
        <Image
          src="/assets/search.svg"
          layout="responsive"
          width={1}
          height={1}
          alt="search-icon"
        />
      </div>
    </div>
  );
}

export default SearchBox;
