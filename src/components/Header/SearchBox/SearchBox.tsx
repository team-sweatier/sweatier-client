import Image from "next/image";

function SearchBox() {
  return (
    <div className="w-40 h-6 relative">
      <input className="w-full bg-primary-20 rounded-[10px]" type="search" />
      <div className="absolute w-[15.22px] h-[15.22px] top-[3.75px] right-[8.03px]">
        <Image
          src="/assets/search.svg"
          fill
          alt="search-icon"
          className="object-cover"
        />
      </div>
    </div>
  );
}

export default SearchBox;
