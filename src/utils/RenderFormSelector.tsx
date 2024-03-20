import FormSelector from "@/components/Forms/FormSelector";
import { matchCreateIconsPath } from "./matchPaths";
import matchTypes from "./matchTypes";

type MatchTypeKeys = keyof typeof matchTypes;

const renderFormSelector = (name: MatchTypeKeys, label: string) => {
  const optionObj = matchTypes[name];
  if (!optionObj) null;

  return (
    <FormSelector
      name={name}
      label={label}
      iconSrc={matchCreateIconsPath[name]}
      options={optionObj.map((type) => ({
        label: Object.keys(type)[0],
        value: Object.values(type)[0],
      }))}
    />
  );
};

export default renderFormSelector;
