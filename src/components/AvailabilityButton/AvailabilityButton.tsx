import Image from "next/image";

function AvailabilityButton({
  imagePath,
  label,
  className,
}: {
  imagePath: string | undefined;
  label: string;
  className: string;
}) {
  return (
    <div
      className={`rounded-[10px] gap-x-1 justify-center relative flex w-16 h-6 items-center ${className}`}
    >
      {imagePath ? (
        <div>
          <Image
            src={imagePath}
            width={10}
            height={10}
            alt="alarm-image"
            className="object-cover"
          />
        </div>
      ) : null}

      <span className="text-[10px] font-bold">{label}</span>
    </div>
  );
}

export default AvailabilityButton;
