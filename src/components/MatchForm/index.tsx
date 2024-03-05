"use client";

import MatchDto from "@/types/MatchDto";
import { useEffect } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import InputForm from "./InputForm";
import SelectForm from "./SelectForm";
import TextareaForm from "./TextAreaForm";

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
    //todo : post api 연동
    console.log(matctData);
  };

  useEffect(() => {
    setFocus("title");
  }, [setFocus]);

  return (
    <div className="w-2/3 flex flex-col bg-slate-400">
      <form onSubmit={handleSubmit(onSubmit)}>
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
        />
        <SelectForm
          label="모집인원 성별"
          id="gender"
          placeholder="모집인원의 성별을 입력해주세요."
          register={register}
          errors={errors}
          values={["혼성", "남성", "여성"]}
        />
        <InputForm
          label="날짜"
          id="date"
          placeholder="날짜를 입력해주세요."
          register={register}
          errors={errors}
        />
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
        <input
          type="submit"
          value={editValues ? "수정 완료" : "작성 완료"}
          className="disabled:cursor-not-allowed cursor-pointer disabled:text-gray-600 text-blue-500"
          disabled={!isValid}
        />
      </form>
      {/* <DevTool control={control} /> */}
    </div>
  );
}

export default MatchForm;
