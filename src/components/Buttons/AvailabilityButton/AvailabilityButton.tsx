import Image from "next/image";

function AvailabilityButton({
  imagePath,
  label,
}: {
  imagePath: string | undefined;
  label: string;
}) {
  const baseClass =
    "rounded-[10px] gap-x-1 justify-center relative flex w-16 h-6 items-center";
  const conditionClass =
    label === "신청 가능"
      ? "border border-primary-100 text-primary-100"
      : label === "마감" || label === "신청 완료"
      ? "bg-[#E7E7E7] text-[#9BA2A8]"
      : "border border-warning text-warning";

  return (
    <div className={`${baseClass} ${conditionClass}`}>
      {imagePath && (
        <div>
          <Image src={imagePath} width={10} height={12} alt="alarm-image" />
        </div>
      )}

      <span className="text-[10px] font-bold">{label}</span>
    </div>
  );
}

export default AvailabilityButton;
