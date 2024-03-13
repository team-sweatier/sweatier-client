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
import { MatchResonseType } from "@/types/match.response.type";
import dayjs from "dayjs";
import { useState } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

interface MatchFormProps {
  editValues?: MatchResonseType;
}

function EditMatchForm({ editValues }: MatchFormProps) {
  const [kakaoMapResult, setKakaoMapResult] = useState({
    placeName: "웅진IT 본사",
    region: "",
    address: "",
    latitude: 37.5685159133492,
    longitude: 126.98020965303,
  }); // 기본 위치 설정 (웅진 본사)

  // todo : 주소 받으면 setKakaoMapResult <- 에 기본 값으로 설정

  const methods = useForm({
    defaultValues: {
      ...editValues,
      matchDay: editValues ? dayjs(editValues.matchDay).toDate() : new Date(),
      hour: editValues ? dayjs(editValues.matchDay).format("HH") : "",
      minute: editValues ? dayjs(editValues.matchDay).format("mm") : "",
    },
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

export default EditMatchForm;
