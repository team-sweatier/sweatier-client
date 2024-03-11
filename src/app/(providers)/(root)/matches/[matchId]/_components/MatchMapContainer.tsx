import Icon from "@/components/Icon";
import { matchDetailIcons } from "@/utils/matchIcons";

const temporaryDataLabel = {
  keyword: "매현시민의 숲 테니스장",
  address: "서울 서초구 매헌로 99 (양재동)",
};

function MatchMapContainer() {
  //todo: 장소 위치 받아오기
  return (
    <div className="flex flex-col item-center pb-14">
      <div className="flex item-center w-full gap-x-2">
        <Icon
          alt={"경기 장소"}
          src={matchDetailIcons.address}
          classStyles="mb-1"
        />
        <div className="font-bold tex-sm">{temporaryDataLabel.keyword}</div>
      </div>
      <div className="text-sm pl-6 pt-2">{temporaryDataLabel.address}</div>
      <div className="bg-neutral-20 w-full h-40 mt-4" />
    </div>
  );
}

export default MatchMapContainer;
