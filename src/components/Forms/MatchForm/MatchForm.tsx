"use client";

import TypesButtonGroup from "@/components/Forms/TypesButtonGroup";
import KakaoMapForm from "@/components/KakaoMapForm";
import MatchDto from "@/types/MatchDto";
import matchIcons from "@/utils/matchIcons";
import matchTypes from "@/utils/matchTypes";
import dayjs from "dayjs";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import CalendarForm from "../CalendarForm/CalendarForm";
import DropDownGroup from "../DropDownGroup";
import FormOuter from "../FormOuter";
import InputForm from "../InputForm/InputForm";
import TextareaForm from "../TextAreaForm/TextAreaForm";

//* 수정데이터가 있다면(editValues) 해당 values를 defaultValues로, 아니면 {}로
interface MatchFormProps {
  editValues?: MatchDto;
}

function MatchForm({ editValues }: MatchFormProps) {
  const methods = useForm<FieldValues>({
    defaultValues: editValues || {},
  });
  const {
    handleSubmit,
    formState: { isValid },
  } = methods;

  const onSubmit: SubmitHandler<FieldValues> = (matchData) => {
    //* 1. date 날짜 formatting
    if (matchData.hasOwnProperty("date")) {
      matchData.date = dayjs(matchData.date).format("YYYY-MM-DD");
    }

    //* 2. hour과 minute을 합쳐 matchTime 생성
    const matchTime = `${matchData.hour}:${matchData.minute}`;

    //* 3. hour과 minute 제외
    const { hour, minute, ...restOfMatchData } = matchData;

    //* 4. hour과 minute 제외하고, matchTime를 추가한 새로운 객체 생성
    const requestData = {
      ...restOfMatchData,
      matchTime: matchTime,
    };

    console.log(requestData);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TypesButtonGroup
          iconSrc={matchIcons.post}
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
          iconSrc={matchIcons.gender}
          id="gender"
          label="모집성별"
          typeString={matchTypes.gender}
        />
        <TypesButtonGroup
          iconSrc={matchIcons.players}
          id="players"
          label="모집인원"
          typeString={matchTypes.players}
        />
        <CalendarForm />
        <DropDownGroup id="time" label="경기 시작 시간" />
        <KakaoMapForm />
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
