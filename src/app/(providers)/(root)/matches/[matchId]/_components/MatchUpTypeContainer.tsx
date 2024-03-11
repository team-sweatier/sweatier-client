import Icon from "@/components/Icon";
import { matchDetailIcons } from "@/utils/matchIcons";
import { StaticImageData } from "next/image";

// 인덱스 시그니처를 추가: 모든 문자열 키에 string 값을 반환
interface Data {
  [key: string]: string | number;
}

// 아이콘에 대한 인덱스 시그니처 추가
interface Icons {
  [key: string]: string | StaticImageData;
}

const matchIcons: Icons = matchDetailIcons as Icons;

const temporaryData: Data = {
  id: "123dfs23",
  gender: "female",
  matchType: "1:1",
  capability: 2,
  applicants: 1,
  tier: "모든티어",
};

const temporaryDataLabel: { [key: string]: string } = {
  gender: "모집성별",
  matchType: "모집유형",
  capability: "모집정원",
  tier: "모집티어",
};

function MatchUpTypeContainer() {
  return (
    <div className="pb-8">
      {Object.entries(temporaryDataLabel).map(([key, label]) => {
        if (key === "id" || !(key in temporaryData)) return null;

        let value: string | number = temporaryData[key];

        if (key === "capability") {
          value = `${temporaryData.applicants}/${temporaryData.capability}`;
        }

        return (
          <div key={key} className="flex item-center gap-x-2 pb-1">
            <Icon
              alt={label}
              src={matchIcons[key]}
              classStyles="h-full w-full"
            />
            <span>{label}</span>
            <span>|</span>
            <span className="font-bold">{value}</span>
          </div>
        );
      })}
    </div>
  );
}

export default MatchUpTypeContainer;
