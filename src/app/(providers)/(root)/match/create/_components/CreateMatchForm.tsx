"use client";
import ContentTextarea from "@/components/Forms/ContentTextarea/ContentTextarea";
import GenderSelector from "@/components/Forms/GenderSelector/GenderSelector";
import MatchCalendar from "@/components/Forms/MatchCalendar/MatchCalendar";
import MatchKakaoMap from "@/components/Forms/MatchKakaoMap/MatchKakaoMap";
import MatchSubmitButton from "@/components/Forms/MatchSubmitButton/MatchSubmitButton";
import MatchTime from "@/components/Forms/MatchTime/MatchTime";
import MatchTypeSelector from "@/components/Forms/MatchTypeSelector/MatchTypeSelector";
import SportTypeSelector from "@/components/Forms/SportTypeSelector/SportTypeSelector";
import TitleInput from "@/components/Forms/TitleInput/TitleInput";
import dayjs from "dayjs";
import { useState } from "react";
import "react-day-picker/dist/style.css";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

function CreateMatchForm() {
  const [kakaoMapResult, setKakaoMapResult] = useState({
    placeName: "웅진IT 본사",
    region: "",
    address: "",
    latitude: 37.5685159133492,
    longitude: 126.98020965303,
  }); // 기본 위치 설정 (웅진 본사)

  const methods = useForm({
    mode: "onChange",
  });

  const {
    handleSubmit,
    formState: { isValid },
  } = methods;

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const matchDateTime = dayjs(data.matchDay)
      .hour(parseInt(data.hour))
      .minute(parseInt(data.minute))
      .toDate();

    const { hour, minute, ...rest } = data;

    const finalData = {
      ...rest,
      ...kakaoMapResult,
      matchDay: matchDateTime,
    };

    console.log(finalData);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SportTypeSelector />
        <TitleInput />
        <ContentTextarea />
        <GenderSelector />
        <MatchTypeSelector />
        <MatchCalendar />
        <MatchTime />
        <MatchKakaoMap
          kakaoMapResult={kakaoMapResult}
          setKakaoMapResult={setKakaoMapResult}
        />
        <MatchSubmitButton isValid={isValid} />
      </form>
    </FormProvider>
  );
}

export default CreateMatchForm;
