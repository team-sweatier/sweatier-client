import Icon from "@/components/Icon";
import matchIcons from "@/utils/matchIcons";
import { PropsWithChildren } from "react";
import { useFormContext } from "react-hook-form";
import FormOuter from "../FormOuter";
import Label from "../Label";
matchIcons;

type InputFormProps = PropsWithChildren<{
  label: string;
  id: string;
  placeholder: string;
}>;

function InputForm({ label, id, placeholder }: InputFormProps) {
  const { register, watch } = useFormContext();

  return (
    <FormOuter>
      <div className="flex items-center">
        <Label id={id} label={label} iconSrc={matchIcons.title} />
        <div className="flex pl-1 pb-2 items-center">
          <Icon
            src={
              String(watch(id)).length >= 5
                ? matchIcons.blueDot
                : matchIcons.grayDot
            }
            alt="title-required-message"
          />
          <p
            className={`text-natural-50 text-xs pl-1 ${
              String(watch(id)).length >= 5 ? "text-primary-100" : ""
            }`}
          >
            제목은 5글자 이상이어야 합니다.
          </p>
        </div>
      </div>

      <input
        id={id}
        type="text"
        aria-label={label}
        placeholder={placeholder}
        className=" border border-natural-50 placeholder:text-natural-50 text-sm rounded-lg focus:ring-primary-100 focus:border-primary-100 block w-full dark:bg-natural-50 dark:border-natural-50 dark:placeholder-natural-50 dark:text-white dark:focus:ring-primary-100 dark:focus:border-primary-100 px-5 py-3 font-light"
        {...register(`${id}`, { required: true, minLength: 5 })}
      />
    </FormOuter>
  );
}

export default InputForm;
