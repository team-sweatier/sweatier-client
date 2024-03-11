import { Response } from "@/types/Response.type";
import { client } from "..";

async function getTiersInformation() {
  const response = await client.get<Response>("/tiers");
  const data = response.data;
  if (!data.success) throw new Error(data.message);

  const tiersInformations = data.result;

  return tiersInformations;
}

const tierAPI = {
  getTiersInformation,
};

export default tierAPI;
