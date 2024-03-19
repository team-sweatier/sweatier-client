import Icon from "@/components/Icon";
import { matchDetailIconsPath } from "@/utils/matchIcons";
import translateGender from "@/utils/translateMatches/translateGender";
import translateMatchType from "@/utils/translateMatches/translateMatchType";
import translateTier from "@/utils/translateMatches/translateTier";
import { StaticImageData } from "next/image";

interface matchUpTypeValuesType {
  [key: string]: string | number;
}

interface Icons {
  [key: string]: string | StaticImageData;
}

const matchIcons: Icons = matchDetailIconsPath as Icons;

function MatchUpTypeContainer({ match }: { match: any }) {
  const { gender, tierType, capability, applicants } = match;

  const matchIpTypekeys: { [key: string]: string } = {
    gender: "모집성별",
    matchType: "모집유형",
    capability: "모집정원",
    tier: "모집티어",
  };
  const matchUpTypeValues: matchUpTypeValuesType = {
    gender: translateGender(gender),
    matchType: translateMatchType(capability),
    capability: capability,
    applicants: applicants,
    tier: translateTier(tierType),
  };

  return (
    <div className="pb-8">
      {Object.entries(matchIpTypekeys).map(([key, label]) => {
        if (!(key in matchIpTypekeys)) return null;

        let value: string | number = matchUpTypeValues[key];

        if (key === "capability") {
          value = `${applicants}/${capability}`;
        }

        return (
          <div key={key} className="flex item-center gap-x-2 pb-1">
            <Icon alt={label} src={matchIcons[key]} classStyles="mb-1" />
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
