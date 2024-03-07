"use client";

import SportTypesButton from "@/components/SportTypesButton";
import MatchDto from "@/types/MatchDto";
import dayjs from "dayjs";
import { useEffect } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import FormOuter from "../../FormOuter";
import CalendarForm from "../CalendarForm/CalendarForm";
import InputForm from "../InputForm/InputForm";
import SelectForm from "../SelectForm/SelectForm";
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
      <SportTypesButton id="sport" label="종목" />
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
      <SelectForm
        label="모집인원"
        id="players"
        placeholder="모집인원을 입력해주세요."
        register={register}
        errors={errors}
        values={["2명", "4명", "6명", "8명"]}
        valuesHolders={["2", "4", "6", "8"]}
      />
      <SelectForm
        label="모집인원 성별"
        id="gender"
        placeholder="모집인원의 성별을 입력해주세요."
        register={register}
        errors={errors}
        values={["혼성", "남성", "여성"]}
        valuesHolders={["both", "male", "female"]}
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
