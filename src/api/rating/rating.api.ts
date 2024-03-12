import { client } from "..";
import { RatingDto } from "./rating.dto";

async function rateParticipants(matchId: string, ratings: RatingDto[]) {
  await client.post(`/matches/${matchId}/rating`, ratings);
}

const ratingAPI = {
  rateParticipants,
};

export default ratingAPI;
