import api from "@/api";
import Heading from "@/components/Heading";
import Modal from "@/components/Modal";
import { useQuery } from "@tanstack/react-query";

function TiersInformationModal() {
  const { data: tiersInformations } = useQuery({
    queryKey: ["tiersInformation"],
    queryFn: api.tier.getTiersInformation,
  });

  console.log(tiersInformations);
  return (
    <Modal className="max-w-xs max-h-[450px]">
      <Heading className="text-center text-base pb-10 pt-0">티어 정보</Heading>

      <ul className="flex flex-col gap-y-5 pb-10">
        {tiersInformations?.map((tierInformation) => (
          <li key={tierInformation.value}>
            <dl className="flex flex-col gap-y-2">
              <dt className="font-bold text-neutral-90 text-sm">
                {tierInformation.value}
              </dt>
              <dd className="text-neutral-70 text-[10px]">
                {tierInformation.description}
              </dd>
            </dl>
          </li>
        ))}
      </ul>
    </Modal>
  );
}

export default TiersInformationModal;
