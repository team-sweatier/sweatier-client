import api from "@/api";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Hexagon from "./Hexagon";

function MyTierSection({ onClickTierModal }: { onClickTierModal: () => void }) {
  const { data: userTiers } = useQuery({
    queryKey: ["userTiers"],
    queryFn: api.tier.getUserTiers,
  });

  const myTiers = userTiers?.tiers;

  const TranslatedMyTiers = myTiers?.map((myTier) => {
    if (typeof myTier === "string") return myTier;
    else {
      let translatedSportType;
      switch (myTier.sportType.name) {
        case "soccer":
          translatedSportType = "축구";
          break;
        case "badminton":
          translatedSportType = "배드민턴";
          break;
        case "basketball":
          translatedSportType = "농구";
          break;
        case "baseball":
          translatedSportType = "야구";
          break;
        case "tennis":
          translatedSportType = "테니스";
          break;
      }

      return {
        ...myTier,
        sportType: {
          ...myTier.sportType,
          name: translatedSportType,
        },
      };
    }
  });

  console.log(TranslatedMyTiers);

  return (
    <>
      <div className="flex items-center">
        <h4 className="py-4 font-black text-lg pr-1">나의 티어</h4>
        <button onClick={onClickTierModal}>
          <Image
            src="/assets/Info@3x.svg"
            width={14}
            height={14}
            alt="정보 아이콘"
          />
        </button>
        <p className="pl-3 text-xs">매일 오전 12시에 티어가 재배정됩니다.</p>
      </div>
      <div className="flex justify-center gap-x-4 py-4">
        {TranslatedMyTiers?.slice(0, 3)?.map(
          (myTier) =>
            myTier?.sportType?.name && (
              <Hexagon tier={myTier.value} sportType={myTier.sportType.name} />
            )
        )}
      </div>
      <div className="flex justify-center gap-x-4">
        {TranslatedMyTiers?.slice(3, 5)?.map(
          (myTier) =>
            myTier?.sportType?.name && (
              <Hexagon tier={myTier.value} sportType={myTier.sportType.name} />
            )
        )}
      </div>
    </>
  );
}

export default MyTierSection;
