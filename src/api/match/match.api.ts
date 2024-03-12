import { client } from "..";

async function getMatches(sportType: string, date: string, region?: string) {
  const response = await client.get("/matches", {
    params: {
      sportType,
      date,
      region,
    },
  });

  const data = response.data;
  if (!data.success) throw new Error(data.error.message);

  const matches = data.result;

  return matches;
}

async function getMatchesByTitle(keywords: string) {
  const response = await client.get(`/matches/search`, {
    params: {
      keywords: keywords,
    },
  });

  const data = response.data;
  if (!data.success) throw new Error(data.error.message);

  const matches = data.result;

  return matches;
}

async function getMatch(matchId: string) {
  const response = await client.get(`/matches/${matchId}`);

  const data = response.data;
  if (!data.success) throw new Error(data.error.message);

  const matches = data.result;

  return matches;
}

const matchAPI = {
  getMatches,
  getMatchesByTitle,
  getMatch,
};

export default matchAPI;
