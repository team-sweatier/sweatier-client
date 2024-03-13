interface MatchRuleContainerProps {
  sportRules: any;
}

function MatchRuleContainer({ sportRules }: MatchRuleContainerProps) {
  const rulesArray = sportRules
    .split("\n")
    .map((rule: string) => rule.trim())
    .filter((rule: string) => rule !== "");

  return (
    <div className="border border-natural-30 rounded-lg  block w-full dark:bg-natural-50 dark:border-natural-50 dark:text-white p-5 mb-8">
      <div className="text-[16px] font-bold">경기규칙</div>
      <ul className="py-4 text-[14px] text-neutral-90 leading-6 list-none pl-1">
        {rulesArray.map((rule: string, i: number) => (
          <li key={`${rule}-${i}`}>{rule}</li>
        ))}
      </ul>
    </div>
  );
}

export default MatchRuleContainer;
