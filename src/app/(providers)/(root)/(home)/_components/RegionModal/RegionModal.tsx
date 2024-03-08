import { Dispatch, SetStateAction } from "react";

function RegionModal({
  selectedRegion,
  setSelectedRegion,
}: {
  selectedRegion: string;
  setSelectedRegion: Dispatch<SetStateAction<string>>;
}) {
  const regions = [
    "서울",
    "경기",
    "인천",
    "강원",
    "대전",
    "세종",
    "충남",
    "충북",
    "대구",
    "경북",
    "부산",
    "울산",
    "경남",
    "광주",
    "전남",
    "전북",
    "제주",
  ];
  const handleClickRegion = (e: React.MouseEvent<HTMLButtonElement>) => {
    const region = e.currentTarget.textContent;
    if (region) {
      setSelectedRegion(region);
    }
  };
  return (
    <div>
      <ul>
        {regions.map((region) => (
          <li key={region}>
            <button onClick={handleClickRegion}>{region}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RegionModal;
