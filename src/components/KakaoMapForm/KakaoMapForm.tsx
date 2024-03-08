import matchIcons from "@/utils/matchIcons";
import FormOuter from "../Forms/FormOuter";
import KakaoMap from "../Forms/KakaoMap";
import Label from "../Forms/Label";

function KakaoMapForm() {
  return (
    <FormOuter>
      <Label id={"place"} label={"경기 지역"} iconSrc={matchIcons.place} />
      <div className="w-full h-60 bg-natural-30" />
      <KakaoMap />
    </FormOuter>
  );
}

export default KakaoMapForm;
