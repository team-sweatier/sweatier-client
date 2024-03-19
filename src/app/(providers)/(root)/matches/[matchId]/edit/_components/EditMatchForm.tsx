"use client";
import api from "@/api";
import ContentTextarea from "@/components/Forms/ContentTextarea/ContentTextarea";
import FormSelector from "@/components/Forms/FormSelector";
import MatchCalendar from "@/components/Forms/MatchCalendar/MatchCalendar";
import MatchKakaoMap from "@/components/Forms/MatchKakaoMap";
import MatchSubmitButton from "@/components/Forms/MatchSubmitButton/MatchSubmitButton";
import MatchTime from "@/components/Forms/MatchTime/MatchTime";
import TitleInput from "@/components/Forms/TitleInput/TitleInput";
import { CreateMatchDto } from "@/types/createMatch.dto";
import { matchCreateIconsPath } from "@/utils/matchIcons";
import matchTypes from "@/utils/matchTypes";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { toast } from "react-toastify";

interface MatchFormProps {
  matchId: string;
  editValues?: any;
}

function EditMatchForm({ matchId, editValues }: MatchFormProps) {
  const [kakaoMapResult, setKakaoMapResult] = useState({
    placeName: "웅진IT 본사",
    region: "서울",
    address: "서울특별시 중구 청계천로 24",
    latitude: 37.5685159133492,
    longitude: 126.98020965303,
  }); // 기본 위치 설정 (웅진 본사)

  const router = useRouter();

  const methods = useForm({
    defaultValues: {
      ...editValues,
      sportsTypeName: editValues.sportType[0],
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

    const editData: any = {
      ...rest,
      ...kakaoMapResult,
      matchDay: matchDateTime,
    };

    const finalEditData: CreateMatchDto = {
      address: editData.address,
      capability: editData.capability,
      content: editData.content,
      gender: editData.gender,
      latitude: editData.latitude,
      longitude: editData.longitude,
      matchDay: "2024-03-15T00:00:00.000Z",
      placeName: editData.placeName,
      region: editData.region,
      sportsTypeName: editData.sportType[0],
      title: editData.title,
    };

    try {
      const { id } = await api.match.updateMatch(matchId, finalEditData);
      toast.success("게시물이 수정되었습니다!");
      router.prefetch(`/matches/${id}`);
      router.push(`/matches/${id}`);
    } catch (error) {
      console.error("Match creation failed:", error);
      toast.success("게시물 수정에 실패했습니다.");
    }
  };

  //* 최초 마운팅 시 editvalues의 주소 정보로 초기값 설정
  useEffect(() => {
    setKakaoMapResult(() => ({
      placeName: editValues.placeName,
      region: editValues.region,
      address: editValues.address,
      latitude: editValues.latitude,
      longitude: editValues.longitude,
    }));
  }, [editValues]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormSelector
          name="sportsTypeName"
          label="종목"
          iconSrc={matchCreateIconsPath.sport}
          options={matchTypes.sports.map((sportType) => ({
            label: Object.keys(sportType)[0],
            value: Object.values(sportType)[0],
          }))}
        />
        <TitleInput />
        <ContentTextarea />
        <FormSelector
          name="gender"
          label="모집성별"
          iconSrc={matchCreateIconsPath.gender}
          options={matchTypes.gender.map((genderType) => ({
            label: Object.keys(genderType)[0],
            value: Object.values(genderType)[0],
          }))}
        />
        <FormSelector
          name="capability"
          label="매치유형"
          iconSrc={matchCreateIconsPath.players}
          options={matchTypes.players.map((playType) => ({
            label: Object.keys(playType)[0],
            value: Object.values(playType)[0],
          }))}
        />
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
