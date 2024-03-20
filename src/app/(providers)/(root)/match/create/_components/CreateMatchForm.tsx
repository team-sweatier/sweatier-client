"use client";

import api from "@/api";
import "@/components/Forms/CalendarForm/calendar.css";
import ContentTextarea from "@/components/Forms/ContentTextarea/ContentTextarea";
import MatchCalendar from "@/components/Forms/MatchCalendar/MatchCalendar";
import MatchKakaoMap from "@/components/Forms/MatchKakaoMap";
import MatchSubmitButton from "@/components/Forms/MatchSubmitButton/MatchSubmitButton";
import MatchTime from "@/components/Forms/MatchTime/MatchTime";
import TitleInput from "@/components/Forms/TitleInput/TitleInput";
import renderFormSelector from "@/utils/RenderFormSelector";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  //* form 제출 handler
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
      const { matchId } = await api.match.createMatch(finalData);
      toast.success("게시물이 작성되었습니다!");
      router.replace(`/matches/${matchId}`);
    } catch (error) {
      toast.success("게시물 작성에 실패했습니다.");
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {renderFormSelector("sportsTypeName", "종목")}
        <TitleInput />
        <ContentTextarea />
        {renderFormSelector("gender", "모집성별")}
        {renderFormSelector("capability", "매치유형")}
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
