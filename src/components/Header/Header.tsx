import Link from "next/link";
import SearchBox from "./components/SearchBox";

function Header() {
  return (
    <header className="border shadow-sm">
      <div className="px-5 py-4 mx-auto max-w-screen-md flex w-full items-center justify-between h-16">
        <Link href="/" className="font-bold text-xl">
          Sweatier
        </Link>
        <div className="flex-grow mx-4 sm:mx-20 sm:h-8 h-full">
          <SearchBox />
        </div>

        <button className="font-bold w-14 text-sm text-primary-100">
          로그인
        </button>
      </div>
    </header>
  );
}

export default Header;
