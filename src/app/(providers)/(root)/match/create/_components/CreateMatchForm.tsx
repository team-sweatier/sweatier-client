"use client";
import "@/components/Forms/CalendarForm/calendar.css";
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
import "react-toastify/dist/ReactToastify.css";

// return toast.info("로그인이 필요한 서비스입니다.");

import api from "@/api";
import { useRouter } from "next/navigation";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

function CreateMatchForm() {
  const methods = useForm({
    mode: "onChange",
  });

  const {
    handleSubmit,
    formState: { isValid },
  } = methods;

  const router = useRouter();

  const [kakaoMapResult, setKakaoMapResult] = useState({
    placeName: "웅진IT 본사",
    region: "서울",
    address: "서울특별시 중구 청계천로 24",
    latitude: 37.5685159133492,
    longitude: 126.98020965303,
  }); // 기본 위치 설정 (웅진 본사)

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

    console.log("보낼 데이터 :", finalData);

    try {
      const response = await api.match.createMatch(finalData);
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

export default CreateMatchForm;
