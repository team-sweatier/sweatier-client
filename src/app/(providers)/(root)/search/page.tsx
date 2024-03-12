import api from "@/api";
import Page from "@/components/Page";
import MatchCardsList from "../(home)/_components/MatchCardsList";

async function SearchPage(props: {
  searchParams: {
    keyword: string;
  };
}) {
  const keyword = props.searchParams.keyword;
  const matches = await api.match.getMatchesByTitle(keyword);

  return (
    <Page>
      <div className="w-full relative">
        <MatchCardsList matches={matches} />
      </div>
    </Page>
  );
}

export default SearchPage;
