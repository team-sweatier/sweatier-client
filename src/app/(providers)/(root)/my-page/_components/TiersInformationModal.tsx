import api from "@/api";
import Heading from "@/components/Heading";
import Modal from "@/components/Modal";
import { useQuery } from "@tanstack/react-query";

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

  return (
    <Modal className="max-w-xs max-h-[450px]">
      <Heading className="text-center text-base pb-7 pt-0">티어 정보</Heading>

      <ul className="flex flex-col gap-y-5 pb-10">
        {sortedTierInformations?.map((tierInformation) => (
          <li key={tierInformation.value}>
            <dl className="flex flex-col gap-y-1">
              <dt className="font-bold text-neutral-90 text-[11px] tracking-tighter">
                {tierInformation.value}
              </dt>
              <dd className="text-neutral-70 text-[11px] tracking-tighter pb-2">
                {tierInformation.description}
              </dd>
              <hr className="border-neutral-30"></hr>
            </dl>
          </li>
        ))}
      </ul>
    </Modal>
  );
}

export default TiersInformationModal;
