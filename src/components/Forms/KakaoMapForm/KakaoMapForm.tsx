import matchIcons from "@/utils/matchIcons";
import FormOuter from "../FormOuter";
import Input from "../Input";
import KakaoMap from "../KakaoMap";
import Label from "../Label";

function KakaoMapForm() {
  return (
    <FormOuter>
      <Label id={"place"} label={"경기 위치"} iconSrc={matchIcons.place} />
      <div className="relative bg-primary-20 rounded-[10px] py-5 px-5">
        <div className="flex mb-4">
          <Input
            id="address"
            label="경기 위치"
            placeholder="경기장명을 입력하세요."
          />
        </div>
        <KakaoMap />
      </div>
    </FormOuter>
  );
}

export default KakaoMapForm;
