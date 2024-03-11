"use client";

import BlueButton from "@/components/Buttons/BlueButton";
import CalendarForm from "@/components/Forms/CalendarForm";
import DropDownGroup from "@/components/Forms/DropDownGroup";
import KakaoMapForm from "@/components/Forms/KakaoMapForm";
import TypesButtonGroup from "@/components/Forms/TypesButtonGroup";
import { MatchResonseType } from "@/types/match.response.type";
import { matchCreateIcons } from "@/utils/matchIcons";
import matchTypes from "@/utils/matchTypes";
import dayjs from "dayjs";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

import InputForm from "@/components/Forms/InputForm";
import TextareaForm from "@/components/Forms/TextAreaForm/TextAreaForm";
import { useEffect } from "react";

//* 수정데이터가 있다면(editValues) 해당 values를 defaultValues로, 아니면 {}로
interface MatchFormProps {
  editValues?: MatchResonseType;
}

function EditMatchForm({ editValues }: MatchFormProps) {
  const methods = useForm<FieldValues>({
    defaultValues: editValues || {},
  });
  const {
    handleSubmit,
    formState: { isValid },
    setValue,
  } = methods;

  //* capability에 따른 매치 유형 선택하기 (ex. 2 -> 1:1)
  useEffect(() => {
    if (editValues?.capability) {
      const foundItem = matchTypes.players.find((item) =>
        Object.values(item).includes(editValues.capability)
      );
      const matchingKey = foundItem ? Object.keys(foundItem)[0] : null;

      if (matchingKey) {
        setValue("players", matchingKey, { shouldValidate: true });
      }
    }
  }, [editValues, setValue]);

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
    };

    console.log("requestData", requestData);
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
          id="players"
          label="매치유형"
          typeString={matchTypes.players}
        />
        <CalendarForm />
        <DropDownGroup id="time" label="경기 시작 시간" />
        <KakaoMapForm editValues={editValues} />
        <BlueButton buttonLabel={"수정 완료"} isValid={isValid} type="submit" />
      </form>
    </FormProvider>
  );
}

export default EditMatchForm;
