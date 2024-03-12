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

// ?match-name={경기명}
async function getMatchesByTitle(keyword: string) {
  const response = await client.get(`/matches`, {
    params: {
      "match-name": keyword,
    },
  });

  const data = response.data;
  if (!data.success) throw new Error(data.error.message);

  const matches = data.result;

  return matches;
}

const matchAPI = {
  getMatches,
  getMatchesByTitle,
};

export default matchAPI;
