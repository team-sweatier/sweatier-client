"use client";

import TypesButtonGroup from "@/components/TypesButtonGroup";
import MatchDto from "@/types/MatchDto";
import matchTypes from "@/utils/matchTypes";
import dayjs from "dayjs";
import { useEffect } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import FormOuter from "../../FormOuter";
import CalendarForm from "../CalendarForm/CalendarForm";
import InputForm from "../InputForm/InputForm";
import TextareaForm from "../TextAreaForm/TextAreaForm";

//* 수정데이터가 있다면(editValues) 해당 values를 defaultValues로, 아니면 {}로
interface MatchFormProps {
  editValues?: MatchDto;
}

function MatchForm({ editValues }: MatchFormProps) {
  const {
    register,
    handleSubmit,
    control,
    watch,
    setFocus,
    formState: { errors, isValid },
  } = useForm<FieldValues>({
    defaultValues: editValues || {},
  });

  const onSubmit: SubmitHandler<FieldValues> = (matctData) => {
    if (matctData.hasOwnProperty("players")) {
      matctData.players = parseInt(matctData.players, 10);
    }
    if (matctData.hasOwnProperty("date")) {
      matctData.date = dayjs(matctData.date).format("YYYY-MM-DD");
    }
    //todo : post api 연동
    console.log(matctData);
  };

  useEffect(() => {
    setFocus("title");
  }, [setFocus]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TypesButtonGroup
        control={control}
        watch={watch}
        id="sport"
        label="종목"
        typeString={matchTypes.sports}
      />
      <InputForm
        label="제목"
        id="title"
        placeholder="제목을 입력해주세요."
        register={register}
        errors={errors}
      />
      <TextareaForm
        label="내용"
        id="content"
        placeholder="내용을 입력해주세요."
        register={register}
        errors={errors}
      />

      <TypesButtonGroup
        control={control}
        watch={watch}
        id="gender"
        label="모집성별"
        typeString={matchTypes.gender}
      />

      <TypesButtonGroup
        control={control}
        watch={watch}
        id="players"
        label="모집인원"
        typeString={matchTypes.players}
      />

      <CalendarForm control={control} />
      <InputForm
        label="시간"
        id="time"
        placeholder="매칭 시간를 입력해주세요."
        register={register}
        errors={errors}
      />
      <InputForm
        label="장소"
        id="place"
        placeholder="매칭 장소를 입력해주세요."
        register={register}
        errors={errors}
      />
      <FormOuter>
        <input
          type="submit"
          value={editValues ? "수정 완료" : "작성 완료"}
          className="text-white bg-primary-100 font-medium rounded-lg text-sm px-5 py-3 text-center disabled:cursor-not-allowed cursor-pointer w-full disabled:bg-gray-300"
          disabled={!isValid}
        />
      </FormOuter>
    </form>
  );
}

export default MatchForm;
