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

const matchAPI = {
  getMatches,
};

export default matchAPI;
