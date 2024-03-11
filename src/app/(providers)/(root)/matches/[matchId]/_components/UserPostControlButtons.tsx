"use client";
import { useRouter } from "next/navigation";

interface controlButtonsType {
  label: string;
  onClick: () => void;
}

interface UserPostControlButtonsProps {
  matchId: string;
}

function UserPostControlButtons({ matchId }: UserPostControlButtonsProps) {
  const router = useRouter();
  const controlButtons: controlButtonsType[] = [
    { label: "수정", onClick: () => router.push(`${matchId}/edit`) },
    {
      label: "삭제",
      onClick: () => {
        // 여기에 삭제 모달을 표시하는 로직을 추가
        console.log("삭제 모달 표시");
      },
    },
  ];

  return (
    <div className="flex items-center mb-5 justify-end gap-x-2 w-full">
      {controlButtons.map((button, i) => (
        <button
          key={`${button.label}-${i}`}
          type="button"
          className="text-neutral-70 font-medium rounded-full text-sm px-2 text-center cursor-pointer w-full border-2 border-natural-60  py-2 max-w-16 hover:bg-primary-100 hover:text-white hover:border-primary-100 transition-colors"
          onClick={button.onClick}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
}

export default UserPostControlButtons;
