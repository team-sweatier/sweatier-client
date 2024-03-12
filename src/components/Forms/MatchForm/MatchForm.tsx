"use client";

import KakaoMapForm from "@/components/Forms/KakaoMapForm";
import TypesButtonGroup from "@/components/Forms/TypesButtonGroup";
import { matchCreateIcons } from "@/utils/matchIcons";
import matchTypes from "@/utils/matchTypes";
import dayjs from "dayjs";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import BlueButton from "../../Buttons/BlueButton";
import CalendarForm from "../CalendarForm/CalendarForm";
import DropDownGroup from "../DropDownGroup";
import InputForm from "../InputForm/InputForm";
import TextareaForm from "../TextAreaForm/TextAreaForm";

function MatchForm() {
  const methods = useForm<FieldValues>();
  const {
    handleSubmit,
    formState: { isValid },
  } = methods;

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const matchDate =
      dayjs(data.date).format("YYYY-MM-DD") +
      " " +
      data.time.hour +
      ":" +
      data.time.minute;

    //* 1. date 날짜 formatting
    if (data.hasOwnProperty("date")) {
      data.date = dayjs(data.date).format("YYYY-MM-DD");
    }

    const requestData = {
      ...data,
      matchDate: matchDate,
      // hour: undefined,
      // minute: undefined,
    };

    // 2. hour과 minute을 합쳐 matchTime 생성
    // const matchTime = `${data.hour}:${data.minute}`;

    // 3. hour과 minute 제외
    // const { hour, minute, ...restOfMatchData } = data;

    //  4. hour과 minute 제외하고, matchTime를 추가한 새로운 객체 생성
    // const requestData = {
    //   ...restOfMatchData,
    //   matchTime: matchTime,
    // };
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TypesButtonGroup
          iconSrc={matchCreateIcons.post}
          id="sport"
          label="종목"
          typeString={matchTypes.sports}
        />
        <InputForm label="제목" id="title" placeholder="제목을 입력해주세요." />
        <TextareaForm
          label="내용"
          id="content"
          placeholder="내용을 입력해주세요."
        />
        <TypesButtonGroup
          iconSrc={matchCreateIcons.gender}
          id="gender"
          label="모집성별"
          typeString={matchTypes.gender}
        />
        <TypesButtonGroup
          iconSrc={matchCreateIcons.players}
          id="capability"
          label="매치유형"
          typeString={matchTypes.players}
        />
        <CalendarForm />
        <DropDownGroup />
        <KakaoMapForm />
        <BlueButton buttonLabel="작성 완료" isValid={isValid} type="submit" />
      </form>
    </FormProvider>
  );
}

export default MatchForm;
