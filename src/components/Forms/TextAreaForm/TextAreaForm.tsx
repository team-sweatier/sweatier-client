import Icon from "@/components/Icon";
import { matchCreateIcons } from "@/utils/matchIcons";
import { PropsWithChildren } from "react";
import { useFormContext } from "react-hook-form";
import FormOuter from "../FormOuter";
import Label from "../Label";

type TextareaFormProps = PropsWithChildren<{
  label: string;
  id: string;
  placeholder: string;
}>;

function TextareaForm({ label, id, placeholder }: TextareaFormProps) {
  const { register } = useFormContext();

  return (
    <FormOuter>
      <div className="flex items-center">
        <Label id={id} label={label} iconSrc={matchCreateIcons.content} />
        <div className="flex pl-1 items-center">
          <Icon
            src={matchCreateIcons.grayDot}
            alt="title-required-message"
            classStyles="pb-1"
          />
          <p className="text-natural-50 text-xs pl-1 ">
            내용은 10글자 이상이어야 합니다.
          </p>
        </div>
      </div>
      <textarea
        id={id}
        aria-label={label}
        placeholder={placeholder}
        className=" border border-natural-50 placeholder:text-natural-50 text-sm rounded-lg focus:ring-primary-100 focus:border-primary-100 block w-full dark:bg-natural-50 dark:border-natural-50 dark:placeholder-natural-50 dark:text-white dark:focus:ring-primary-100 dark:focus:border-primary-100 px-5 py-3 font-light resize-none h-32 p-4"
        {...register(`${id}`, { required: true, minLength: 10 })}
      />
    </FormOuter>
  );
}

export default TextareaForm;
