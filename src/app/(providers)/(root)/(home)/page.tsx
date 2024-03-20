// "use client";

import api from "@/api";
import Page from "@/components/Page";
import day from "@/utils/day";
import { regions } from "@/utils/matchTypes";
import { cookies } from "next/headers";
import Banner from "./_components/Banner";
import MatchesContainer from "./_components/MatchesContainer";

async function HomePage(props: {
  searchParams: {
    date: string;
    sportType: string;
    region: (typeof regions)[number];
  };
}) {
  const {
    date = day().format("YYYY-MM-DD"),
    sportType = "basketball",
    region = undefined,
  } = props.searchParams;


  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken");
  
  const matches = await api.match.getMatches(sportType, date, region, accessToken);
  // const { tierId } = useProfileStore();
  // console.log(tierId);
  // tierId 타입은 string[]

  return (
    <Page>
      <Banner />
      <MatchesContainer
        matches={matches}
        date={date}
        sportType={sportType}
        region={region}
      />
    </Page>
  );
}

export default HomePage;
