"use client";

import TypesButtonGroup from "@/components/Forms/TypesButtonGroup";
import MatchDto from "@/types/MatchDto";
import matchTypes from "@/utils/matchTypes";
import dayjs from "dayjs";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import timeIcon from "../../../../public/assets/timeIcon.svg";
import CalendarForm from "../CalendarForm/CalendarForm";
import DropDownGroup from "../DropDownGroup";
import FormOuter from "../FormOuter";
import InputForm from "../InputForm/InputForm";
import Label from "../Label";
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
    formState: { errors, isValid },
  } = useForm<FieldValues>({
    defaultValues: editValues || {},
  });
  const methods = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (matctData) => {
    if (matctData.hasOwnProperty("players")) {
      matctData.players = parseInt(matctData.players, 10);
    }
    if (matctData.hasOwnProperty("date")) {
      matctData.date = dayjs(matctData.date).format("YYYY-MM-DD");
    }

    console.log(matctData);
  };

  return (
    <FormProvider {...methods}>
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

        <DropDownGroup id="time" label="경기 시작 시간" />

        <FormOuter>
          <Label id={"place"} label={"경기 지역"} iconSrc={timeIcon} />
          <div className="w-full h-60 bg-natural-30" />
        </FormOuter>

        <FormOuter>
          <input
            type="submit"
            value={editValues ? "수정 완료" : "작성 완료"}
            className="text-white bg-primary-100 font-medium rounded-lg text-sm px-5 py-5 text-center disabled:cursor-not-allowed cursor-pointer w-full disabled:bg-gray-300"
            disabled={!isValid}
          />
        </FormOuter>
      </form>
    </FormProvider>
  );
}

export default MatchForm;
