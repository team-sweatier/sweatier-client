import { Response } from "@/types/Response.type";
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
  const response = await client.get<Response>(`/matches/${matchId}`);

  const data = response.data;
  if (!data.success) throw new Error(data.error.message);

  const result = data.result;

  return result;
}

//* match 게시물 작성
async function createMatch(matchDto: any) {
  const response = await client.post(`/matches`, matchDto);

  const data = response.data;
  if (!data.success) throw new Error(data.error.message);

  const matches = data.result;
  const { id } = matches;

  return { matchId: id };
}

//* match 상세 페이지 조회
async function getMatchByMatchId(matchId: string) {
  const response = await client.get<Response>(`/matches/${matchId}`);

  const data = response.data;
  if (!data.success) throw new Error(data.message);

  const match = data.result;

  return match;
}

//* match 경기 참여 신청
async function participateToMatch(matchId: string) {
  const response = await client.put<Response>(
    `/matches/${matchId}/participate`
  );
  const data = response.data;

  if (!data.success) throw new Error(data.message);

  const match = data.result;

  return match;
}

//* match 게사물 수정
async function updateMatch(matchId: string, matchDto: any) {
  const response = await client.put<Response>(`/matches/${matchId}`, matchDto);

  const data = response.data;
  if (!data.success) throw new Error(data.error.message);

  const matches = data.result;

  if (!matches) throw new Error("error");

  return matches;
}

//* match 게시물 삭제
async function deleteMatch(matchId: string) {
  const response = await client.delete<Response>(`/matches/${matchId}`);
  const data = response.data;
  if (!data.success) throw new Error(data.message);

  const match = data.result;

  return match;
}

const matchAPI = {
  getMatches,
  getMatch,
  getMatchesByTitle,
  createMatch,
  getMatchByMatchId,
  participateToMatch,
  updateMatch,
  deleteMatch,
};

export default matchAPI;
