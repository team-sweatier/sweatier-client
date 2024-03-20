import FormOuter from "@/components/Forms/FormOuter";
import Icon from "@/components/Icon";
import { matchCreateIconsPath } from "@/utils/matchPaths";
import { useFormContext } from "react-hook-form";

function ContentTextarea() {
  const { register } = useFormContext();

  return (
    <FormOuter>
      <div className="flex items-center pb-4 ">
        <label className="font-bold flex items-center gap-x-1" htmlFor="title">
          <Icon
            src={matchCreateIconsPath.content}
            alt="postIcon-icon"
            classStyles="mb-[2px]"
          />
          내용
        </label>
        <div className="flex pl-1 items-center">
          <Icon
            src={matchCreateIconsPath.grayDot}
            alt="title-required-message"
            classStyles="pb-1"
          />
          <p className="text-neutral-50 text-xs pl-1">
            내용은 10글자 이상이어야 합니다.
          </p>
        </div>
      </div>
      <textarea
        {...register("content", {
          required: "이 필드는 필수입니다.",
          minLength: {
            value: 10,
            message: "내용은 10글자 이상이어야 합니다.",
          },
        })}
        id="content"
        placeholder="내용을 입력해주세요"
        className=" border border-neutral-50 placeholder:text-neutral-50 text-sm rounded-lg focus:ring-primary-100 focus:border-primary-100 block w-full dark:bg-neutral-50 dark:border-neutral-50 dark:placeholder-neutral-50 dark:text-white dark:focus:ring-primary-100 dark:focus:border-primary-100 px-5 py-3 font-light resize-none h-32 p-4"
      />
    </FormOuter>
  );
}

export default ContentTextarea;
