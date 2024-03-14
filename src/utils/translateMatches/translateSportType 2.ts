import { newSports } from "@/utils/matchTypes";

export default function translateSportType(value: string) {
  const sport = newSports.find((sport) => sport.value === value);
  return sport ? sport.label : undefined;
}
