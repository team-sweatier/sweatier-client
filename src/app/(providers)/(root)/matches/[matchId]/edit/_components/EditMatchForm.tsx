"use client";
import api from "@/api";
import ContentTextarea from "@/components/Forms/ContentTextarea/ContentTextarea";
import GenderSelector from "@/components/Forms/GenderSelector/GenderSelector";
import MatchCalendar from "@/components/Forms/MatchCalendar/MatchCalendar";
import MatchKakaoMap from "@/components/Forms/MatchKakaoMap/MatchKakaoMap";
import MatchSubmitButton from "@/components/Forms/MatchSubmitButton/MatchSubmitButton";
import MatchTime from "@/components/Forms/MatchTime/MatchTime";
import MatchTypeSelector from "@/components/Forms/MatchTypeSelector/MatchTypeSelector";
import SportTypeSelector from "@/components/Forms/SportTypeSelector/SportTypeSelector";
import TitleInput from "@/components/Forms/TitleInput/TitleInput";
import { MatchDetail } from "@/types/match.response.type";
import dayjs from "dayjs";
import { useState } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

interface MatchFormProps {
  matchId: string;
  editValues?: MatchDetail;
}

function EditMatchForm({ matchId, editValues }: MatchFormProps) {
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

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const matchDateTime = dayjs(data.matchDay)
      .hour(parseInt(data.hour))
      .minute(parseInt(data.minute))
      .toISOString();

    const { hour, minute, ...rest } = data;

    const finalData = {
      ...rest,
      ...kakaoMapResult,
      matchDay: matchDateTime,
    };

    try {
      const response = await api.match.updateMatch(matchId, finalData);
      return response;
      // 성공 로직, 예: 페이지 전환
    } catch (error) {
      console.error("Match creation failed:", error);
      // 실패 시 사용자에게 알리기
    }
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
