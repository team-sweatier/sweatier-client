import RoundButton from "@/components/Buttons/RoundButton";
import useFilterStore from "@/store/filter.store";

function TypesList({
  typeName,
  typesList,
  className,
}: {
  typeName: string;
  typesList: string[];
  className?: string;
}) {
  const filterStore = useFilterStore();
  const selectedState =
    typeName === "sports" ? filterStore.sports : filterStore.region;
  const setSelectedState =
    typeName === "sports" ? filterStore.setSports : filterStore.setRegion;

  return (
    <ul className={`flex items-center mt-2 gap-1 ${className}`}>
      {typesList.map((type) => (
        <li key={type}>
          <RoundButton
            label={type}
            isSelected={type === selectedState}
            onClick={() => {
              setSelectedState(type);
            }}
            key={type}
          />
        </li>
      ))}
    </ul>
  );
}

export default TypesList;
