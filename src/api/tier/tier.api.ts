import { Response } from "@/types/Response.type";
import { client } from "..";
import { GetUserTiersData, TiersData } from "./tier.data";

async function getTiersInformation() {
  const response = await client.get<Response<TiersData>>("/tiers");
  const data = response.data;
  if (!data.success) throw new Error(data.message);

  const tiersInformations = data.result;

  return tiersInformations;
}

async function getUserTiers() {
  const response = await client.get<Response<GetUserTiersData>>("/users/tier");
  const data = response.data;
  if (!data.success) throw new Error(data.message);

  const userTiers = data.result;
  return userTiers;
}

const tierAPI = {
  getTiersInformation,
  getUserTiers,
};

export default tierAPI;
