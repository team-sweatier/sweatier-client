import { Response } from "@/types/Response.type";
import { client } from "..";
import { MatchDto } from "./match.dto";

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

async function createMatch(matchDto: MatchDto) {
  const response = await client.post(`/matches`, {
    data: {
      matchDto,
    },
  });

  const data = response.data;
  if (!data.success) throw new Error(data.error.message);

  const result = data.result;

  return result;
}

async function getMatchesByMatchId(matchId: string) {
  const response = await client.get<Response>(`/matches/${matchId}`);

  const data = response.data;
  if (!data.success) throw new Error(data.message);

  const match = data.result;

  return match;
}

const matchAPI = {
  getMatches,
  getMatchesByTitle,
  createMatch,
  getMatchesByMatchId,
};

export default matchAPI;
