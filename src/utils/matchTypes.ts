export type MatchTypesObject = {
  [key: string]: string | number;
};

const sports: MatchTypesObject[] = [
  { 농구: "basketball" },
  { 배드민턴: "badminton" },
  { 야구: "baseball" },
  { 축구: "soccer" },
  { 테니스: "tennis" },
];

const gender: MatchTypesObject[] = [
  { 혼성: "both" },
  { 남성: "male" },
  { 여성: "female" },
];

const players: MatchTypesObject[] = [
  { "1:1": 2 },
  { "2:2": 4 },
  { "3:3": 6 },
  { "4:4": 8 },
  { "5:5": 10 },
  { "6:6": 12 },
  { "7:7": 14 },
  { "8:8": 16 },
  { "9:9": 18 },
  { "10:10": 20 },
  { "11:11": 22 },
];

const matchTypes = {
  sports,
  players,
  gender,
};

export default matchTypes;
