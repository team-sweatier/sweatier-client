import Link from "next/link";
import SearchBox from "./SearchBox";

function Header() {
  return (
    <header className="flex px-5 justify-between pt-5 pb-[10px]">
      <Link href="/" className="font-bold text-xl">
        Sweatier
      </Link>
      <SearchBox />
      <button className="font-medium text-sm text-primary-100">로그인</button>
    </header>
  );
}

export default Header;
