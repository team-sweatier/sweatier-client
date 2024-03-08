import Link from "next/link";
import SearchBox from "./components/SearchBox";

function Header() {
  return (
    <header className="px-5 py-4 mx-auto max-w-screen-md flex w-full items-center justify-between h-16 sm:h-20">
      <Link href="/" className="font-bold text-xl">
        Sweatier
      </Link>
      <div className="flex-grow mx-3 sm:mx-7 h-[65%] items-center">
        <SearchBox />
      </div>

      <button className="font-bold w-14 text-sm text-primary-100">
        로그인
      </button>
    </header>
  );
}

export default Header;
