import api from "@/api";
import Heading from "@/components/Heading";
import Modal from "@/components/Modal";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

const tierPriority = {
  비기너: 1,
  아마추어: 2,
  세미프로: 3,
  프로: 4,
  마스터: 5,
};

function TiersInformationModal() {
  const { data: tiersInformations } = useQuery({
    queryKey: ["tiersInformation"],
    queryFn: api.tier.getTiersInformation,
  });

  const translatedTiersInformations = tiersInformations?.map((tier) => {
    let translatedTierValue;
    switch (tier.value) {
      case "pro":
        translatedTierValue = "프로";
        break;
      case "semi-pro":
        translatedTierValue = "세미프로";
        break;
      case "master":
        translatedTierValue = "마스터";
        break;
      case "amateur":
        translatedTierValue = "아마추어";
        break;
      case "beginner":
        translatedTierValue = "비기너";
        break;
    }
    return {
      ...tier,
      value: translatedTierValue as string,
    };
  });

  const sortedTierInformations = translatedTiersInformations?.sort((a, b) => {
    let priorityA = tierPriority[a.value as keyof typeof tierPriority];
    let priorityB = tierPriority[b.value as keyof typeof tierPriority];
    return priorityA - priorityB;
  });

  const tierImagePath: { [key: string]: string } = {
    비기너: "/assets/my_page/beginner.svg",
    아마추어: "/assets/my_page/amateur.svg",
    세미프로: "/assets/my_page/semi-pro.svg",
    프로: "/assets/my_page/pro.svg",
    마스터: "/assets/my_page/master.svg",
  };

  return (
    <Modal className="max-w-xs lg:max-w-[450px] max-h-[450px] lg:max-h-[600px]">
      <Heading className="text-center text-base pb-7 pt-0 lg:text-xl">
        티어 정보
      </Heading>

      <ul className="flex flex-col gap-y-5 pb-10">
        {sortedTierInformations?.map((tierInformation) => {
          const tierValue = tierInformation.value as string;
          const tierImage = tierImagePath[tierValue as string];

          return (
            <li key={tierInformation.value}>
              <dl className="flex flex-col gap-y-1 lg:gap-y-2">
                <dt className="flex gap-x-1 lg:gap-x-2 font-bold text-neutral-90 text-[11px] lg:text-base tracking-tighter">
                  <Image
                    src={tierImage}
                    alt={tierValue}
                    width={15}
                    height={15}
                  />
                  {tierInformation.value}
                </dt>
                <dd className="text-neutral-70 text-[11px] lg:text-sm tracking-tighter pb-2">
                  {tierInformation.description}
                </dd>
                <hr className="border-neutral-30"></hr>
              </dl>
            </li>
          );
        })}
      </ul>
    </Modal>
  );
}

export default TiersInformationModal;
