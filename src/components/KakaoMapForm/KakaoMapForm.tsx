import matchIcons from "@/utils/matchIcons";
import FormOuter from "../Forms/FormOuter";
import KakaoMap from "../Forms/KakaoMap";
import Label from "../Forms/Label";

function KakaoMapForm() {
  return (
    <FormOuter>
      <Label id={"place"} label={"경기 지역"} iconSrc={matchIcons.place} />
      <div className="relative">
        <main className="w-full sm:h-60 h-48 left-0 top-0">
          <KakaoMap latitude={37.5685159133492} longitude={126.98020965303} />
        </main>
      </div>
    </FormOuter>
  );
}

export default KakaoMapForm;
