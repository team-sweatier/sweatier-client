// import Icon from "@/components/Icon";
// import { matchCreateIcons } from "@/utils/matchIcons";
// import { PropsWithChildren } from "react";
// import FormOuter from "../FormOuter";
// import Input from "../Input";
// import Label from "../Label";

// type InputFormProps = PropsWithChildren<{
//   label: string;
//   id: string;
//   placeholder: string;
// }>;

// function InputForm({ label, id, placeholder }: InputFormProps) {
//   return (
//     <FormOuter>
//       <div className="flex items-center">
//         <Label id={id} label={label} iconSrc={matchCreateIcons.title} />
//         <div className="flex pl-1 pb-2 items-center">
//           <Icon src={matchCreateIcons.grayDot} alt="title-required-message" />
//           <p className="text-natural-50 text-xs pl-1 ">
//             제목은 5글자 이상이어야 합니다.
//           </p>
//         </div>
//       </div>
//       <Input id={id} label={label} placeholder={placeholder} minLength={5} />
//     </FormOuter>
//   );
// }

// export default InputForm;

import Icon from "@/components/Icon";
import { matchCreateIcons } from "@/utils/matchIcons";
import { PropsWithChildren } from "react";
import { useFormContext } from "react-hook-form";
import FormOuter from "../FormOuter";
import Input from "../Input";
import Label from "../Label";

type InputFormProps = PropsWithChildren<{
  label: string;
  id: string;
  placeholder: string;
}>;

function InputForm({ label, id, placeholder }: InputFormProps) {
  const { register } = useFormContext();

  return (
    <FormOuter>
      <div className="flex items-center">
        <Label id={id} label={label} iconSrc={matchCreateIcons.title} />
        <div className="flex pl-1 pb-2 items-center">
          <Icon src={matchCreateIcons.grayDot} alt="title-required-message" />
          <p className="text-natural-50 text-xs pl-1">
            제목은 5글자 이상이어야 합니다.
          </p>
        </div>
      </div>
      <Input
        {...register(id, {
          required: "이 필드는 필수입니다.",
          minLength: { value: 5, message: "제목은 5글자 이상이어야 합니다." },
        })}
        id={id}
        label={label}
        placeholder={placeholder}
        minLength={5}
      />
    </FormOuter>
  );
}

export default InputForm;
