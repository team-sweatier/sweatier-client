"use client";
import BlueButton from "@/components/Buttons/BlueButton";
import CalendarForm from "@/components/Forms/CalendarForm";
import DropDownGroup from "@/components/Forms/DropDownGroup";
import InputForm from "@/components/Forms/InputForm";
import KakaoMapForm from "@/components/Forms/KakaoMapForm";
import TextareaForm from "@/components/Forms/TextAreaForm/TextAreaForm";
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
  useWatch,
} from "react-hook-form";

interface MatchFormProps {
  editValues?: MatchResonseType;
}

function EditMatchForm({ editValues }: MatchFormProps) {
  const methods = useForm({
    defaultValues: {
      ...editValues,
      matchDay: editValues ? dayjs(editValues.matchDay).toDate() : new Date(),
      hour: editValues ? dayjs(editValues.matchDay).format("HH") : "",
      minute: editValues ? dayjs(editValues.matchDay).format("mm") : "",
    },
  });

  const {
    handleSubmit,
    formState: { isValid },
    control,
  } = methods;

  const watchedCapability = useWatch({
    control,
    name: "capability",
  });

  const selectedPlayersKey = Object.entries(matchTypes.players).find(
    ([_, value]) => typeof value === "number" && value === watchedCapability
  )?.[0];

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const matchDate = dayjs(data?.matchDay).format("YYYY-MM-DD HH:mm");

    const requestData = {
      ...data,
      matchDate,
    };

    console.log("Form Submission", requestData);
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
          selectedValue={selectedPlayersKey}
        />
        <CalendarForm editValue={editValues?.matchDay} />
        <DropDownGroup />
        <KakaoMapForm editValues={editValues} />
        <BlueButton buttonLabel="수정 완료" isValid={isValid} type="submit" />
      </form>
    </FormProvider>
  );
}

export default EditMatchForm;

// matchDay : Fri Apr 12 2024 19:30:00 GMT+0900 (한국 표준시)
