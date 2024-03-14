import api from "@/api";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

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

  const tierImagePath: { [key: string]: string } = {
    beginner: "/assets/my_page/beginner.svg",
    amateur: "/assets/my_page/amateur.svg",
    semiPro: "/assets/my_page/semi-pro.svg",
    professional: "/assets/my_page/pro.svg",
    master: "/assets/my_page/master.svg",
  };

  return (
    <>
      <div className="flex items-center pb-6">
        <h4 className="font-black pr-1">나의 티어</h4>
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
        {TranslatedMyTiers?.slice(0, 3)?.map((myTier) => {
          const tierValue = myTier.value as string;
          const tierImage = tierImagePath[tierValue as string];
          return (
            myTier?.sportType?.name && (
              <div className="relative">
                <Image
                  src="/assets/my_page/polygon.svg"
                  alt="육각형"
                  width={92}
                  height={92}
                />
                <Image
                  src={tierImage}
                  alt={tierValue}
                  width={25}
                  height={25}
                  className="absolute top-[35px] left-[34px]"
                />
                <span className="absolute top-16 left-[34px] text-[12px] font-bold text-neutral-70">
                  {myTier.sportType.name}
                </span>
              </div>
            )
          );
        })}
      </div>
      <div className="flex justify-center gap-x-4">
        {TranslatedMyTiers?.slice(3, 5)?.map((myTier) => {
          const tierValue = myTier.value as string;
          const tierImage = tierImagePath[tierValue as string];
          return (
            myTier?.sportType?.name && (
              <div className="relative">
                <Image
                  src="/assets/my_page/polygon.svg"
                  alt="육각형"
                  width={92}
                  height={92}
                />
                <Image
                  src={tierImage}
                  alt={tierValue}
                  width={25}
                  height={25}
                  className="absolute top-[35px] left-[34px]"
                />
                <span className="absolute top-16 left-7 text-[12px] font-bold text-neutral-70">
                  {myTier.sportType.name}
                </span>
              </div>
            )
          );
        })}
      </div>
    </>
  );
}

export default MyTierSection;
