import matchIcons from "@/utils/matchIcons";
import FormOuter from "../FormOuter";
import KakaoMap from "../KakaoMap";
import Label from "../Label";

function KakaoMapForm() {
  return (
    <FormOuter>
      <Label id={"place"} label={"경기장 위치"} iconSrc={matchIcons.place} />
      <div className="relative rounded-[10px] p-5 h-svh border-2 border-natural-20">
        <KakaoMap />
      </div>
    </FormOuter>
  );
}

export default KakaoMapForm;
