import api from "@/api";
import Page from "@/components/Page";
import MatchCardsList from "../(home)/_components/MatchCardsList";

async function SearchPage(props: {
  searchParams: {
    keywords: string;
  };
}) {
  const keywords = props.searchParams.keywords;
  const matches = await api.match.getMatchesByTitle(keywords);

  return (
    <Page>
      <div className="w-full relative">
        <MatchCardsList matches={matches} />
      </div>
    </Page>
  );
}

export default SearchPage;
