import { client } from "..";
import { RatingDto } from "./rating.dto";

async function rateParticipants({
  matchId,
  ratings,
}: {
  matchId: string;
  ratings: RatingDto[];
}) {
  const requestRatings = {
    ratings: ratings,
  };
  const response = await client.post(
    `/matches/${matchId}/rating`,
    requestRatings
  );
  const data = response.data;
  if (!data.success) throw new Error(data.error.message);

  const user = data.result;

  return user;
}

async function checkMyRatings(matchId: string) {
  const response = await client.get(`/users/${matchId}/rates`);

  const data = response.data;
  if (!data.success) throw new Error(data.error.message);
  const myRatings = data.result;
  return myRatings;
}

const ratingAPI = {
  rateParticipants,
  checkMyRatings,
};

export default ratingAPI;
