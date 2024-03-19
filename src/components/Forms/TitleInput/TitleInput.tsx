import FormOuter from "@/components/Forms/FormOuter";
import Icon from "@/components/Icon";
import { matchCreateIconsPath } from "@/utils/matchPatchs";
import { useFormContext } from "react-hook-form";

function TitleInput() {
  const { register } = useFormContext();
  return (
    <FormOuter>
      <div className="flex items-center pb-4">
        <label className="font-bold flex items-center gap-x-1" htmlFor="title">
          <Icon
            src={matchCreateIconsPath.title}
            alt="postIcon-icon"
            classStyles="mb-[2px]"
          />
          제목
        </label>
        <div className="flex pl-1 items-center">
          <Icon
            src={matchCreateIconsPath.grayDot}
            alt="title-required-message"
            classStyles="pb-1"
          />
          <p className="text-neutral-50 text-xs pl-1">
            제목은 5글자 이상이어야 합니다.
          </p>
        </div>
      </div>
      <input
        {...register("title", {
          required: "이 필드는 필수입니다.",
          minLength: {
            value: 5,
            message: "제목은 5글자 이상이어야 합니다.",
          },
        })}
        id="title"
        className="border border-neutral-50 placeholder:text-neutral-50 text-sm rounded-lg focus:ring-primary-100 focus:border-primary-100 block w-full dark:bg-neutral-50 dark:border-neutral-50 dark:placeholder-neutral-50 dark:text-white dark:focus:ring-primary-100 dark:focus:border-primary-100 px-5 py-3 font-light"
        placeholder="제목을 입력해주세요."
      />
    </FormOuter>
  );
}

export default TitleInput;
